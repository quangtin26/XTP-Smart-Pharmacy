import React, { Component } from 'react';
import './AppBar.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

class AppBar extends Component {

  goTo = (url = "") => {
    url = window.location.origin + "/" + url;
    window.location.replace(url);
  };

  render() {
    
    return (
        <div className="header-nav">
        <div className="header-nav-wrap d-flex">
          <div className="left">
            <div className="logo" style={{background: 'url("images/logo_xoa_nen.png")'}}>
            </div>
          </div>
          <div className="right-home d-flex">
            <ul className="nav-menu">
            
              <li className="nav-item">
                <NavLink to="/home">Trang chủ</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/introduce">Giới thiệu</NavLink>
              </li>
              <li className="nav-item drop-down" style={{position:'relative'}}>
                
                <NavLink to="/pharmacy" > Chủ hiệu thuốc</NavLink>
                <div className="drop-down-list">
                <ul>
                  <li>
                     Đưa hiệu thuốc lên XTP Pharmacy
                  </li>
                  <li>
                     Ưu đãi cho chủ hiệu thuốc
                  </li>
                  <li>
                     Kiến thức maketing
                  </li>
                  {/* <li>
                    <Link to="/pharmacy"> Chủ hiệu thuốc</Link>
                  </li> */}
                  
                </ul>
                </div>
              </li>
              <li className="nav-item">
                <NavLink to="/news">Tin tức</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/service">Tư vấn dịch vụ</NavLink>
              </li>
              
            </ul>
            <ul className="nav-menu login">
              <li className="nav-item" onClick={()=> this.goTo("register")}>
                Thêm hiệu thuốc
              </li>
              <li className="nav-item" onClick={()=> this.goTo("login")}>
                Đăng nhập
              </li>
            </ul>
          </div>  
        </div>
      </div>
    );
  }
}

export default AppBar;
