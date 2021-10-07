import { React, Component, Fragment } from 'react';
import './AddMembers.scss';

export default class AddMembers extends Component {
    constructor(props){
        super(props);
        this.state = { 

        }
    }

    render(){
        return(
            <Fragment>
                <div className = "add-user">
                    <div className = "infor-owner">
                        <div className = "form-input">
                            <div className = "label-infor">
                                <label>Tên hiệu thuốc: </label>
                            </div>
                            <div className = "input-infor">
                                <input type = "text" name = "name-pharmacy"  placeholder = "Nhập tên hiệu thuốc.............." />
                            </div>
                        </div>
                        <div className = "form-input">
                            <div className = "label-infor">
                                <label>Tên chủ hiệu thuốc: </label>
                            </div>
                            <div className = "input-infor">
                                <input type = "text" name = "owner-pharmacy"  placeholder = "Nhập tên chủ hiệu thuốc.............." />
                            </div>
                        </div>
                        <div className = "form-input">
                            <div className = "label-infor">
                                <label>Số điện thoại: </label>
                            </div>
                            <div className = "input-infor">
                                <input type = "text" name = "mobilephone-number"  placeholder = "Nhập số điện thoại.............." />
                            </div>
                        </div>
                        <div className = "form-input">
                            <div className = "label-infor">
                                <label>Địa chỉ: </label>
                            </div>
                            <div className = "input-infor">
                                <input type = "text" name = "address-pharmacy"  placeholder = "Nhập địa chỉ hiệu thuốc.............." />
                            </div>
                        </div>
                        <div className = "form-input">
                            <div className = "label-infor">
                                <label>Email: </label>
                            </div>
                            <div className = "input-infor">
                                <input type = "text" name = "email-pharmacy"  placeholder = "Nhập email.............." />
                            </div>
                        </div>
                        <div className = "accept-refuse">
                            <button title = "Accept" >
                                <i className="icon accept fa fa-check-square"></i>
                            </button>
                            <button title = "Refuse">
                                <i className="icon refuse fa fa-minus-circle"></i>
                            </button>
                        </div>
                    </div>
                    <div className = "account-owner">
                        <div className = "form-input">
                            <div className = "label-infor">
                                <label>Tên người dùng ( Username ): </label>
                            </div>
                            <div className = "input-infor">
                                <input type = "text" name = "username-account"  placeholder = "Nhập username.............." />
                            </div>
                        </div>
                        <div className = "form-input">
                            <div className = "label-infor">
                                <label>Link Fanpage: </label>
                            </div>
                            <div className = "input-infor">
                                <input type = "text" name = "link-fanpage"  placeholder = "Link Fanpage.............." />
                            </div>
                        </div>
                        <div className = "form-input">
                            <div className = "label-infor">
                                <label>Link trang web: </label>
                            </div>
                            <div className = "input-infor">
                                <input type = "text" name = "link-website"  placeholder = "Link Website.............." />
                            </div>
                        </div>
                        <div className = "form-input">
                            <div className = "label-infor">
                                <label>Mật khẩu ( Password ): </label>
                            </div>
                            <div className = "input-infor">
                                <input type = "password" name = "password-account"  placeholder = "Nhập password.............." />
                            </div>
                        </div>
                        <div className = "form-input">
                            <div className = "label-infor">
                                <label for = 'send-mail'>Gửi mail: </label>
                            </div>
                            <div className = "label-infor">
                                <label for = "yes">Gửi? </label>
                                <input checked type="radio" id="yes" name="send-mail" value="yes" required />
                                <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                <label for = "no">Không? </label>
                                <input type="radio" id="no" name="send-mail" value="no" required />
                            </div>
                        </div>
                        <div className = "form-input">
                            <div className = "label-infor">
                                <label>Vai trò: </label>
                            </div>
                            <div className = "input-infor">
                                <select>
                                    <option>Admin</option>
                                    <option>Biên tập viên</option>
                                    <option>Chủ hiệu thuốc</option>
                                </select>
                            </div>
                        </div>
                        <div className = "add-user-account">
                            <button className = "btn-add-user"><i style = {{'fontSize' : '20px' }} className="fa fa-plus-circle">&nbsp; Thêm người dùng mới</i></button>
                        </div>
                    </div>

                </div>
            </Fragment>
        )
    }





}