import React, { Component } from 'react';
//import Client1 from '../Components/App/Client1';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";

import Client from '../Client/Client';
import Login from '../../Modules/Login/Login';
import FormRegister from '../../Modules/FormRegister/FormRegister';
import Admin from '../Admin/Admin';

class App extends Component {

  render() {
    
    return (
        <div>
           <Router>
          
          <Switch>

          <Route path="/login">
              <Login/>
            </Route>

            <Route path="/register">
              <FormRegister></FormRegister>
            </Route>

            <Route path="/admin">
              <Admin/>
            </Route>

            <Route path="/">
              <Client/>
            </Route>
            
          </Switch>
          
        </Router>
        </div>
    );
  }
}

export default App;
