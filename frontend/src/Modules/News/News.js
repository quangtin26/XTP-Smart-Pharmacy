import React, { Component } from 'react';
import NewsParent from './NewsParent/NewsParent';

class News extends Component {

  render() {

    return (
        <div className="m-size m-auto" >
            <NewsParent/>
        </div>
    );
  }
}

export default News;
