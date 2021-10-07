import React, { Component } from 'react';
import './ServiceFact.scss';

class ServiceFact extends Component {

  render() {
      
    return (
        <div className="service-fact">
            <div className = "fact-up">
                <h1>XTP_PHARMACY CÓ GÌ?</h1>
                <div className = "span-spn">
                    <span>10.000 bệnh nhân tìm hiệu thuốc mỗi ngày!</span>
                </div>
                
            </div>
            <div className = "fact-down">
                <div className = "fact-item">
                        <div className = 'd-fDirectionRow'>
                            <i style={{'fontSize' : '40px'}} className="fa fa-gg-circle"></i>
                            <h2>&nbsp; + 2.000.000 bệnh nhân mỗi năm</h2>
                        </div>
                        <h4>- Mỗi ngày, XTP_Pharmacy có gần 10.000 lượt tìm kiếm hiệu thuốc trên khắp cả nước.<br /> <br />
                            - Từ thời điểm ra mắt. XTP_Pharmacy đã phục gần 1.000.000 bệnh nhân trên khắp Việt Nam </h4>
                   
                </div>
                <div className = "fact-item">
                        <div className = 'd-fDirectionRow'>
                            <i style={{'fontSize' : '40px'}} className="fa fa-gg-circle"></i>
                            <h2>&nbsp; + 200.000 lượt đăng ký đưa hiệu thuốc lên hệ sinh thái XTP_Pharmacy  mỗi năm</h2>
                        </div>
                        <h4 style = {{'paddingTop' : '30px'}}>- XTP_Pharmacy  đã kết nối gần 1.000 bệnh nhân đến các hiệu thuốc mỗi ngày</h4>
                    
                </div>
                <div className = "fact-item">
                        <div className = 'd-fDirectionRow'>
                            <i style={{'fontSize' : '40px'}} className="fa fa-gg-circle"></i>
                            <h2>&nbsp; Hướng dẫn marketing hiệu quả</h2>
                        </div>
                        <h4>- XTP_Pharmacy đã hướng dẫn công tác marketing cho các chủ hiệu thuốc, nâng cao hiệu suất bán hàng của các hiệu thuốc lên gấp nhiều lần.</h4>
                    
                </div>
                <div className = "fact-item">
                        <div className = 'd-fDirectionRow'>
                            <i style={{'fontSize' : '40px'}} className="fa fa-gg-circle"></i>
                            <h2>&nbsp; + 8.000.000 hiệu thuốc đã tham gia XTP_Pharmacy</h2>
                        </div>
                        <h4>- 8.000.000 hiệu thuốc đã được đưa lên hệ sinh thái nhà thuốc thông minh XTP_Pharmacy</h4>
                    </div>
                
            
            </div>
        </div>
    );
  }
}

export default ServiceFact;
