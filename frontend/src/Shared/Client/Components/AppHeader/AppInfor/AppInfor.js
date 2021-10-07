import React, { Component } from 'react';
import './AppInfor.scss';

class AppInfor extends Component {

  render() {

    return (
        <div className="header-info">
        <div className="header-info-wrap d-flex m-size">
          <div className="left" style={{marginLeft:260}}>
            <i className="fa fa-phone m-r5" />
            <span className="m-r5">Liên hệ:</span>
            <span>+84969623498</span>
          </div>
          <div className="right-home">
            <i className="fa fa-envelope m-r5" />
            <span className="m-r5">Email:</span>
            <span>xuanthanhphat@gmail.com</span>
          </div>
        </div>
      </div>
    );
  }
}

export default AppInfor;
