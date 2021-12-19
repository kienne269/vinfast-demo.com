import React from 'react'

import { Link } from 'react-router-dom';

import './signin.scss';

const Signin = () => {
    return (
        <form action method="POST" className="form" id="form-2">
            <div className="sign__in">
                <p className="sign__in--title">Đăng ký</p>
                <div className="form-group">
                    <input type="text" name="email" id="name" placeholder="Họ tên" />
                    <span className="form-message"></span>
                </div>
                <div className="form-group">
                    <input type="text" name="email" id="email" placeholder="Email" />
                    <span className="form-message"></span>
                </div>
                <div className="form-group">
                    <div className="password">
                        <input type="text" name="password" id="passwword" placeholder="Mật khẩu" />
                    <div className="password__show">
                        <i className="icon__show"></i>
                    </div>
                    </div>
                    <span className="form-message"></span>
                </div>
                <div className="form-group">
                    <div className="password">
                        <input type="text" name="password" id="passwword" placeholder="Nhập lại mật khẩu" />
                        <div className="password__show">
                            <i className="icon__show"></i>
                        </div>
                    </div>
                    <span className="form-message"></span>
                </div>
            </div>
            <div className="password-require">
                <p className="desc">Mật khẩu bạn phải có:</p>
                <ul className="below-desc">
                    <li id="character">
                        <span>Ít nhất 8 ký tự</span>
                    </li>
                    <li id="uppercase">
                        <span>Chữ cái viết hoa (A-Z)</span>
                    </li>
                    <li id="lowercase">
                        <span>Chữ cái viết thường (a-z)</span>
                    </li>
                    <li id="number">
                        <span>Ít nhất 1 số</span>
                    </li>
                </ul>
            </div>
            <div className="policy">
                Bằng việc bấm nút Đăng ký bên dưới, tôi xác nhận đã đọc, hiểu và đồng ý với các <Link to="/">Điều kiện và Điều khoản</Link> của VinFast.
            </div>
            <div className="submit">
                <input type="submit" value="Đăng ký" 
                disabled="disabled"
                />
            </div>
            <p className="no__account">Đã có tài khoản?</p>
            <div className="btn__sign__up">
                <Link to="/login">Đăng nhập</Link>
            </div>
        </form>
    )
}

export default Signin
