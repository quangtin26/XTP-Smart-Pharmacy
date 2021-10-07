import { React, Component, Fragment } from 'react';
import './AllMembers.scss';

import dataTestUser from "../../ApiTest/dataTestUser.json";
export default class AllMembers extends Component {
    constructor(props){
        super(props);
        this.state = { 
            data : [],
        }
    }
    componentDidMount() {
        this.setState({
            data : dataTestUser
        })
    }

    render(){
        // console.log(this.state.data, 'asd');
        let { data } = this.state;

        let arrData = data ? data : [];

        let arrUser = arrData.map((user, index) => {
            return(
                        <tr>
                            <td><input type = "checkbox"/></td>
                            <td>
                                <p>{user.username}</p>
                                <div>
                                    <a href="#">Xem trước</a> | <a href="#">Chỉnh sửa</a> | <a href="#">Gỡ bỏ</a>
                                </div>
                            </td>
                            <td>{ user.name }</td>
                            <td>{ user.mail }</td>
                            <td> { user.role } </td>
                            <td>
                                <select className = "full-width padding">
                                    <option>Active</option>
                                    <option> Non-Active </option>
                                </select>
                            </td>
                        </tr>
            )
                        
        })
        return(
            <Fragment>
                <div className = "all-user">
                    <div className = "banner-user">
                        <h1>DANH SÁCH NGƯỜI DÙNG</h1>
                    </div>
                    <div className = "nav-filter-user">
                        <div className = "count-user">
                            <h5>Tất cả &#40; 10 &#41;</h5>
                            <span>Người quản lý &#40; 1 &#41;</span>
                            <span>Thành viên đăng ký &#40; 9 &#41;</span>
                        </div>
                        <div className = "find-user">
                            <input type = "text" placeholder = "Nhập tên người dùng / username cần tìm......." />
                            <button className = "btn btn-hover btn-props padding" title = "Tìm Kiếm">Tìm Kiếm </button>
                        </div>
                    </div>
                    <div className = "action-user">
                        <div className = "action">
                            <select className = "full-width margin padding">
                                <option disabled>Bulk Action</option>
                                <option>Xoá</option>
                            </select>
                        </div>
                        <div className = "action">
                            <button className = "btn-hover btn-props btn-width padding">Áp dụng</button>
                        </div>
                        <div className = "action">
                            <select className = "full-width margin padding">
                                <option disabled>Đổi thành...</option>
                                <option>Admin</option>
                                <option>Biên tập viên</option>
                                <option>Người dùng</option>
                            </select>
                        </div>
                        <div className = "action">
                            <button className = " btn-width btn-hover btn-props padding">Thay đổi</button>
                        </div>
                        <div className = "action">
                            <input className = "full-width margin padding" type = "date" />
                        </div>
                    </div>
                    <div className='manage-user'>
                    <table class="table-user" cellSpacing="0">
                        <tr>
                            <th><input type = "checkbox" /></th>
                            <th>User Name</th>
                            <th>Tên người dùng</th>
                            <th>Email</th>
                            <th>Vai trò</th>
                            <th>Trạng thái</th>
                        </tr>
                    {arrUser}
                        
                        
                    </table>
                </div>


                </div>
            </Fragment>
        )
    }
}