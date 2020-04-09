import React, { useEffect, useState, createRef } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import cookie from 'js-cookie';

function trim(str) {
  return str.slice(1, str.length).slice(0, str.length-2)
}

export default class SearchmatchNeeder extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: [],
      error: null
    }
    this.kill = this.kill.bind(this)
    this.interval = null
  }
  componentDidMount() {
    const me = cookie.getJSON('me')

    const protocol = document.location.protocol === 'http:' ? 'ws:' : 'wss:'

    const connection = new WebSocket(`${protocol}//${document.location.host}`)

    this.connection = connection
     
    connection.onopen = () => {
      connection.send(JSON.stringify({
        id: me.id,
        event: 'handshake',
        position: me.position,
        message: me.message
      })) 
    }
     
    connection.onerror = (error) => {
      this.setState({ error: error })
      console.log(this, `WebSocket error: ${error}`)
    }
     
    connection.onmessage = (e) => {
      console.log('onmessage', e.data)
      this.setState(s => ({
        messages: s.messages.concat({ message: trim(e.data), date: new Date() })
      }))
    }

    this.interval = setInterval(() => {
      console.log('Heartbeat ping')
      connection.send("{}")
    }, 1000 * 20)
  }

  componentWillUnmount() {
    this.kill()
    if (this.interval)
      clearInterval(this.interval)
  }

  kill() {
    this.connection.close()
  }
  
  render() {

    const { messages, error } = this.state
    const me = cookie.getJSON('me')

    if (error) {
      return (
        <React.Fragment>
          <p>Vi letar just nu efter personer som kan hjälpa dig i ditt närområde.</p>
          <h2>Något gick tyvärr fel vid anslutningen</h2>
        </React.Fragment>
      )
    }
    return (
      <div>
        <p>Vi letar just nu efter personer som kan hjälpa dig i ditt närområde.</p>
        <p>Stäng inte webläsaren... ({me.id})</p>
        <div className="button-holder">
          <Link to='/needer/entermessage'>
            <Button classes={{ 'label': 'larger' }} variant="contained" color="primary">
              Avbryt
            </Button>
          </Link>
          <Link to='/needer/entermessage'>
            <Button classes={{ 'label': 'larger' }} variant="contained" color="primary" onClick={this.kill} >
              Jag har fått hjälp och är nöjd
            </Button>
          </Link>
        </div>
        <hr />
        <div>
          {
            messages.length === 0 
            ? <div>Inga meddelanden än</div>
            : messages.map(x=>x).reverse().map(item =>
              <div className="message" key={ item.date }>
                <p className="text">
                  { item.message }
                </p>
                <p className="date">
                  { item.date.toString() }
                </p>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}
