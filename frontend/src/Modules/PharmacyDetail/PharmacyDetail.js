import React, { Component } from 'react';
import './PharmacyDetail.scss';

import ListPharmacy from './../Pharmacy/PharmacyService/dataInfor.json';
import PharmacyDetailMain from './PharmacyDetailMain';

class PharmacyDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pharname: '',
      address: '',
      point: '',
      describe: '',
      listPharmacy: ListPharmacy
    }
  }

  render() {

    const pharmacyId = this.props.match.params.id;
    var result = [];
    this.state.listPharmacy.forEach((item) => {

        if(item._id === pharmacyId) {
          //console.log("ok");
          result.push(item);
        }
    });
    return (
        <div className="pharmacy-d-detail-content m-auto m-size">
          {
            result.map((value,key)=>
            {
              return(
                <div>
                  <div className="pharmacy-d-breadcrumb">
                    Home / Product / ...
                  </div>
                  <div className="pharmacy-d-image-list">
                    <div className="pharmacy-d-image-left image-wrap">
                      <img className="pharmacy-d-image" src="https://vcdn-kinhdoanh.vnecdn.net/2020/05/21/LongChau-1996-1590015333.jpg" />
                    </div>
                    <div className="pharmacy-d-image-right">
                      <div className="pharmacy-d-image-right-top image-wrap">
                        <img className="pharmacy-d-image" src="https://vcdn-kinhdoanh.vnecdn.net/2020/05/21/LongChau-1996-1590015333.jpg" />
                      </div>
                      <div className="pharmacy-d-image-right-bottom image-wrap">
                        <img className="pharmacy-d-image" src="https://vcdn-kinhdoanh.vnecdn.net/2020/05/21/LongChau-1996-1590015333.jpg" />
                      </div>
                      <div className="pharmacy-d-image-right-bottom image-wrap">
                        <img className="pharmacy-d-image" src="https://via.placeholder.com/400x300" />
                      </div>
                    </div>
                  </div>
                  <div className="pharmacy-d-intro">
                    <div className="pharmacy-d-avatar">
                      <img src="https://via.placeholder.com/300" alt="" />
                    </div>
                    <div className="pharmacy-d-intro-content">
                      <h1>
                        {value.NamePhar}
                      </h1>
                      <h4>
                        Địa chỉ: {value.Adress}
                      </h4>
                    </div>
                  </div>
                  <PharmacyDetailMain/>
                </div>
              )
            })
          }
          
          
        </div>
    );
  }
}

export default PharmacyDetail;
