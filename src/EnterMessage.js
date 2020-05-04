import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import cookie from 'js-cookie';

export default function EnterMessage(props) {
  
  const [ text, setText ] = useState("")

  function removeuser() {
    cookie.remove('me')
    props.history.push('/')
  }

 /*
  function search() {
    const me = cookie.getJSON('me')
    const payload = {
      position: me.position,
      agent: me.agent,
      message: text,
      id: me.id
    }

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    }
    fetch('https://grannleveransen-be.herokuapp.com/helper', config)
  }
  */

  function setCookie() {
    const me = cookie.getJSON('me')
    me.message = text
    cookie.set('me', me)
  }

  return (
    <div>
    <script data-ad-client="ca-pub-9612046672815263" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <h1>Välkommen <span className="needer">MOTTAGARE</span></h1>
      <p>Tryck här för att be om hjälp av andra i ditt område</p>
      <p>Jag behöver hjälp med:</p>
      <TextField onChange={ x => setText(x.target.value) } classes={{ 'root': 'input-large' }}  id="outlined-basic" label="Handla, Medicin etc." />
      <hr />
      <div className="button-holder">
        <Button classes={{ 'label': 'larger' }} variant="contained" color="primary" onClick={removeuser}>
          Ta bort användare
        </Button>
        <Link to='/needer/searchmatch'>
          <Button classes={{ 'label': 'larger' }} variant="contained" color="primary" onClick={setCookie}>
            Be om hjälp nu
          </Button>        
        </Link>
      </div>
    </div>
  )
}
