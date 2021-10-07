import React, { Component } from 'react';
import './PharmacyDetailMain.scss';
import { Link } from "react-router-dom";

class PharmacyDetailMain extends Component {

  render() {
    
    return (
        <div className="pharmacy-frame">
        <section className="left">
          <div className="page-section ra-contain">
            <h2> Chi tiết </h2>
            <div className="content">
              <div className="form-row d-flex">
                <label className="text-bold">Loại hình nhà thuốc:</label>
                <span className="ml-auto">Chuỗi</span>
              </div>
            </div>
            <div className="content">
              <div className="form-row d-flex">
                <label className="text-bold">Liên hệ:</label>
                <span className="ml-auto">0123456789</span>
              </div>
            </div>
            <div className="content">
              <div className="form-row d-flex">
                <label className="text-bold">Fanpage:</label>
                <span className="ml-auto">
                  <a href="https://www.facebook.com/Vinmec">
                    fb.com/lee.hunggg
                  </a>
                </span>
              </div>
            </div>
            <div className="content">
              <div className="form-row d-flex">
                <label className="text-bold">Website:</label>
                <span className="ml-auto">
                  <a href="www.facebook.com/lee.hunggg">
                    website.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="center">
          <div className="page-section">
            <div className="d-flex">
              <div className="chart">
                <label htmlFor>
                  Cơ sở vật chất: <b />
                </label>
                <div className="contain">
                  <div className="fill" title="Cơ sở vật chất" style={{width: '70%'}}>
                  </div>
                </div>
                <label htmlFor>
                  Cơ sở vật chất: <b />
                </label>
                <div className="contain">
                  <div className="fill" title="Cơ sở vật chất" style={{width: '70%'}}>
                  </div>
                </div>
                <label htmlFor>
                  Cơ sở vật chất: <b />
                </label>
                <div className="contain">
                  <div className="fill" title="Cơ sở vật chất" style={{width: '70%'}}>
                  </div>
                </div>
                <label htmlFor>
                  Cơ sở vật chất: <b />
                </label>
                <div className="contain">
                  <div className="fill" title="Cơ sở vật chất" style={{width: '70%'}}>
                  </div>
                </div>
                <label htmlFor>
                  Cơ sở vật chất: <b />
                </label>
                <div className="contain">
                  <div className="fill" title="Cơ sở vật chất" style={{width: '70%'}}>
                  </div>
                </div>
              </div>
              <div className="pharmacy-statistic flex-center">
                <div className="text-center m-auto">
                  <div className="rate text-color-theme">4.96</div>
                  <div className="text-bold">55 đánh giá</div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-section">
            <div className="rate-header d-flex w-100">
              <div className="mr-auto">
                  Đánh giá
              </div>
              <div className="ml-auto">
                  <i className="fa fa-edit mr-5"></i>Đánh giá
              </div>
            </div>
            <div className="rate-content mt-15 mb-15">
              
              <div className="rate-avatar m-auto">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIry15Q-LClwhyHTxUVLtHxkM3TFHCTAl6IURerTDIeY6zHQHWhPTwV9rny-uv2OUs7I&usqp=CAU"/>
              </div>
              <p className="m-auto mb-15 mt-15">Tác phong của anh bán thuốc rất là xịn, em rất là ưng</p>
              <div className="rate-btn m-auto" >Xem thêm</div>
            </div>
          </div>
          <div className="page-section">
            <div className="overview-title d-flex mb-15">
              <i className="fa fa-phone mr-5" style={{marginTop: 6}}></i>
                <h3>Cơ sở vật chất</h3>
            </div>
            <div className="overview-content">
              <p>
                Mặc dù cụm từ vô nghĩa, có một lịch sử lâu dài. Cụm từ được sử dụng cho một số kỷ typographers để hiển thị các tính năng đặc biệt nhất của phông chữ. Nó được sử dụng bởi vì các ký tự liên quan đến và hiển thị khoảng cách thư trong các kết hợp, tốt nhất, trọng lượng, thiết kế và các tính năng quan trọng của chữ.
              </p>
              <div className="overview-img">
              <img class="pharmacy-d-image" src="https://vcdn-kinhdoanh.vnecdn.net/2020/05/21/LongChau-1996-1590015333.jpg"/>
              </div>
            </div>
          </div>
          <div className="page-section">
            <div className="overview-title d-flex mb-15">
              <i className="fa fa-phone mr-5" style={{marginTop: 6}}></i>
                <h3>Cơ sở vật chất</h3>
            </div>
            <div className="overview-content">
              <p>
                Mặc dù cụm từ vô nghĩa, có một lịch sử lâu dài. Cụm từ được sử dụng cho một số kỷ typographers để hiển thị các tính năng đặc biệt nhất của phông chữ. Nó được sử dụng bởi vì các ký tự liên quan đến và hiển thị khoảng cách thư trong các kết hợp, tốt nhất, trọng lượng, thiết kế và các tính năng quan trọng của chữ.
              </p>
              <div className="overview-img">
              <img class="pharmacy-d-image" src="https://vcdn-kinhdoanh.vnecdn.net/2020/05/21/LongChau-1996-1590015333.jpg"/>
              </div>
            </div>
          </div>
          <div className="page-section">
            <div className="overview-title d-flex mb-15">
              <i className="fa fa-phone mr-5" style={{marginTop: 6}}></i>
                <h3>Cơ sở vật chất</h3>
            </div>
            <div className="overview-content">
              <p>
                Mặc dù cụm từ vô nghĩa, có một lịch sử lâu dài. Cụm từ được sử dụng cho một số kỷ typographers để hiển thị các tính năng đặc biệt nhất của phông chữ. Nó được sử dụng bởi vì các ký tự liên quan đến và hiển thị khoảng cách thư trong các kết hợp, tốt nhất, trọng lượng, thiết kế và các tính năng quan trọng của chữ.
              </p>
              <div className="overview-img">
              <img class="pharmacy-d-image" src="https://vcdn-kinhdoanh.vnecdn.net/2020/05/21/LongChau-1996-1590015333.jpg"/>
              </div>
            </div>
          </div>
          
        </section>
        <section className="right">
          <div className="page-section ra-contain">
            <h3 className="text-center">Đăng ký nhận tư vấn </h3>
            <div className="form-row">
              <input type="text" name="name" className="w-100"  placeholder="Họ và tên *" data-required />
            </div>
            <div className="form-row">
              <input type="text" name="phone" className="w-100" placeholder="Số điện thoại *" data-validate="phone" data-required />
            </div>
            <div className="text-center">
              <button className="btn submit">Tư vấn cho tôi ngay</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PharmacyDetailMain;
