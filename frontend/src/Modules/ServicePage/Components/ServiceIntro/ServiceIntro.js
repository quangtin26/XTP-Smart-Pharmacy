import React, { Component } from 'react';
import './ServiceIntro.scss';

class ServiceIntro extends Component {

  render() {
      
    return (
        <div className="service-intro1">
            <div className = "banner1">
                <h1>NGƯỜI BẠN ĐỒNG HÀNH CÙNG Y TẾ VIỆT</h1>
                <div className = "intro1">
                    <div className = "left-intro1">
                        <iframe width={600} height={315} src="https://www.youtube.com/embed/pSNtnNgTj5M" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    </div>
                    <div className = "right-intro1">
                        <h1>Chào mừng bạn đến với thế giới của chúng tôi!</h1>
                        <span>Bạn biết luật Hấp Dẫn chứ? Chúng ta đã hút nhau và chắc chắn sẽ có nhiều thành tựu cùng nhau đó. </span>
                        <br/> <br/>
                        <span>Đầu tiên, mời bạn xem video giới thiệu về chúng tôi do đài VTV quay nhé!</span>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default ServiceIntro;
