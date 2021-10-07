import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NewsSideBarRight extends Component {
    constructor(props){
        super(props)
        this.state={}
    }

  render() {
    let newsPost = this.props.newsPost;
    
    return (
        <div className='rightContent'>
                    <div className='newBlogs'>
                        <ul>
                            {
                                newsPost.map((item,index)=>(
                                    <Link to={`/news/${item.id}`}>
                                    <li key={index}>
                                        <img src={item.img} style={{width:'100%', height:"auto"}}></img>
                                        <p>{item.title[1]}</p>
                                    </li>
                                    </Link> 
                                ))
                            }
                            
                        </ul>
                    </div>
                    <div className='imgAds'>
                        <a href='#'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyJu1kL9kAF6IG0O_ISSVcGhFiLZWNLAhNzw&usqp=CAU'></img>
                        </a>
                    </div>
                   
               </div>
    );
  }
}

export default NewsSideBarRight;