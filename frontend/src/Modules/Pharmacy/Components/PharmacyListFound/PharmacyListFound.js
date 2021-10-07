import { Component, Fragment } from 'react';
import './PharmacyListFound.scss';

import { Link } from "react-router-dom";

export default class PharmacyListFound extends Component {
    constructor(props){
        super(props)
        this.state={
            data: [],
        }
}
    
    
    render(){
        return(
            <Fragment>
                <Link to={`pharmacydetail/${this.props.id}`}>
                        <div className = 'items-pharmacy'>
                        <div className = 'left-items-pharmacy-list'>
                                <span className = 'badges'>
                                    <span className = "flex-center-badges" title = "Thành viên XTP_Pharmacy.">
                                        <i className="fa fa-shield"></i>
                                    </span>
                                    <span className = "flex-center-badges" title = "Đã được xác minh.">
                                        <i className ="fa fa-check-circle"></i>
                                    </span>
                                </span>
                                <div className = 'img-contain'>
                                    <div className = "img-wrap">
                                        <img width = '640' height = "400" src='images/imgTest.jpg' alt ="Nhà thuốc test" />
                                    </div>
                                </div>
                                <div className = "img-contain">
                                    <div className ="img-wrap">
                                        <img width = '640' height = "400" src = "images/imgTest.jpg" alt ="Nhà thuốc test" />
                                    </div>
                                    <a href = "" className="cover"> 9 + </a>
                                </div>
                            </div>
                            <div className = 'center-items-pharmacy-list'>
                                <div style = {{'height' : '50%'}}>
                                        <h2>
                                            <span className = "pharmacy-type-tag">Chuỗi nhà thuốc</span>
                                                &nbsp; {this.props.pharname}
                                        </h2>
                                    
                                    <div className = 'form-address'>
                                        <span className = "address-block">&nbsp; {this.props.address}</span>
                                    </div>
                                    <div className = 'pharmacy-advantages'>
                                        <i className="mark-icon fa fa-bookmark"></i>
                                        <main className = 'text-overflow'>
                                            <p>
                                            <strong> {this.props.pharname} </strong>
                                                    {this.props.describe}
                                            </p>
                                        </main>
                                            <div className = 'vertical-center'>
                                                <a className = 'text-red ml-auto vertical-center' href=''> Xem chi tiết &nbsp; <i className="fa fa-long-arrow-right"></i></a>
                                            </div>
                                    </div>
                                </div>
                                <div className = 'review'>
                                    <div className ='typical-review'>
                                                {/* <img src ='' alt = "Review nhà thuốc" /> */}
                                        <i className="image-user fa fa-user-circle-o"></i>
                                        <div className ='quote'>
                                            <i className = 'text-overflow'>
                                                <i className="text-grey fa fa-quote-left"></i>
                                                    &nbsp;Nhà thuốc bán thuốc trị bệnh rất chuẩn, thái độ của dược sĩ hài hoà.&nbsp; 
                                                    <i className="text-grey fa fa-quote-right"></i>
                                            </i>    
                                        </div> 
                                    </div>
                                    <div className ='typical-review'>
                                                {/* <img src ='' alt = "Review nhà thuốc" /> */}
                                        <i style = {{'fontSize' : '30px'}} className="image-user fa fa-user-circle-o"></i>
                                        <div className ='quote'>
                                            <i className = 'text-overflow'>
                                                <i className="text-grey fa fa-quote-left"></i>
                                                    &nbsp;Nhà thuốc bán thuốc trị bệnh rất chuẩn, thái độ của dược sĩ hài hoà.&nbsp; 
                                                    <i className="text-grey fa fa-quote-right"></i>
                                            </i>    
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            <div className = 'right-items-pharmacy-list'>
                                <div className = 'up-rate'>
                                    <section className = 'point-rate'> {this.props.point} / 5 </section>
                                    <section>
                                        <i className="fa fa-star"></i>
                                        <a href = '' className = 'text-color-theme'>
                                            <span className = "text-bold"> 163 </span>
                                                Đánh giá
                                        </a>
                                    </section>
                                    <section>
                                        <i className="fa fa-thumbs-up"></i>
                                        <a href = '' className = 'text-color-theme'>
                                            Thái độ phục vụ
                                        </a>
                                    </section>
                                    <section>
                                        <i className="fa fa-users"></i>
                                        <a href = '' className = 'text-color-theme'>
                                            <span className = "text-bold"> 5 </span>
                                                Dược sĩ
                                        </a>
                                    </section>
                                </div>
                                <div className = 'down-rate'>
                                    <button className = 'btn service-btn'>Tư vấn tôi</button>
                                    <a href = '' className = " text-color-theme">Xem chi tiết</a>
                                </div> 
                            </div>
                        </div>
                </Link>
            </Fragment>
        )
    }
}




