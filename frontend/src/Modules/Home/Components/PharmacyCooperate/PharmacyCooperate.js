import React, { Component } from 'react';
import './PharmacyCooperate.scss';

class PharmacyCooperate extends Component {

  render() {
      
    return (
        <div className="cooperate-pharmacy mt-15">
        <div className="cooperate-title text-center mb-15">
          <h2 className="mb-15 mt-40">
            Đối tác của chúng tôi
          </h2>
          <h3 className="mb-40">
            Hợp tác cùng phát triển
          </h3>
        </div>
        <div className="cooperate-content ">
          <div className="cooperate-list d-flex m-size m-auto">
            <div className="cooperate-item">
              <img src="http://stttttuyenquang.gov.vn/Image/Large/202111192148_39472.jpg" alt="" />
            </div>
            <div className="cooperate-item">
              <img src="https://live.staticflickr.com/8535/29377505540_59bbd363cf_n.jpg" alt="" />
            </div>
            <div className="cooperate-item">
              <img src="https://t3.ftcdn.net/jpg/02/56/43/56/360_F_256435689_LbKc2mjTFdDFMQ7aumVTOap4SB8Lxp09.jpg" alt="" />
            </div>
            <div className="cooperate-item">
              <img src="https://www.logodesignteam.com/images/portfolio-images/wireless-telecommunication-logo-design/wireless-tele-logo-design1.jpg" alt="" />
            </div>
            <div className="cooperate-item">
              <img src="https://dypdvfcjkqkg2.cloudfront.net/large/3677952-2905.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PharmacyCooperate;