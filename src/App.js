import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import cookie from 'js-cookie';

import SplashScreen from './SplashScreen';

import CreateuserNeeder from './CreateuserNeeder';
import EnterMessage from './EnterMessage';

import CreateuserHelper from './CreateuserHelper';
import Dashboard from './Dashboard';

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
            <Route path="/" exact component={SplashScreen} />
            
            <Route path="/needer/createuser" exact component={CreateuserNeeder} />
            <Route path="/needer/entermessage" exact component={EnterMessage} />

            <Route path="/helper/createuser" exact component={CreateuserHelper} />
            <Route path="/helper/dashboard" exact component={Dashboard} />
            
            <Route path="/" component={Component404} />
          </Switch>
        </content>
      </div>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
