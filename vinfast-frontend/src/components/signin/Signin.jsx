import React, {useState, useEffect} from 'react'

import axios from 'axios'

import { Link} from 'react-router-dom';

import './signin.scss';

const Signin = () => {
    const [accountData, setAccountData] = useState([])
    console.log(accountData)

    useEffect(() => {
        axios.get('http://localhost/vinfast/vinfast-backend/api/user/ReadAccount.php')
        .then(res => {
            const persons = res.data;
            setAccountData( persons.data);
        })
        .catch(error => console.log(error));
    }, [])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [passConfirm, setPassConfirm] = useState('')
    const [isShowPass, setIsShowPass] = useState(false)
    const [isShowPassConfirm, setIsShowPassConfirm] = useState(false)
    const [checkMail, setCheckMail] = useState(true)
    const [checkPass, setCheckPass] = useState(true)
    const [checkPassConfirm, setCheckPassConfirm] = useState(true)
    const [checkUpperCase, setCheckUpperCase] = useState(false)
    const [checkLowerCase, setCheckLowerCase] = useState(false)
    const [checkLengthCase, setCheckLengthCase] = useState(false)
    const [checkNumberCase, setCheckNumberCase] = useState(false)

    // On change text
    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePass = (e) => {
        setCheckUpperCase(/[A-Z]/.test(e.target.value))
        setCheckLowerCase(/[a-z]/.test(e.target.value))
        setCheckLengthCase(e.target.value.length >= 8)
        setCheckNumberCase(/\d/.test(e.target.value))
        setPass(e.target.value);

    }

    const onChangePassConfirm = (e) => {
        setPassConfirm(e.target.value);
    }

    const handleShowPass = () => {
        setIsShowPass(!isShowPass)
    }

    // Validation

    const emailValidation = () => {
        
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        setCheckMail(regex.test(email));
    }

    const passwordValidation = () => {
        if (pass === passConfirm) {
            setCheckPassConfirm(true);
        } else {
            // make API call
            setCheckPassConfirm(false);
        }
        
    }

    const handleShowPassConfirm = () => {
        setIsShowPassConfirm(!isShowPassConfirm)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        emailValidation();
        passwordValidation();

        const check = checkUpperCase && checkLowerCase && checkLengthCase && checkNumberCase;
        setCheckPass(check)

        if (check && checkPassConfirm && checkMail) {
            if (accountData) {
                const getEmail = (email) => accountData.find(e => e.email === email)
                const CheckEmailResigered = getEmail(email)
                if (CheckEmailResigered) {
                    //check
                    alert('Tài khoản đã tồn tại')
                } else {
                    const obj = {
                        name: name,
                        email: email,
                        password: pass,
                    }
                    console.log(obj)
                    axios.post('http://localhost/vinfast/vinfast-backend/api/user/CreateAccount.php',obj)
                    .then(res=> console.log(res.data))
                    .catch(error => {
                        console.log(error.response)
                    })
                }
            }
            // else {
            //     const obj = {
            //         name: name,
            //         email: email,
            //         password: pass,
            //     }
            //     axios.post('http://localhost/vinfast/vinfast-backend/api/user/CreateCustomer.php',obj)
            //     .then(res=> console.log(res.data))
            //     .catch(error => {
            //         console.log(error.response)
            //     })
            // }
        }


    }
    return (
        <form action method="POST" className="form" id="form-2">
            <div className="sign__in">
                <p className="sign__in--title">Đăng ký tài khoản</p>
                <div className="form-group">
                    <input onChange={onChangeName} type="text" name="name" id="name" placeholder="Họ và tên" />
                    <div className="form-message"></div>
                </div>
                <div className="form-group">
                    <input className={checkMail ? '' : "check"} onChange={onChangeEmail} type="text" name="email" id="email" placeholder="Email" />
                    <div className="form-message">{checkMail ? "" : "Sai định dạng email."}</div>
                </div>
                <div className="form-group">
                    <div className="password">
                        <input className={checkPass ? "" : "check"} onChange={onChangePass} type={isShowPass ? 'text': 'password'} name="password" id="passwword" placeholder="Mật khẩu" />
                        <div onChange={onChangePass} onClick={handleShowPass} className="password__show">
                            <i className={isShowPass ? "icon__hide" : "icon__show"}></i>
                        </div>
                    </div>
                    <div className="form-message">{checkPass ? "" : "Mật khẩu phải đúng định dạng."}</div>
                </div>
                <div className="form-group">
                    <div className="password">
                        <input className={checkPassConfirm ? "" : "check"} onChange={onChangePassConfirm} type={isShowPassConfirm ? 'text': 'password'} name="password" id="passwword1" placeholder="Nhập lại mật khẩu mới" />
                        <div onClick={handleShowPassConfirm} className="password__show">
                            <i className={isShowPassConfirm ? "icon__hide" : "icon__show"}></i>
                        </div>
                    </div>
                    <div className="form-message">{checkPassConfirm ? "" : "Mật khẩu không trùng khớp."}</div>
                </div>
            </div>
            <div className="password-require">
                <p className="desc">Mật khẩu bạn phải có:</p>
                <ul className="below-desc">
                    <li className={checkLengthCase ? 'checkCase' : ''} id="character">
                        <span>Ít nhất 8 ký tự</span>
                    </li>
                    <li className={checkUpperCase ? 'checkCase' : ''} id="uppercase">
                        <span>Chữ cái viết hoa (A-Z)</span>
                    </li>
                    <li className={checkLowerCase ? 'checkCase' : ''} id="lowercase">
                        <span>Chữ cái viết thường (a-z)</span>
                    </li>
                    <li className={checkNumberCase ? 'checkCase' : ''} id="number">
                        <span>Ít nhất 1 số</span>
                    </li>
                </ul>
            </div>
            <div className="policy">
                Bằng việc bấm nút Đăng ký bên dưới, tôi xác nhận đã đọc, hiểu và đồng ý với các <Link to="/">Điều kiện và Điều khoản</Link> của VinFast.
            </div>
            <div className="submit">
                <button onClick={onSubmit}>Đăng ký</button>
            </div>
            <p className="no__account">Đã có tài khoản?</p>
            <div className="btn__sign__up">
                <Link to="/login">Đăng nhập</Link>
            </div>
        </form>
    )
}

export default Signin
