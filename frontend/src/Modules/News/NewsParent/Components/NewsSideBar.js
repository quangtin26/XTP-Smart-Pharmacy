import React, {Component} from 'react'
import { Link } from "react-router-dom";

class NewsSideBar extends Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    goTo = (url = "") => {
        url = window.location.origin + "/" + url;
        window.location.replace(url);
      };
    render(){
        return(
            <div className='leftContent'>
          <div className='search'>
               <div>
                   <span>Tìm bài viết:</span>
               </div>
               <div className='inputBox'>
                       <input type='text' placeholder='input your search' onChange={this.props.getValueSearch}></input>
                       <button onClick={
                           this.props.onSearch
                           }><i className="fa fa-search"></i></button>
               </div>
          </div>
            <div className='category'>
                <ul>
                <Link to='/news'><li onClick={()=>this.props.getCategory("all")}>Tất cả hiệu thuốc</li></Link>
                <li onClick={()=>this.props.getCategory("Bệnh Lý")}>Bệnh Lý</li>
                <li onClick={()=>this.props.getCategory("Các loại thuốc")}>Các loại thuốc</li>
                <li onClick={()=>this.props.getCategory("Content Marketing")}>Content Marketing</li>
                    <li>item1</li>
                    <li>item3</li>
                    <li>item1</li>
                    <li>item2</li>
                    <li>item3</li>
                </ul>
            </div>
            </div>
        )
    }
}

export default NewsSideBar;