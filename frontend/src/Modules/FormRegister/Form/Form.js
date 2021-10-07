import React, { Component } from 'react';
import './Form.scss'
class Form extends Component {

  render() {

    return (
        <div>
                <form className='form'>
                    <div className='intro input'>
                        <h1>ĐƯA HIỆU THUỐC LÊN XTPPHARMACY</h1>
                        <p>Công ty cổ phần và phát triển Xuân Thành Phát. Kính chào các chủ hiệu thuốc. Chúng tôi rất hân hạnh được làm cầu nối giữa các quý hiệu thuốc và khách hàng.
                            Đồng thời cung cấp phần mềm quản lí nhà thuốc với mục tiêu phát triển chuỗi
                            cung ứng và quản lí dược phẩm.<br></br><br></br> 
                            Hãy nắm bắt cơ hội để mang lại nhiều giá trị
                            hơn cho cộng đồng.
                        </p>
                    </div>
                    <div className="pharmacyYourname input">
                        <div><label for='yourname'>Tên chủ hiệu thuốc:</label></div>
                        <input id='yourname' placeholder='câu trả lời của bạn' required></input>
                    </div>
                    <div className="pharmacyName input">
                        <div><label for='name'>Tên hiệu thuốc:</label></div>
                        <input id='name' placeholder='câu trả lời của bạn' required></input>
                    </div>
                    <div className="pharmacyPhone input">
                        <div><label for='phone'>Số điện thoại:</label></div>
                        <input id='phone' placeholder='câu trả lời của bạn' required></input>
                    </div>
                    <div className="pharmacyAddress input">
                        <div><label for='address'>Địa chỉ:</label></div>
                        <input id='address' placeholder='câu trả lời của bạn' required></input>
                    </div>
                    <div className='btn_submit'>
                        <button>Gửi</button>
                    </div>
                </form>
            </div>
    );
  }
}

export default Form;