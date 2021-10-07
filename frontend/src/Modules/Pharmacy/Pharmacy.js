import React, { Component } from 'react';
import './Pharmacy.scss';
import PharmacySearchNav from './Components/PharmacySearchNav/PharmacySearchNav';
import PharmacyAnnouncementFound from './Components/PharmacyAnnouncementFound/PharmacyAnnouncementFound'
import PharmacyListFound from './Components/PharmacyListFound/PharmacyListFound';
import ListPharmacy from './PharmacyService/dataInfor.json';

import Pagination from '../News/NewsParent/Components/Pagination';

class Pharmacy extends Component {

  constructor(props) {
    super(props)
    this.state = {
      listPharmacy: ListPharmacy,
      sortedList: [],
      statusSort: false,
      currentPage: 1,
      listPerPage: 6,
    }
  }
  

  componentDidUpdate() {
    console.log("Did Update chay");
  }
  chosePage = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  select = (event) => {
    this.setState({
      listPerPage: event.target.value
    })
  }
  sortedListPharmacy = (list) => {
    this.setState({
      sortedList: list,
      statusSort: true
    })
    
  }

  render() {
    let { statusSort, sortedList, currentPage, listPerPage } = this.state;
    //console.log(localStorage.getItem('province'));
    let indexOfLastLists = currentPage * listPerPage;
    let indexOfFirstLists = indexOfLastLists - listPerPage;
    let result = [];
    let arrLast = [];
    let count = 0;
    this.state.listPharmacy.forEach((item) => {

      if(item.Adress.indexOf(localStorage.getItem('province')) !== -1 && localStorage.getItem('province') !== "") {
          result.push(item);
        }
    });
      arrLast = this.state.statusSort ? this.state.sortedList : result;
    
      for(let i = 1 ; i <= arrLast.length ; i++){
        count++;
      }
      console.log(count, 'count');
      //////Pagination
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(arrLast.length / listPerPage); i++) {
        pageNumbers.push(i);
      }
      

    return (
        <div>
            <PharmacySearchNav />
              <div className = 'main'>
                <PharmacyAnnouncementFound countResult = {count} result = {result} sortedListPharmacy = {(result) => this.sortedListPharmacy(result)} />
                {/* {this.mappingListPharmacy(arrLast)}
                 */}
                {arrLast.slice(indexOfFirstLists, indexOfLastLists).map((value,key) =>
                <PharmacyListFound id={value._id} pharname={value.NamePhar} address={value.Adress} point={value.PointTotal} describe={value.Slogan}/>)}
                
                <Pagination chosePage={this.chosePage} currentPage={currentPage} pageNumbers={pageNumbers} />
              </div>
            
        </div>
    );
  }
}

export default Pharmacy;
