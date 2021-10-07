import React, {Component} from 'react'
import "./Login.scss";
class Login extends Component {
  render() {
    return (
      <div class='wrapper1'>
        <form class="formLogin">
          <h3 className="mb-15">XTP-Pharmacy</h3>
            <input class='inputText' type="text" placeholder='Tên đăng nhập'></input>
            <input class='inputText' type="password" placeholder='Mật khẩu'></input>
          <div>
          <input className="mt-15 mr-5"  type="checkbox" name="1" value="remember"></input>
            <label for="1">Nhớ mật khẩu</label>
          </div>
          <div>
            <button>Đăng nhập</button>
          </div>
          <a href='#'>Quên mật khẩu</a>

        </form>
      </div>
    );
  }
}
export default Login;
