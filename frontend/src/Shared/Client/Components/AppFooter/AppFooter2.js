import React, { Component } from 'react';
import './AppFooter.scss'
class AppFooter2 extends Component {

  render() {
    
    return (
        <footer className="pharmacy-footer mt-15">
        <div className="footer-wrap pt-15">
          <div className="top-footer d-flex m-size m-auto">
          <div className="follow-us-footer">
            <h3>Theo dõi tin tức và dịch vụ mơi nhất của chúng tôi!</h3>
            <div className="subscribe-area">
              <input type="text" name="subscribe" placeholder="Địa chỉ email" className="subcribe-input" />
              <button type="button" className="btn-subscribe" id="subscribe-submit" data-action="/vi/danh-sach/subscribe" data-csrf>ĐĂNG KÝ</button>  
            </div>
            <div className="footer-social d-flex">
              <h3>Theo dõi chúng tôi</h3>
              <div className="footer-social_icon">
                <a href="https://www.facebook.com/Vinmec/">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="Vinmec Facebook Fanpage" className="icon facebook-icon" />
                </a>
                <a href="https://www.youtube.com/user/VinmecHospital">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/YouTube_social_red_circle_%282017%29.svg" alt="Vinmec youtube channel" className="icon youtube-icon" />
                </a>
              </div>
            </div>
            <div className="ministry-industry-trade">
              <img src="https://i1.wp.com/tuvannhathuong.com/wp-content/uploads/2018/07/t%E1%BA%A3i-xu%E1%BB%91ng.png?resize=365%2C138&ssl=1" alt="" height={100} width={265} />
            </div>
          </div>
          <div className="about-us-footer">
            <h3>Về chúng tôi</h3>
            <ul className="footer-list">
              <li>
                Hệ thống XTP
              </li>
              <li>
                Đội ngũ bác sĩ
              </li>
              <li>
                Tin tức
              </li>
              <li>
                tuyển dụng
              </li>
              <li>
                Sitemap
              </li>
            </ul>
          </div>
          <div className="service-footer">
            <h3>Dịch vụ XTP</h3>
            <ul className="footer-list">
              <li>
                Giới thiệu
              </li>
              <li>
                Đăng ký khám và tư vấn
              </li>
              <li>
                Gói dịch vụ
              </li>
              <li>
                Hướng dẫn khách hàng
              </li>
              <li>
                Viện nghiên cứ tế bào góc và công nghệ
              </li>
            </ul>
          </div>
          
        </div>
        </div>
        <hr className="m-size m-auto mt-15" />
        <p className="text-center" style={{padding:5}}>Copyright © 2021 XTPPharmacy. All rights reserved </p>
        <hr className="footer-bar" />
        <div className="bottom-footer d-flex m-size m-auto">
          <div className="bottom-footer-content mt-15">
            <h4 >Công ty công nghệ Xuân Thành Phát</h4>
          </div>
          <div className="bottom-footer-content">
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
            </ul>
          </div>
          <div className="bottom-footer-content mt-15 d-flex">
            <i className="fa fa-phone mr-5" /> <p>Địa chỉ công ty: Tầng 22, Tòa nhà N09B2, Khu đô thị mới Dịch Vọng, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội</p> 
          </div>
        </div>
      </footer>
    );
  }
}

export default AppFooter2;
