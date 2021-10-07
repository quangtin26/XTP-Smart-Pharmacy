import React, { Component } from 'react';
import './Introduce.scss'
import { Link } from "react-router-dom";
class Introduce extends Component {

  render() {
    return (
      <div className="m-size m-auto mb-15">
        <div className='row'>
          <div className='col-6 HeadLine'>
            <div className='headLineTitle'>
              <h2>XTP-PHARMACY</h2>
              <p>Nền tảng nhà thuốc thông minh hàng đầu Việt Nam</p>
            </div>
            <div className="list_headline">
              <ul>
                <li><i class="fa fa-check-circle"></i>Nền tảng kết nối phụ huynh và nhà trường</li>
                <li><i class="fa fa-check-circle"></i>Review mầm non khách quan, chân thực</li>
                <li><i class="fa fa-check-circle"></i>Tìm trường mầm non và việc làm PHI -LỢI NHUẬN</li>
                <li><i class="fa fa-check-circle"></i>Dịch vụ hỗ trợ trường mầm non tuyển sinh và tuyển dụng nhân dự</li>
              </ul>
            </div>
            <div className='btnHeadline'>
              <Link to="/">
                <button>Tìm hiểu thêm</button>
              </Link>
            </div>
          </div>
          <div className='col-6'>
            <div className='videoContact'>
              <iframe width="650" height="400" src="https://www.youtube.com/embed/XHOmBV4js_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>

        <div className='statistic'>
          <h2>XTP VÀ CÁC CON SỐ</h2>
          <p className='descStatiistic'>Chính thức đi vào hoạt động từ 10/06/2020, tính đến nay, KiddiHub đã gặt hái được vô số thành công trong lĩnh vực giáo dục mầm non với những con số hết sức ấn tượng, hứa hẹn vào một tương lai phát triển mạnh mẽ và bền vững.</p>
          <div className='row' style={{ justifyContent: 'space-between', marginBottom: "30px" }}>
            <div className='cardStatistic'>
              <div className='icon'>
                <i class="fa fa-search"></i>
              </div>
              <div>
                <p>+ 1.989.500</p>
                <span>Theo thống kê từ hệ thống của KiddiHub, tính đến nay đã có hơn +1.989.500 phụ huynh </span>
              </div>
            </div>
            <div className='cardStatistic'>
              <div className='icon'><i class="fa fa-check"></i></div>
              <div>
                <p>+86.250 </p>
                <span>+86.250 phụ huynh đăng kí thăm trường qua KiddiHub</span>
              </div>
            </div>
            <div className='cardStatistic'>
              <div className='icon'><i class="fa fa-users"></i></div>
              <div>
                <p>+ 2.250 </p>
                <span>+ 2.250 phụ huynh để lại phản hồi, review về các trường trên KiddiHub</span>
              </div>
            </div>
          </div>
          <div className='row' style={{ justifyContent: 'space-between' }}>
            <div className='cardStatistic'>
              <div className='icon'><i class="fa fa-building"></i></div>
              <div>
                <p>+5590 </p>
                <span>+5590 là tổng số trường mầm non lớn nhỏ trên khắp cả nước được đưa lên nền tảng online của KiddiHub</span>
              </div>
            </div>
            <div className='cardStatistic'>
              <div className='icon'><i class="fa fa-bar-chart"></i></div>
              <div>
                <p>+200.000</p>
                <span>Trung bình có hơn +200.000 lượt truy cập hàng tháng trên nền tảng online của KiddiHub</span>
              </div>
            </div>
            <div className='cardStatistic'>
              <div className='icon'><i class="fa fa-angle-double-up"></i></div>
              <div>
                <p>+Top 1000 website</p>
                <span>+Top 1000 website có lượng truy cập lớn nhất Việt Nam hiện tại và đang có xu hướng phát </span>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-6 row'>
            <div className='contentBox'>
              <div className='box'>Slogan</div>
              <p>Nâng cao và phát triển chất lượng hiệu thuốc tại việt nam</p>
            </div>
            <div className='contentBox'>
              <div className='box'>Tầm nhìn</div>
              <p>Nâng cao và phát triển chất lượng hiệu thuốc tại việt nam</p>
            </div>
            <div className='contentBox'>
              <div className='box'>Sứ mệnh</div>
              <p>Nâng cao và phát triển chất lượng hiệu thuốc tại việt nam</p>
            </div>
          </div>
          <div className='col-6 vision'>
            <h1>XTP - TẦM NHÌN - SỨ MỆNH</h1>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lấy trẻ em làm trung tâm, hướng tới giá trị Chân - Thiện - Mĩ.

              "Không người lớn nào có thể gánh thay gánh nặng của trẻ nhỏ, hay lớn lên thay cho nó."
              Việc duy nhất mà người lớn chúng ta có thể làm cho con trẻ đó là tạo cho trẻ một môi trường giáo dục đúng đắn để trẻ được tự do phát triển khỏe mạnh.
              Hiểu rõ điều này, KiddiHub mang trên mình sứ mệnh giúp cho mọi trẻ em được sống và học tập trong một môi trường giáo dục đúng đắn và hoàn thiện nhất.</p>
            <div className='btnSercive row'>
              <a href='#'>
                <div className='serviceBox'>
                  <div><i class="fa fa-pencil-square-o"></i></div>
                  <p>Review nhà thuốc</p>
                </div>
              </a>
              <a href='#'>
                <div className='serviceBox'>
                  <div><i class="fa fa-search"></i></div>
                  <p>Review nhà thuốc</p>
                </div>
              </a>
              <a href='#'>
                <div className='serviceBox'>
                  <div><i class="fa fa-share-square-o"></i></div>
                  <p>Review nhà thuốc</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className='diagram'>
          <h1>Hệ sinh thái XTP-pharmacy</h1>
          <div className='row diagramChart'>
            <p>Nền tảng kết nối bệnh nhân và nhà thuốc, nhà thuốc với các giáo sư, bác sĩ</p>
            <div className='stick'>
              <div className='circle'></div>
              <div className='circle'></div>
              <div className='circle'></div>
            </div>
            <div>
              <p>Nền tảng kết nối bệnh nhân và nhà thuốc, nhà thuốc với các giáo sư, bác sĩ</p>
              <p>Nền tảng kết nối bệnh nhân và nhà thuốc, nhà thuốc với các giáo sư, bác sĩ</p>
            </div>
          </div>
        </div>

        <div className='service'>
          <h2>Các dịch vụ của XTP-Phamacy</h2>
          <div className='row'>
            <div className="col-6">
              <div className='cardService'>
                <div className='imgService'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZk6IL3gBOt-Mt9IsNg_vDcfd0txmxKkFpA&usqp=CAU"></img>
                </div>
                <div className='titleService'>Dịch vụ phi lợi nhuận</div>
                <div className='contentService'>
                  <ul>
                    <li><i class="fa fa-arrow-circle-right"></i>Review Nhà thuốc</li>
                    <li><i class="fa fa-arrow-circle-right"></i>Tìm nhà thuốc</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className='cardService'>
                <div className='imgService'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZk6IL3gBOt-Mt9IsNg_vDcfd0txmxKkFpA&usqp=CAU"></img>
                </div>
                <div className='titleService'>Dịch vụ trả phí</div>
                <div className='contentService'>
                  <ul>
                    <li><i class="fa fa-arrow-circle-right"></i>Marketing Nhà thuốc</li>
                    <li><i class="fa fa-arrow-circle-right"></i>Tìm nhân viên</li>
                    <li><i class="fa fa-arrow-circle-right"></i>Tìm kiếm khách hàng</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='newsTalkAbout'>
          <h2>Đài báo nói gì về XTP-Pharmacy</h2>
          <div className='row f-wrap jtf-content'>
            <a href='#'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYtJnPNitao7vRChYZc5rnxcaqr2UpD2aFMA&usqp=CAU'></img></a>
            <a href='#'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYtJnPNitao7vRChYZc5rnxcaqr2UpD2aFMA&usqp=CAU'></img></a>
            <a href='#'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYtJnPNitao7vRChYZc5rnxcaqr2UpD2aFMA&usqp=CAU'></img></a>
            <a href='#'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYtJnPNitao7vRChYZc5rnxcaqr2UpD2aFMA&usqp=CAU'></img></a>
            <a href='#'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYtJnPNitao7vRChYZc5rnxcaqr2UpD2aFMA&usqp=CAU'></img></a>
          </div>
        </div>
        <div className='customerTalkAbout'>
          <h2>Khách hàng nói gì về XTP-Pharmacy</h2>
          <div className='row'>
            <div className='col-3'>
              <iframe width="500" height="300" src="https://www.youtube.com/embed/XHOmBV4js_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='col-9'>
              <div className='cardTA'>
                <div className='cardLogo'>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcv2_37Rbp2lCCSTtPAQ6jLdcwQ4vz2nsHcg&usqp=CAU'></img>
                </div>
                <div>
                  <div className='cardTitle'>Hiệu thuốc số 1</div>
                  <div className='cardText'>asdasdasdadsadsadsadsadsadsadsad</div>
                </div>
              </div>
              <div className='cardTA'>
                <div className='cardLogo'>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcv2_37Rbp2lCCSTtPAQ6jLdcwQ4vz2nsHcg&usqp=CAU'></img>
                </div>
                <div>
                  <div className='cardTitle'>Hiệu thuốc số 1</div>
                  <div className='cardText'>asdasdasdadsadsadsadsadsadsadsad</div>
                </div>
              </div>
              <div className='cardTA'>
                <div className='cardLogo'>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcv2_37Rbp2lCCSTtPAQ6jLdcwQ4vz2nsHcg&usqp=CAU'></img>
                </div>
                <div>
                  <div className='cardTitle'>Hiệu thuốc số 1</div>
                  <div className='cardText'>asdasdasdadsadsadsadsadsadsadsad</div>
                </div>
              </div>
              <div className='cardTA'>
                <div className='cardLogo'>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcv2_37Rbp2lCCSTtPAQ6jLdcwQ4vz2nsHcg&usqp=CAU'></img>
                </div>
                <div>
                  <div className='cardTitle'>Hiệu thuốc số 1</div>
                  <div className='cardText'>asdasdasdadsadsadsadsadsadsadsad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='contact'>
          <h2>Và hàng ngàn nhà thuốc khác <a href='#'>Xem tại đây!</a></h2>
          <div className='bannerContact'>
            <h2>XTP-Pharmacy Hệ sinh thái nhà thuốc hàng đầu việt nam</h2>
            <p>liên hệ tổng đài để được hưởng tư vấn maketing hoàn toàn miễn phí</p>
            <div className='phone'><i class="fa fa-phone-square"></i><span>19001080</span></div>
          </div>
        </div>
        <div className='author'>
          <h2>Đội ngũ sáng lập</h2>
          <div className='row jtf-content'>
            <div className='cardAuthor'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-hjuFaNMnEAp28Q9Mo7x6QK_IyHnKdOqqA&usqp=CAU'></img>
              <p>Tên</p>
              <p>Chức vụ</p>
            </div>
            <div className='cardAuthor'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-hjuFaNMnEAp28Q9Mo7x6QK_IyHnKdOqqA&usqp=CAU'></img>
              <p>Tên</p>
              <p>Chức vụ</p>
            </div>
          </div>
        </div>
        <div className='ContactForm row'>
          <div className='introContact'>
            <div className='logoContact'>
              <img></img>
            </div>
            <div className='titleContact'>LỰA CHỌN SỐ 1 CHO HỆ SINH THÁI NHÀ THUỐC THÔNG MINH TẠI VIỆT NAM</div>
            <div className='textContact'>Trao cho chúng tôi sự tin tưởng, và chúng tôi sẽ trao lại cho bạn những giá trị thiết thực.</div>
          </div>
          <div className='formContact'>
            <form>
              <p>Để lại Số Điện Thoại hoặc địa chỉ Email để được XTP_Pharmacy tư vấn, hỗ trợ hiệu quả</p>
              <input className='text' type='text' placeholder='Họ tên'></input>
              <input className='text' type='text' placeholder='Số điện thoại'></input>
              <input className='text' type='email' placeholder='Email'></input>
              <input name="1" type="radio" value="" />Bệnh nhân cần tìm hiệu thuốc<br></br>
              <input name="1" type="radio" value="" />Chủ hiệu thuốc cần được hỗ trợ
              <button>Đăng kí ngay</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduce;
