import { Component, Fragment } from "react";
import './PharmacySearchNav.scss'

export default class PharmacySearchNav extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          cityText: '',
          provinceText: '',
        }
      }

      provinceIsChange = (event) => {
        
        this.setState({
            provinceText: event.target.value,
        })
      }
      cityIsChange = (event) => {
        console.log(event.target.value);
        this.setState({
            cityText: event.target.value,
        })
      }
    
      searchingClick = (city,province) => {
        localStorage.setItem("province",province);
        console.log(this.state.provinceText);
        window.location.reload();
      }

    render(){
        return(
            <Fragment>
                <div className = "general-search">
                    <div className = "main">
                        <div className = "container-search">
                            <div className = "search-nav">
                                <div className = " search-city">
                                    <select id = "select-format">
                                        <option selected disabled>Tỉnh, thành</option>
                                        <option>Hà Nội</option>
                                    </select>
                                </div>
                                <div className = " search-district">
                                    <select id = "select-format" onChange={(event)=> this.provinceIsChange(event)}>
                                        <option value={null} selected disabled >Quận, huyện</option>
                                        <option value="Cầu Giấy">
                                        Cầu Giấy
                                        </option>
                                        <option value="Đông Anh">
                                        Đông Anh
                                        </option>
                                        <option value="Tây Hồ">
                                        Tây Hồ
                                        </option>
                                        <option value="Từ Liêm">
                                        Từ Liêm
                                        </option>
                                        <option value="Ba Đình">
                                        Ba Đình
                                        </option>
                                        <option value="Hà Đông">
                                        Hà Đông
                                        </option>
                                        <option value="Hai Bà Trưng">
                                        Hai Bà Trưng
                                        </option>
                                        <option value="Thanh Xuân">
                                        Thanh Xuân
                                        </option>
                                        <option value="Đống Đa">
                                        Đống Đa
                                        </option>
                                        <option value="Hoàng Mai">
                                        Hoàng Mai
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className = "input-search">
                                <input id= "input-format" type = "text" value = "" placeholder = "VD: Phường Dịch Vọng" />
                                <button className = "button-search-inline"><i className="fa fa-search"></i></button>
                            </div>
                            <div className = "div-button-search">
                                <button className = "button-search" onClick={(city,province)=>this.searchingClick(this.state.cityText,this.state.provinceText)}>
                                    <i className="fa fa-map-marker"></i>  Tìm kiếm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}