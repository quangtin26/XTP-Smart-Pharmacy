import React, { Component } from 'react';

class ServiceSolution extends Component {

  render() {
      
    return (
        <div className="pharmacy-solutions m-size">
            <h1 className="pharmacy-title" style = {{'color': 'rgb(5, 104, 185)'}}>XTP_Pharmacy sẽ đồng hành cùng bạn!
            </h1>
            <div style = {{'textAlign' : 'center', 'fontStyle' : 'italic', 'fontWeight' : '600'}}>
                <span>
                6 lợi ích mà XTP_Pharmacy sẽ mang lại cho bạn!
                </span>
            </div>
            
            <div className="d-flex flex-wrap">
            <div className="solutions-item">
                <div className="solutions-wrap">
                <img src="images/s_logo1.png" alt="" />
                <h3>CÔNG NGHỆ VƯỢT TRỘI</h3>
                <p>
                    XTP Smart Pharmacy được xây dựng trên nền tảng công nghệ hiện đại, giúp quầy thuốc có thể sử dụng dễ dàng, tốc đọ truy cập nhanh, bảo mật dữ liệu nhiều lớp.
                </p>
                </div>
            </div>
            <div className="solutions-item">
                <div className="solutions-wrap">
                <img src="images/s_logo2.png" alt="" />
                <h3>KẾT NỐI BÁC SĨ</h3>
                <p>
                    Phần mềm được liên kết với các giáo sư, bác sĩ của các bệnh viện vệ tinh lớn trong và ngoài nước.
                </p>
                </div>
            </div>
            <div className="solutions-item">
                <div className="solutions-wrap">
                <img src="images/s_logo3.png" alt="" />
                <h3>TÍNH NĂNG ĐA DẠNG</h3>
                <p>
                    Phần mềm quản lý nhà thuốc hỗ trợ chủ hiệu thuốc quản lý bán hàng trực tiếp, quản lý theo dỗi thông tin tồn kho xuất nhập kho, kiểm kê, quản lý thông tin khách hàng, nhà cung cấp, nhà phân phối, cảnh báo thuốc cạn hạn sử dụng...
                    
                </p>
                </div>
            </div>
            <div className="solutions-item">
                <div className="solutions-wrap">
                <img src="images/s_logo4.png" alt="" />
                <h3>hỗ trợ kê đơn </h3>
                <p>
                    kê đơn thuốc - lưu trữ đơn thuốc.
                    được hỗ trợ cách kê đơn thuốc bởi các bác sĩ đầu ngành 
                    đơn thuốc được cập nhật liên tục 
                    Hưowsng dẫn và luu trữ các đơn thuôc 
                </p>
                </div>
            </div>
            <div className="solutions-item">
                <div className="solutions-wrap">
                <img src="images/s_logo5.png" alt="" />
                <h3>CHIA SẺ KHÁCH HÀNG TIỀM NĂNG</h3>
                <p>
                    Bạn không phải lo lắng, XTP Smart Pharmacy sẽ đồng hành cùng bạn trong xuất quá trình sử dụng phần mềm. Gọi ngay 0969123456 để được hỗ trợ
                </p>
                </div>
            </div>
            <div className="solutions-item">
                <div className="solutions-wrap">
                <img src="images/s_logo6.png" alt="" />
                <h3>HỖ TRỢ TRỌN ĐỜI</h3>
                <p>
                    Bạn không phải lo lắng, XTP Smart Pharmacy sẽ đồng hành cùng bạn trong xuất quá trình sử dụng phần mềm. Gọi ngay 0969123456 để được hỗ trợ
                </p>
                </div>
            </div>
            </div>
        </div>
    );
  }
}

export default ServiceSolution;
