import { Component, Fragment } from "react";
import './PharmacyAnnouncementFound.scss';
import {orderBy} from 'lodash';
import { Link } from "react-router-dom";

export default class PharmacyAnnouncementFound extends Component {
    constructor(props){
        super(props)
        this.state = {
            statusSort: false,
            listSorted: []
        }
    }
    sortStatusFind = e => {
        this.setState ({
            statusSort: !this.state.statusSort
        })
    }
    sortByPointAsc = () => {
        this.sortStatusFind();
        let {listSorted} = this.state;
        listSorted = orderBy(this.props.result, ['PointTotal'], ['asc']);
        // console.log(listSorted, 'list Sorted');
        this.setState({
            listSorted
        })
        this.props.sortedListPharmacy(listSorted);
    }
    sortByPointDes = () => {
        this.sortStatusFind();
        let {listSorted} = this.state;
        listSorted = orderBy(this.props.result, ['PointTotal'], ['desc']);
        console.log(listSorted, 'list Sorted Des');
        this.setState({
            listSorted
        })
        this.props.sortedListPharmacy(listSorted);
    }
    

    render(){
        let {statusSort} = this.state;
        return(
            
            <Fragment>
                
                        <div style = {{'margin' : 'auto'}} className = "breadcumbs">
                            <h3>Danh sách các nhà thuốc</h3>
                            <h7>Bạn muốn đưa nhà thuốc lên hệ sinh thái XTP_Pharmacy?<Link to="/register"><a href = "" style = {{'color' : '#1f9651' }}> &nbsp; Đăng ký ngay?</a></Link></h7>
                        </div>
                        <div className = "breadcumbsFound">
                            <div className = "found-announcement">
                                <span><i className= "fa fa-search"></i> Đã tìm thấy {this.props.countResult} hiệu thuốc. 
                                </span>
                            </div>
                            <div className = "sort-found" onClick = {this.sortStatusFind}>
                                <div>
                                    <span >Sắp xếp &nbsp;</span>
                                </div>
                                <div>
                                <i class="fa fa-sort"></i>
                                </div>
                                
                            </div>
                            <div className = {statusSort ? 'blockOptions-sort' : 'noneOptions-sort'}>
                                <option >Đánh giá nhiều nhất</option>
                                <option>Đánh giá ít nhất</option>
                                <option onClick = {this.sortByPointAsc}>Số điểm tăng dần</option>
                                <option onClick = {this.sortByPointDes}>Số điểm giảm dần</option>
                            </div>
                        </div>
                    
            </Fragment>
        )
    }
}