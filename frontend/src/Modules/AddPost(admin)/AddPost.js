import React, { Component } from "react";
import "./AddPost.scss";
import axios from 'axios'
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


class AddPost extends Component {
    constructor(props){
        super(props)
        this.state={
          valueTittle: '',
          category:'',
          decription: '',
          valueAdd: '',
          content: '',
          imageURL: '',
        }
    }
    handlerChangeAdd = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    addCategory = () => {
        alert(this.state.valueAdd);
        this.setState({valueAdd:''});
    }
    onchangefile=(e) =>{
      let files = e.target.files;
      let reader = new FileReader();
      reader.readAsDataURL(files[0]);

      reader.onload = (e) =>{
        console.log(e.target.result);
        this.setState({imageURL: e.target.result});
      }
    
    }
    submit =() => {
      console.log('hihihihi')

      
  
      axios.post(`http://localhost:3000/news`, {
        category: this.state.category,
        description: this.state.decription,
        title: {
          1: this.state.valueTittle,
          2: this.state.valueTittle,
          3: this.state.valueTittle,
          4: this.state.valueTittle
        },
        img: this.state.imageURL,
        content: {
          1: this.state.content,
          2: this.state.content,
          3: this.state.content,
          4: this.state.content,
        }
      })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }

    render() {
      const {valueAdd, valueTittle,decription,category, imageURL} = this.state;
      console.log('state: ',this.state);
      
    return (
      <div className="adAddPost">
        <div className="adAddPostLeft">
          <div className="advalueTitle">
            <select name='category' onChange={this.handlerChangeAdd}>
              <option value=''>Chuyên mục</option>
              <option value='Bệnh lý'>Bệnh lý</option>
              <option value='Content Maketing'>Content Maketing</option>
              <option value='Đơn thuốc'>Đơn thuốc</option>
            </select>
            <input type="text" name='valueTittle' value={valueTittle} onChange={this.handlerChangeAdd} placeholder="Tiêu đề bài viết..."></input>
          </div>
          <div className="adPicDecrip">
            <div className="img">
              <input type='file' name='file' onChange={(e)=>this.onchangefile(e)}></input>
            </div>
            <div className="adInputDecrip">
              <textarea type='text' onChange={this.handlerChangeAdd} name='decription' value={decription} placeholder="Mo ta ..."></textarea>
            </div>
          </div>

          <div className="adstoreIMG">
            <img style={{width:'100%', height:'100%'}} src={imageURL}></img>
          </div>
          <div className="ckedit">
            <CKEditor
              
              editor={ClassicEditor}
              data="<p>Hello from CKEditor 5!</p>"
              onReady={(editor) => {
                console.log("Editor is ready to use!", editor);
              }}
              

              onChange={(event, editor) => {
                const data = editor.getData();
                this.setState({ content: data });
                console.log({ event, editor, data });
              }}
            />
          </div>
          <div>
            <button onClick={this.submit}>Đăng</button>
          </div>
        </div>
        <div className="adAppPostRight">
          <h2>Danh sách chuyên mục</h2>
          <ul className="adlistCategory">
            <li>Content maketing</li>
            <li>Content maketing</li>
            <li>Content maketing</li>
            <li>Content maketing</li>
          </ul>
          <h2>Thêm chuyên mục</h2>
          <div class="adAddCategory">
            <input type="text" placeholder="tên chuyên mục" name='valueAdd' value={valueAdd} onChange={this.handlerChangeAdd}></input>
            <button onClick={this.addCategory}>Thêm</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPost;
