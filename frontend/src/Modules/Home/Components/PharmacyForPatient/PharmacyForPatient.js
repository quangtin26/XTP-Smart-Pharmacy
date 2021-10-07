import React, { Component } from 'react';
import "./PharmacyForPatient.scss";

class PharmacyForPatient extends Component {

  render() {
      
    return (
        <div className="for-patient ">
            <h1 className="pharmacy-title mt-40 mb-40">
            thấu hiểu BỆNH NHÂN
            </h1>
            <div className="home-background">
            <div className="d-flex flex-wrap  m-size m-auto">
            <div className="for-patient-left">
                <div className="for-patient-wrap">
                <div className="for-patient-box">
                    <div className="for-patient-frame">
                    <div className="for-patient-item">
                        <p>
                        <i className="fa fa-phone m-r5" />
                        Nhanh chóng tìm thấy nhà thuốc gần mình để nhận sự hỗ trợ từ hiệu thuốc sớm nhất.
                        </p> 
                        <p>
                        <i className="fa fa-phone m-r5" />
                        Hỗ trợ mua thuốc thuận tiện nhất và tra cứu lại đơn thuốc đã mua
                        </p> 
                    </div>
                    </div>
                </div>
                <div className="for-patient-box">
                    <div className="for-patient-frame">
                    <div className="for-patient-item">
                        <p>
                        <i className="fa fa-phone m-r5" />
                        Chuyên mục chăm sóc sức khỏe giúp có thêm kiến thức trong việc tự chăm sóc sức khỏe bản thân và những người thân yêu trong gia đình, xung quanh mình.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="for-patient-right">
                <div className="for-patient-wrap">
                <div className="size-100">
                    <div className="pd-15">
                    <div className="patient-img" style={{backgroundImage: 'url("images/for-patient-1.jpg")'}}>
                    </div>
                    </div>
                </div>
                {/* <img src="images/for-patient-3.jpg" alt=""> */}
                </div>
            </div>
            </div>
            </div>
        </div>
    );
  }
}

export default PharmacyForPatient;
