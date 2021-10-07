import React, { Component } from 'react';
import './Sidebar.scss';

import { Link } from 'react-router-dom';

class SideBar extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
                <div id="sidebar">
                    <header>
                        <a href="#">Bài viết</a>
                    </header>
                    <ul className="listSideBar">
                        <li>
                            <a href="/admin/managerpost">
                                <i className="" /> Tất cả bài viết
                            </a>
                        </li>
                        <li>
                            <a href="/admin/addpost">
                                <i className="" /> Viết bài mới
                            </a>
                        </li>
                        {/* <li>
                            <a href="#">
                                <i className="" /> Chuyên mục
                            </a>
                        </li> */}
                        
                    </ul>
                    <header>
                        <a href="#">Người dùng</a>
                    </header>
                    <ul className="listSideBar">
                        <li>
                            <a href="/admin">
                                <i className="" /> Tất cả người dùng
                            </a>
                        </li>
                        {/* <Link to="/admin/addmembers"> */}
                          <li>
                              <a href ="/admin/addmembers">
                                  <i className="" /> Thêm mới người dùng
                              </a>
                          </li>
                        {/* </Link> */}
                        {/* <li>
                            <a href="#">
                                <i className="" /> Hồ sơ người dùng
                            </a>
                        </li> */}
                        
                    </ul>
                    <div className = "text-center"><button>Yêu cầu duyệt</button></div>
                </div>
        );
    }
}


export default SideBar;