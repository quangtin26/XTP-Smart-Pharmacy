import React, { Component } from 'react';
import NewsSideBar from '../NewsParent/Components/NewsSideBar';
import NewsMainDetails from './Components/NewsMainDetails';
import NewsSideBarRight from './Components/NewsSideBarRight';
import "./NewsDetails.scss"
import axios from 'axios';
class NewsDetails extends Component {
  constructor(props){
    super(props)
    this.state={
      data: [],
      newsPost:[],
      idNewPost: '',
      onNew:false,
    }
  }
  componentDidMount(){
    axios.get("http://localhost:3000/news")
      .then(res => {
          const data = res.data;
          
            let dataLength = data.length;
            let newsPost = [];
            for(let i=1;i<=4;i++){
                newsPost.push(data[dataLength - i])
            }
            this.setState({newsPost: newsPost});
          
      })
      .catch(error => console.log(error));
  }
 

  render() {
    let {data} =this.state;
    const newsId = this.props.match.params.id; 
    console.log(newsId,'component cha')
    return (
        <div className='wrapper'>
            <NewsSideBar />
            <NewsMainDetails newsId={newsId}/>
            <NewsSideBarRight newsPost={this.state.newsPost} getIdNewPost={this.getIdNewPost}/> 
        </div>
    );
  }
}

export default NewsDetails;
