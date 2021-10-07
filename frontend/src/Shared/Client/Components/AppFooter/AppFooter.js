import React, { Component } from 'react';

class AppFooter extends Component {

  render() {
    
    return (
        <footer className="pharmacy-footer m-t15">
        <div className="footer-wrap m-size d-flex">
          <div className="contact-footer">
            <div className="contact-footer-wrap">
              <ul className="contact-footer-menu">
                <li>
                  <i className="fa fa-phone" /> Hotline: (+84) 988176899
                </li>
                <li>
                  <i className="fa fa-phone" /> Zalo/Viber (+84) 988176899
                </li>
                <li>
                  <i className="fa fa-phone" /> Telegram/Twiiter: 091 786 868
                </li>
                <li>
                  <i className="fa fa-phone" /> Tel: (+84) 02436436899
                </li>
                <li>
                  <i className="fa fa-phone" /> Email: xuanthanhphatvn@gmail.com
                </li>
                <li>
                  <i className="fa fa-phone" /> Địa chỉ: Tầng 22, Tòa nhà N09B2, Khu đô thị mới Dịch Vọng, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội
                </li>
              </ul>
            </div>
          </div>
          <div className="map-footer">
            <div className="map-footer-wrap">
              <iframe frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?q=N09B2&t=m&z=15&output=embed&iwloc=near" title="N09B2" aria-label="N09B2" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default AppFooter;
