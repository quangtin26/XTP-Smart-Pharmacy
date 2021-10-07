import React, { Component, Fragment } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Redirect,
  BrowserRouter
} from "react-router-dom";
import './Admin.scss';

import AppBar from './Components/AppBar/AppBar';
import SideBar from './Components/SideBar/SideBar';
import Footer from './Components/Footer/Footer';

import AllMembers from '../../ModulesAdmin/Members/Components/AllMembers/AllMembers';
import AddMembers from '../../ModulesAdmin/Members/Components/AddMembers/AddMembers';
import ManagerPost from '../../Modules/ManagerPost(admin)/ManagerPost';
import AddPost from '../../Modules/AddPost(admin)/AddPost';



class Admin extends Component {

  render() {
    return (
      <Fragment>
        <AppBar/>
        <div className="admin-container d-flex">    
          <div className="sidebar">
            <SideBar />
          </div>
          <div  className="main-content mr-5">
              <BrowserRouter>
                <Switch>
                  
                  <Route  path="/admin/addmembers">
                    <AddMembers />
                  </Route>
                  <Route  path="/admin/managerpost">
                    <ManagerPost />
                  </Route>
                  <Route  path="/admin/addpost">
                    <AddPost />
                  </Route>
                  

                  <Route path="/">
                    <AllMembers />
                  </Route>
                </Switch>
              </BrowserRouter>
          </div>
        </div>  
        <Footer/>
      </Fragment>
      
    );
  }
}

export default Admin;
