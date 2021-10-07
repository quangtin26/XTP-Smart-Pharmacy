import React, { Component } from 'react';
import './PharmacySearch.scss';


class AppInfor extends Component {

  constructor(props) {
    super(props);

    this.state = {
        provinceSearch: '',
        citySearch: '',
        latitude: null,
        longitude: null,
        userAddress: null,
        searchAroundStatus: false
    }
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
  }
  
  

  provinceIsChange = (event) => {
    console.log(event.target.value);
    this.setState({
      provinceSearch: event.target.value,
    })
  }

  cityIsChange = (event) => {
    console.log(event.target.value);
    this.setState({
      citySearch: event.target.value,
    })
  }

  searchingClick = (city,province) => {
    this.props.searchingFunClick(city,province);
    this.goTo("pharmacy");
  }

  searchingAroundClick = (city,province) => {

    this.getLocation();
    //this.props.searchingAroundFunClick(city,province);
    //this.goTo("pharmacy");
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates, this.showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  getCoordinates = (position) => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    }) 

    localStorage.setItem("latitude",position.coords.latitude);
    localStorage.setItem("longitude",position.coords.longitude);
    console.log(this.state.latitude)
    console.log(this.state.longitude)

    this.reverseGeocodeCoordinates();
  }

  // Geocode Test
  // 21.0048274,105.8090812 Nhân Chính, Thanh Xuân, Hà Nội
  // 21.119203,105.873468   Cổ Loa, Đông Anh, Hà Nội
  // .then(data => console.log(data)) 
  // address_components[2].short_name short_name
  //
  reverseGeocodeCoordinates = () =>{
    // fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng='+this.state.latitude+','+this.state.longitude+'&sensor=false&key=AIzaSyDF6dhB4u0I6PH-_ZdkhHz1PKq6iiK7rhA')
     fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=21.0048274,105.8090812&sensor=false&key=AIzaSyCCt2IV6VqRIdJJ2fMU-yNLq3L--2qjuK0')
    .then(response => response.json())
    .then(data => localStorage.setItem("province",data.results[0].address_components[2].short_name))
    .catch(error => alert(error))
    .then(data => this.setState({
      searchAroundStatus: true
    }))

    //this.goTo("pharmacy");
  }

  showError=(error) => {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.") 
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.")
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.")
        break;
        default: alert("An unknown error occurred.")

    }
  }

  render() {
      //props.editFunClick
    return (
        <div className="search-pharmacy m-size m-auto">
            <h1 className="pharmacy-title pt-15" style={{margin: 0}}>
            Tìm nhà thuốc nhanh nhất, phù hợp nhất
            </h1>
            <div className="search-pharmacy-form">
            <div className="search-for">
                <select name id aria-placeholder="Tỉnh thành" onChange={(event)=>this.cityIsChange(event)}>
                  <option value={0}>Tỉnh thành</option>
                  <option value="Hà Nội" >
                    Hà Nội
                  </option>
                  <option value="Đà Nẵng">
                    Đà Nẵng
                  </option>
                </select>
                <select name id aria-placeholder="Tỉnh thành" onChange={(event)=>this.provinceIsChange(event)}>
                  <option value={0}>Quận huyện</option>
                  <option value="Cầu Giấy">
                  Cầu Giấy
                  </option>
                  <option value="Đông Anh">
                  Đông Anh
                  </option>
                  <option value="Tây Hồ">
                  Tây Hồ
                  </option>
                </select>
                <button onClick={(city,province) => this.searchingClick(this.state.citySearch,this.state.provinceSearch)}
                //onClick={() => this.goTo("pharmacy")} 
                className="search-pharmacy-button" style={{backgroundColor: 'darkblue'}}>
                <i className="fa fa-search"> </i>Tìm hiệu thuốc 
                </button>
            </div>
            <div className="search-around">
                <textarea placeholder="Nhập tên hiệu thuốc hoặc khu vực" name id cols rows   style={{padding:5}}/>
                <button onClick={(city,province)=>this.searchingAroundClick(this.state.citySearch,this.state.provinceSearch)}
                className="search-pharmacy-button" style={{backgroundColor: 'darkred'}}>
                <i className="fa fa-map-marker"> </i>Tìm quanh bạn
                </button>
            </div>
            </div>
        </div>
    );
  }
  goTo = (url = "") => {
    url = window.location.origin + "/" + url;
    window.location.replace(url);
  };

  componentDidUpdate() {
    if (this.state.searchAroundStatus === true)
    {
      this.goTo('pharmacy')
    }
    else console.log("chua duoc")
  }
}



export default AppInfor;
