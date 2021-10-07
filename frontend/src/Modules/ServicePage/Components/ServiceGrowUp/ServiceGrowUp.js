import React, { Component } from 'react';
import './ServiceGrowUp.scss';
import { Link } from 'react-router-dom';
class ServiceGrowUp extends Component {
    render() {
        
      return (
            <div className="service-growUp">
                <div className = "title-growUp">
                  <h1>XTP_PHARMACY TĂNG TRƯỞNG KHÔNG NGỪNG</h1>
                  <div className = "spn">
                      <span>+ 100.000 nhà thuốc tham gia chỉ sau 1 năm!</span>
                  </div>
                </div>
                    <h3 style = {{'margin' : '10px 0px'}}>Con số không nói dối. Cùng xem video này nhé!!</h3>
                    <div className = "grow-up">
                        <div className = "left-video">
                            <iframe width={600} height={315} src="https://www.youtube.com/embed/pSNtnNgTj5M" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        </div>
                        <div className = "right-text">
                            <h1>Cách chúng tôi tăng trưởng là cách bạn nhận giá trị!</h1>
                            <span>- 12/2021: Đạt 10.000 người dùng mỗi ngày
                                <br /> <br />
                                - 09/2021: Đạt  3.000 người dùng mỗi ngày
                                <br /> <br />
                                - 08/2021: Đạt  1.000 người dùng mỗi ngày
                                <br /> <br />
                                - 07/2021: XTP_Pharmacy ra mắt lần đầu tiên
                            </span>
                        </div>
                    </div>
                <button><Link to="/register"><i className="fa fa-check-square-o">&nbsp;</i>Trở thành thành viên và nâng cao hiệu suất ngay nào!!!!</Link></button>
            </div>
        )
    }
}

export default ServiceGrowUp;