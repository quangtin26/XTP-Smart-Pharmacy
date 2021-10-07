import React, { Component } from 'react';

class AppInfor extends Component {

  render() {
      
    return (
        <div className="pharmacy-intro">
            <h1 className="pharmacy-title mt-40">
            Smart Pharmacy XTP HỆ SINH THÁI NHÀ THUỐC THÔNG MINH
            </h1>
            <h1 className="pharmacy-title mb-40">
            GIẢI PHÁP TOÀN DIỆN CHO QUẢN LÝ VẬN HÀNH NHÀ THUỐC, CHUỖI NHÀ THUỐC
            </h1>
            <div className="home-background">
            <div className="pharmacy-intro-content m-size m-auto">
            <div className="intro-text">
                <div className="intro-text-wrap">
                <p>
                    Công ty XuanThanhPhat phát triển giải pháp hệ sinh thái nhà thuốc nhà thông minh, bao gồm các ứng dụng cho nhà thuốc và khách hàng, phần mềm quản lý thuốc và trang thương mại điện tử dành cho các cơ sở kinh doanh với mục tiêu phát triển chuỗi cung ứng và quản lý dược phẩm
                    là công ty chuyên cung câp , tư vấn các giải pháp phần mềm His Hospital XTP cho các bệnh viện lớn trong và ngoài nước  , liên kết y bác sĩ đem lại giải pháp tổng thể cho nhà thuốc  
                </p>
                </div>
                <div className="button-intro-group">
                <div className="button-intro">
                    <a href>Đăng ký</a>
                </div>
                <div className="button-intro">
                    <a href>Tư vấn</a>
                </div>
                </div>
            </div>
            <div className="intro-video">
                <div className="intro-video-wrap">
                {/* <iframe width="600" height="315"
                                src="https://youtu.be/pSNtnNgTj5M">
                            </iframe> */}
                <iframe width={600} height={315} src="https://www.youtube.com/embed/pSNtnNgTj5M" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </div>
            </div>
            </div>
        </div>
    );
  }
}

export default AppInfor;
