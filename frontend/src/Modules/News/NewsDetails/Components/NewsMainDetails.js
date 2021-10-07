import React, { Component } from 'react';
import axios from 'axios';
class NewsMainDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            arr: [],
            newsId: this.props.newsId,
        }
    }

    setData = (data) => {
        this.setState({ data })
    }
    getdata = () => {
        console.log('axios');
        axios.get(`http://localhost:3000/news/${this.state.newsId}`)
            .then(res => {
                const data = res.data;
                this.setData(data)
                if (this.state.data.title) {
                    let arr = [];
                    for (let i = 1; i < 6; i++) {
                        arr.push(data.title[i]);
                        arr.push(data.content[i]);
                    }
                    this.setState({ arr: arr })
                }

            })
            .catch(error => console.log(error));
    }
    
    componentWillReceiveProps(nextProps) {
        console.log('reciverprops')
        if (nextProps.newsId !== this.props.newsId) {
            this.state.newsId =  nextProps.newsId
        }
        this.componentDidMount();
    }
    componentDidMount() {
        console.log('didmout');
        this.getdata();
    }
    

    render() {
        console.log('rennder')
        const { data } = this.state;
        const { arr } = this.state;
        return (
            <div className='mainContent'>
                <div className='imgMain'>
                    <img src={data.img}></img>
                </div>
                <br></br>
                {
                    arr.map(item => (
                        <>
                            <p>{item}</p>
                            <br></br>
                        </>
                    ))
                }
                <div className='btnShare'>
                    <a href='https://www.facebook.com/' target='_blank'><i className="fa fa-facebook-square"></i>&nbsp;Facebook</a>
                    <a href='https://twitter.com/?lang=vi' target='_blank'><i className="fa fa-twitter"></i>&nbsp;Twitter</a>
                    <a href='https://www.instagram.com/' target='_blank'><i class="fa fa-instagram"></i>&nbsp;Instagram</a>
                    <a href='https://mail.google.com/' target='_blank'><i class="fa fa-envelope-o"></i>&nbsp;Email</a>
                </div>
                <div className='commentBox'>
                    <p>Bình luận:</p>
                    <textarea style={{ width: '100%' }} id="comment" name="comment" rows="4" cols="50">

                    </textarea>
                    <div>
                        <input style={{ width: '30%' }} type='text' placeholder='Tên'></input>
                        <input style={{ width: '70%' }} type='text' placeholder='Email'></input>
                    </div>
                    <div style={{ textAlign: 'right' }}><button className='btnComment'>Gửi</button></div>
                </div>

            </div>

        );

    }
}

export default NewsMainDetails;