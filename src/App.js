import React, { useEffect } from 'react';
import Welcome from './Welcome';
import WelcomeHelper from './WelcomeHelper';
import WelcomeNeeder from './WelcomeNeeder';
import CreateuserHelper from './CreateuserHelper';
import CreateuserNeeder from './CreateuserNeeder';
import SearchmatchNeeder from './SearchmatchNeeder';
import SearchmatchHelper from './SearchmatchHelper';
import FoundNoMatchNeeder from './FoundNoMatchNeeder';
import FoundListOfMatchesNeeder from './FoundListOfMatchesNeeder';
import FoundListOfMatchesHelper from './FoundListOfMatchesHelper';
import GoodsReceivedNeeder from './GoodsReceivedNeeder';
import EstablishContactHelper from './EstablishContactHelper';
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

            <Route path="/helper/createuser" exact component={CreateuserHelper} />
            <Route path="/helper/welcome" exact component={WelcomeHelper} />
            <Route path="/helper/searchmatch" exact component={SearchmatchHelper} />
            <Route path="/helper/foundlistofmatches" exact component={FoundListOfMatchesHelper} />
            <Route path="/helper/establishcontacthelper" exact component={EstablishContactHelper} />
            
            <Route path="/" component={Component404} />
          </Switch>
        </content>
      </div>
    </Router>
  )
}

export default App;
