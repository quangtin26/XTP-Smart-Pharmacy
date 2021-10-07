import React, { Component } from 'react';
import './ServiceListPharDemo.scss';

class ServiceListPharDemo extends Component {

  render() {
      
    return (
        <div className="service-intro">
            <div className = "banner">
                <h1>TIỀM NĂNG CỦA XTP_PHARMACY</h1>
                <div className = "span-spn">
                    <span>Hãy xem này!! Danh sách các khách hàng tiềm năng của XTP_Pharmacy!</span>
                </div>
                <div className = "intro">
                    <div className = "left-intro">
                        <iframe width={600} height={315} src="https://www.youtube.com/embed/pSNtnNgTj5M" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                    <div className = "right-intro">
                        <h1>Hàng chục nghìn hiệu thuốc đã đăng ký tham gia vào hệ sinh thái nhà thuốc thông minh XTP_Pharmacy!</h1>
                        <span>XTP_Pharmacy đã kết nối thành công hàng chục nghìn bệnh nhân đến những hiệu thuốc phù hợp

                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default ServiceListPharDemo;
