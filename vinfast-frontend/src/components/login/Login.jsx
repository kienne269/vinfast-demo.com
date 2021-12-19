import React, {useState} from 'react';

import axios from 'axios'

import { Link } from 'react-router-dom';


import './login.scss';

const Login = () => {

    const [pass, setPass] = useState('')
    const [email, setEmail] = useState('')
    const [isShowPass, setIsShowPass] = useState(false)
    console.log(email)
    console.log(pass)

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePass = (e) => {
        setPass(e.target.value);
    }

    const handleShowPass = () => {
        setIsShowPass(!isShowPass)
    }
    console.log(isShowPass)

    const onSubmit = (e) => {
        e.preventDefault();
        const obj = {
            email: email,
            pass: pass,
        }
        console.log(obj);

        axios.post('http://localhost/vinfast/vinfast-backend/api/insert.php',obj)
        .then(res=> console.log(res.data))
        .catch(error => {
            console.log(error.response)
        })
        
    }
    return (
        <form action method="POST" className="form" id="form-1">
            <div className="sign__in">
                <p className="sign__in--title">Đăng nhập</p>
                <div className="form-group">
                    <input onChange={onChangeEmail} type="text" name="email" id="email" placeholder="Email" />
                    <span className="form-message"></span>
                </div>
                <div className="form-group">
                    <div className="password">
                        <input onChange={onChangePass} type={isShowPass ? 'text': 'password'} name="password" id="passwword" placeholder="Mật khẩu" />
                    <div onClick={handleShowPass} className="password__show">
                        <i className={isShowPass ? "icon__hide" : "icon__show"}></i>
                    </div>
                    </div>
                    <span className="form-message"></span>
                </div>
            </div>
            <div className="remember">
                <div className="form-group">
                    <input type="checkbox" name="note" id="note" />
                    <span className="checkmark-box"></span>
                    <label htmlFor='note' className="save__pass">Ghi nhớ tài khoản</label>
                </div>
                <div className="password__reset">Quên mật khẩu?</div>
            </div>
            <div className="submit">
                <button onClick={onSubmit}>Đăng nhập</button>
            </div>
            <p className="no__account">Chưa có tài khoản</p>
            <div className="btn__sign__up">
                <Link to="/signin">Đăng ký tài khoản</Link>
            </div>
        </form>
    )
}

export default Login
