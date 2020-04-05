import React, { useEffect } from 'react';
import Welcome from './Welcome';
import WelcomeHelper from './WelcomeHelper';
import WelcomeNeeder from './WelcomeNeeder';
import CreateuserHelper from './CreateuserHelper';
import CreateuserNeeder from './CreateuserNeeder';
import SearchmatchNeeder from './SearchmatchNeeder';
import FoundNoMatchNeeder from './FoundNoMatchNeeder';
import FoundListOfMatchesNeeder from './FoundListOfMatchesNeeder';
import GoodsReceivedNeeder from './GoodsReceivedNeeder';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import cookie from 'js-cookie';

window.test = cookie
const Component404 = () => <div>404</div>

function App(props) {
  return (
    <Router>
      <div className="App">
        <Link to='/'>
          <img src='/images/grannleveransen-logo.png' className="App-logo" alt="logo" />
        </Link>
        <content className="App-content"> 
        <h1>grannleveransen.se</h1>
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/needer/createuser" exact component={CreateuserNeeder} />
            <Route path="/needer/welcome" exact component={WelcomeNeeder} />
            <Route path="/needer/searchmatch" exact component={SearchmatchNeeder} />
            <Route path="/needer/foundlistofmatches" exact component={FoundListOfMatchesNeeder} />
            <Route path="/needer/goodsreceived" exact component={GoodsReceivedNeeder} />
            <Route path="/" component={Component404} />
          </Switch>
        </content>
      </div>
    </Router>
  )
}

class App2 extends React.Component {
  constructor(props) {
    super(props)

    const me = cookie.getJSON('me')

    let view = 'WELCOME'
    if (me && me.agent === 'HELPER')
      view = 'WELCOME-HELPER'
    if (me && me.agent === 'NEEDER')
      view = 'WELCOME-NEEDER'

    this.state = {
      view: view
    }

    this.setView = this.setView.bind(this)
    this.createuser = this.createuser.bind(this)
    this.removeuser = this.removeuser.bind(this)
  }

  setView(input) {
    if (input === 'CREATEUSER-HELPER') {
      return this.setState({ view: 'CREATEUSER-HELPER' })
    }
    if (input === 'CREATEUSER-NEEDER') {
      return this.setState({ view: 'CREATEUSER-NEEDER' })
    }
    if (input === 'WELCOME-HELPER') {
      return this.setState({ view: 'WELCOME-HELPER' })
    }
    if (input === 'WELCOME-NEEDER') {
      return this.setState({ view: 'WELCOME-NEEDER' })
    }
    if (input === 'SEARCHMATCH-NEEDER') {
      return this.setState({ view: 'SEARCHMATCH-NEEDER' })
    }
    if (input === 'FOUNDNOMATCH-NEEDER') {
      return this.setState({ view: 'FOUNDNOMATCH-NEEDER' })
    }
    if (input === 'FOUNDLISTOFMATCHES-NEEDER') {
      return this.setState({ view: 'FOUNDLISTOFMATCHES-NEEDER' })
    }
    if (input === 'GOODSRECEIVED-NEEDER') {
      return this.setState({ view: 'GOODSRECEIVED-NEEDER' })
    }
    if (input === 'WELCOME') {
      return this.setState({ view: 'WELCOME' })
    }
    console.error(`State ${input} not found`)
  }

  createuser(type) {
    cookie.set('me', { position: 'woah', agent: type })
    
    if (type === 'HELPER')
      this.setView('WELCOME-HELPER')
    if (type === 'NEEDER')
      this.setView('WELCOME-NEEDER')
  }

  removeuser() {
    cookie.remove('me')
    this.setView('WELCOME')
  }

  render() {
    const { view } = this.state

    let View
    if (view === 'WELCOME') {
      View = <Welcome setView={this.setView} />
    } else if (view === 'WELCOME-HELPER') {
      View = <WelcomeHelper removeuser={this.removeuser} />
    } else if (view === 'WELCOME-NEEDER') {
      View = <WelcomeNeeder setView={this.setView} removeuser={this.removeuser} />
    } else if (view === 'CREATEUSER-HELPER') {
      View = <CreateuserHelper setView={this.setView} createuser={this.createuser} />
    } else if (view === 'CREATEUSER-NEEDER') {
      View = <CreateuserNeeder setView={this.setView} createuser={this.createuser} />
    } else if (view === 'SEARCHMATCH-NEEDER') {
      View = <SearchmatchNeeder setView={this.setView} />
    } else if (view === 'FOUNDNOMATCH-NEEDER') {
      View = <FoundNoMatchNeeder setView={this.setView} />
    } else if (view === 'FOUNDLISTOFMATCHES-NEEDER') {
      View = <FoundListOfMatchesNeeder setView={this.setView} />
    } else if (view === 'GOODSRECEIVED-NEEDER') {
      View = <GoodsReceivedNeeder setView={this.setView} />
    }
    
    return (
      <div className="App">
        { View }
      </div>
    )
  }
}

export default App;
