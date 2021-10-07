import React, { Component, useReducer } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import NewsSideBar from './NewsSideBar';
import Pagination from './Pagination';
class NewsMain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // number : '',
            data: [],
            onSearch: false,
            searchValue: '',
            currentPage: 1,
            newsPerPage: 8,
            findCategory: '',
            onFilterCategory: false,
        }
    }
    componentDidMount() {
        axios.get("http://localhost:3000/news")
            .then(res => {
                const data = res.data;
                this.setState({ data });

            })
            .catch(error => console.log(error));
    }

    getValueSearch = (e) => {
        const { searchValue } = this.state;
        this.setState({ searchValue: e.target.value })
        if (searchValue == "") {
            this.setState({ onSearch: false })
        }
    }
    onSearch = () => {
        this.setState({
            onSearch: true,
            currentPage: 1
        });
    };
    chosePage = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    getCategory = (value) => {
        let category = value;
        if (category === 'all') {
            this.setState({ onFilterCategory: false })
        } else {
            this.setState({ findCategory: category, onFilterCategory: true });
        }
    }

    //hàm loại bỏ dấu tiếng việt
    removeAccents = (str) => {
        return str.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D');
    }
    render() {
        let { data, searchValue, onSearch, currentPage, newsPerPage, findCategory, onFilterCategory } = this.state;
        console.log("data: ", this.state.data);
        console.log(newsPerPage)
        console.log(findCategory);
        const indexOfLastNews = currentPage * newsPerPage;
        const indexOfFirstNews = indexOfLastNews - newsPerPage;
        if (onFilterCategory) {
            data = data.filter((item) => {
                return (
                    item.category === findCategory
                );
            })
        }


        if (onSearch) {
            data = data.filter((item) => {
                return (
                    // item.description.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1 ||
                    this.removeAccents(item.description.toLowerCase()).indexOf(this.removeAccents(searchValue.toLowerCase())) !== -1
                );
            })
        }
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(data.length / newsPerPage); i++) {
            pageNumbers.push(i);
        }
        if (!data.length == 0) {
            var itemList = data.slice(indexOfFirstNews, indexOfLastNews).map((item, index) => {
                return (
                    <div className='card' key={index}>
                        <Link to={`news/${item.id}`}>
                            <div className='cardImg'>
                                <img src={item.img}></img>
                            </div>
                            <div className='cardBody'>
                                <div className='cardTitle'>
                                    <h5>{item.title[1]}</h5>
                                </div>
                                <div className='cardText'>{item.description}</div>
                                <span style={{fontSize: "13px"}}>Time:{item.timePost} | view:{item.view}</span>
                            </div>
                        </Link>
                    </div>
                )
            })
        }
        if (data.length == 0 && onSearch) {
            var itemList = (
                <div className='failSearch'>
                    <img style={{width:'50px', marginRight:"10px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4PAzbqCKCzgMb-vYKZvYg57ZLG2YLBbObbA&usqp=CAU'></img>
                    <div>
                        <h3 style={{
                            fontSize: "25px",
                            fontWeight: '400'
                        }}>Rất tiếc chúng tôi không tìm thấy kết quả nào</h3>
                        <p>Hãy chắc chắn từ khóa bạn nhập đúng hoặc liên hệ 19001080 để được hỗ trợ</p>
                    </div>
                </div>
            )
        }
        return (
            <>
                <NewsSideBar getCategory={this.getCategory} onSearch={this.onSearch} getValueSearch={this.getValueSearch} />
                <div className='mainContent'>
                    <div className='rowBlogs'>
                        {itemList}
                    </div>
                    <Pagination data={data} chosePage={this.chosePage} currentPage={currentPage} pageNumbers={pageNumbers} />
                </div>
            </>
        )
    }
}

export default NewsMain;