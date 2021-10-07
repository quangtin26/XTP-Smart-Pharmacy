import React, { Component } from 'react';

class ServiceBenifitForOwner extends Component {

  render() {
      
    return (
        <div className="pharmacy-solutions m-size">
            <h1 className="pharmacy-title " style = {{'color': 'rgb(5, 104, 185)'}}>Quà tặng giá trị cho chủ hiệu thuốc. 
            Hãy lấy thứ bạn cần:
            </h1>
            <div className="d-flex flex-wrap">
            <div className="solutions-item">
                <div className="solutions-wrap">
                <img src="images/b-logo1.png" alt="" />
                <h3>Được tìm kiếm dễ dàng</h3>
                <p>
                ✔ Được tiếp cận nhiều khach hàng gần phạm vi bạn nhất
Được tiếp cận và chăm sóc tốt cho nhiều bệnh nhân hơn, từ đó gây dựng niềm tin từ cộng đồng
                </p>
                </div>
            </div>
            <div className="solutions-item">
                <div className="solutions-wrap">
                <img src="images/b-logo2.png" alt="" />
                <h3>Được sử dụng phần mềm thông minh</h3>
                <p>
                ✔ Được sử dụng phần mềm hiệu thuốc thông minh ( điểm nổi bật )
khâu quản lý, báo cáo , cập nhật 
                </p>
                </div>
            </div>
            <div className="solutions-item">
                <div className="solutions-wrap">
                <img src="images/b-logo3.png" alt="" />
                <h3>Được kết nối các bác sĩ vệ tinh</h3>
                <p>
                ✔ Được kết nối với các giáo sư, bác sĩ,  thuộc các  bệnh viện vệ tinh lớn trong và ngoài nước.
                </p>
                </div>
            </div>
            <div className="solutions-item">
                <div className="solutions-wrap">
                <img src="images/b-logo4.png" alt="" />
                <h3>Được cập  nhật kê đơn thuốc </h3>
                <p>
                ✔ Được cập nhật, tư vấn các đơn thuốc thường xuyên trong hệ thống phần mềm.
Được sắp xếp, lưu trữ toàn bộ đơn thuốc đã kê.
                </p>
                </div>
            </div>
            <div className="solutions-item">
                <div className="solutions-wrap">
                <img src="images/b-logo5.png" alt="" />
                <h3>Được chia sẻ khách hàng tiềm năng</h3>
                <p>
                ✔ Đem đến nguồn khách hàng tiềm năng cho hiệu thuốc của bạn

                </p>
                </div>
            </div>
            <div className="solutions-item">
                <div className="solutions-wrap">
                <img src="images/b-logo6.png" alt="" />
                <h3>Được quảng cáo, mảrketing miễn phí</h3>
                <p>
                ✔ Hỗ trợ Marketing Online nhằm đưa ra những phương án tiếp thị phù hợp nhất để giúp hiệu thuốc tăng hiệu quả và giảm chi phí.
                </p>
                </div>
            </div>
            </div>
        </div>
    );
  }
}

export default ServiceBenifitForOwner;
