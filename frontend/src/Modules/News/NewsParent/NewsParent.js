import React, { Component } from 'react';
import "./NewsParent.scss"
import NewsMain from './Components/NewsMain';
class NewsParent extends Component {

  render() {

    return (
        <div className='wrapper'>
            <NewsMain />
        </div>
    );
  }
}

export default NewsParent;
