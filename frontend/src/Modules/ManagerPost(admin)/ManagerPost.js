import React, { Component } from 'react';
import './ManagerPost.scss';
import axios from 'axios';

class ManagerPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
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

    removePost = (id) => {
        console.log(id)
        axios.delete(`http://localhost:3000/news/${id}`)
        .then(res => {
            if(res.data !== null){
                alert('Bài viết đã được xóa thành công!');
                this.setState({data: this.state.data.filter(item => item.id !==id)});
            }
            console.log(res);
            console.log(res.data);
        })
    }
    render() {
        let { data } = this.state;
        console.log('DATA:', data);
        return (
            <div id="wrapperAdmin">
                {/* content */}
                <div className='contentADPost'>
                    <table class="tablePost" cellSpacing="0">
                        <tr>
                            <th>Stt</th>
                            <th>Tiêu đề</th>
                            <th>Tác giả</th>
                            <th>Chuyên mục</th>
                            <th>Tương tác</th>
                            <th>Thời gian</th>
                        </tr>

                        {
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>
                                        <p>{item.title[1]}</p>
                                        <div>
                                            <a href="#">Xem trước</a>|<a href="#">Chỉnh sửa</a>|
                                            <button onClick={()=>this.removePost(item.id)}>Gỡ bỏ</button>
                                        </div>
                                    </td>
                                    <td>XTP-Phẩmcy</td>
                                    <td>{item.category}</td>
                                    <td>
                                        <p>8 bình luận</p>
                                        <p>0 lượt chia sẻ</p>
                                    </td>
                                    <td>Sửa đổi lần cuối 28/07/2021 lúc 1:59 chiều</td>
                                </tr>
                            ))
                        }
                        
                    </table>
                </div>
                {/* endContent */}
            </div>
        );
    }
}


export default ManagerPost;