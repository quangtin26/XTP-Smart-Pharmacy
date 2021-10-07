import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Redirect,
  BrowserRouter
} from "react-router-dom";

import AppInfor from '../../Shared/Client/Components/AppHeader/AppInfor/AppInfor';
import AppBar from '../../Shared/Client/Components/AppHeader/AppBar/AppBar';
import Home from '../../Modules/Home/Home';
import Introduce from '../../Modules/Introduce/Introduce';
import Pharmacy from '../../Modules/Pharmacy/Pharmacy';
import News from '../../Modules/News/News';
import ServicePage from '../../Modules/ServicePage/ServicePage';
import Contact from '../../Modules/Contact/Contact';
import PharmacyDetail from '../../Modules/PharmacyDetail/PharmacyDetail';
import NewsDetails from '../../Modules/News/NewsDetails/NewsDetails';
import FormRegister from '../../Modules/FormRegister/FormRegister';

import AppFooter3 from '../Client/Components/AppFooter/AppFooter3';


class Client extends Component {

  constructor(props) {
    super(props);

    this.state = {
        cityText: '',
        provinceText: '',
    }
  }

  getTextSearch = (city,province) => {
    console.log(city +" "+ province + " Duoc roi");

    localStorage.setItem("city",city);
    localStorage.setItem("province",province);

    this.setState({
      cityText: city,
      provinceText: province,
    });
    // this.goTo("pharmacy");
  }

  goTo = (url = "") => {
    url = window.location.origin + "/" + url;
    window.location.replace(url);
  };

  getSearchResult = () => {
    this.goTo("pharmacy");
    return (this.state.provinceText);
    
  }

  thuKetNoi = () => {
    console.log("Da ket noi duoc");
  }

  componentDidUpdate() {
    console.log(this.state.provinceText);
    //this.goTo("pharmacy");
  }

  render() {

    
    var result = [];
    // this.state.dataUser.forEach((item) => {

    //     if(item.name.indexOf(this.state.provinceText) !== -1) {
    //       result.push(item);
    //     }
    // });
    
    
    return (

      <div className="Client">    

        <BrowserRouter>
          <AppInfor></AppInfor>
          <AppBar></AppBar>

          <Switch>
            <Route exact path="/">
                <Redirect to="/home"></Redirect>
            </Route>
            <Route exact path="/home">
              <Home editFun={() => this.thuKetNoi()} searching={(city,province)=> this.getTextSearch(city,province)}/>
            </Route>
            <Route path="/introduce">
              <Introduce goto={this.goto}></Introduce>
            </Route>
            <Route path="/pharmacy">
              <Pharmacy listPharmacy={result} city={this.state.cityText} province={this.state.provinceText}/>
            </Route>
            <Route exact path="/news">
              <News></News>
            </Route>
            {/* <Route exact path="/register">
              <FormRegister />
            </Route> */}
            
            <Route path="/service">
              <ServicePage></ServicePage>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            {/* <Route path="/pharmacydetail">
              <PharmacyDetail></PharmacyDetail>
            </Route> */}
            <Route exact path="/news/:id" component={NewsDetails}></Route>
            {/* <Route exact path="/news/newsDetails/:id" component={NewsDetails}></Route> */}

            

            <Route exact path="/pharmacydetail/:id" component={PharmacyDetail}></Route>

            <Route path="/newsdetails">
              <NewsDetails></NewsDetails>
            </Route>
            
          
          </Switch>
          {/* <AppFooter></AppFooter> */}
          {/* <AppFooter2/> */}
          <AppFooter3/>
        </BrowserRouter>
      </div>
      
    );
  }
}

export default Client;
