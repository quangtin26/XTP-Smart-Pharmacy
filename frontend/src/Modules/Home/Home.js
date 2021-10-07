import React, { Component } from 'react';
import './Home.scss';
import PharmacySearch from './Components/PharmacySearch/PharmacySearch';
import PharmacyIntro from './Components/PharmacyIntro/PharmacyIntro';
import PharmacySolution from './Components/PharmacySolution/PharmacySolution';
import PharmacyBenefit from './Components/PharmacyBenefit/PharmacyBenefit';
import PharmacyForPatient from './Components/PharmacyForPatient/PharmacyForPatient';
import PharmacyCooperate from './Components/PharmacyCooperate/PharmacyCooperate';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
        provinceSearch: '',
        citySearch: '',

    }
  }

  componentDidUpdate() {
    {
      //(city,province) => this.props.searching(this.state.citySearch,this.state.provinceSearch)
    }
  }
  //this.props.editFun
  render() {
    
    return (
      <div className="">
        <div className="header-slide" style={{backgroundImage: 'url("images/banner_pharmacy_test2.jpg")'}}>
        </div>
        <PharmacySearch editFunClick={this.props.editFun} searchingFunClick={(city,province)=>this.props.searching(city,province)}/>
        <PharmacyIntro></PharmacyIntro>
        <PharmacySolution></PharmacySolution>
        <PharmacyBenefit></PharmacyBenefit>
        <PharmacyForPatient></PharmacyForPatient>
        <PharmacyCooperate/>
      </div>
    );
  }
}

export default Home;
