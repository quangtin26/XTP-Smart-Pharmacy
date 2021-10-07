import { Component } from "react";
import './Pagination.scss'
class Pagination extends Component{
    constructor(props){
        super(props)
        this.state ={
            
        }
    }
    render(){
        let pageNumbers = this.props.pageNumbers
        return(
            <div>
                <div id="app">
                <div className="pagination-custom">
                    <ul id="page-numbers">
                        {
                        pageNumbers.map(number => {
                            if (this.props.currentPage === number) {
                            return (
                                <li key={number} id={number} className="active">
                                {number}
                                </li>
                            )
                            }
                            else {
                            return (
                                <li key={number} id={number} onClick={this.props.chosePage} >
                                {number}
                                </li>
                            )
                            }
                        })
                        }
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}
export default Pagination;