import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useSelector} from 'react-redux'

import { selectUser } from '../../../redux/user/userSlice';

import GroupInput from '../group-input/GroupInput'
import DepostConfirm from '../depost-confirm/DepostConfirm'

import './order-last.scss'

const OrderLast = () => {

    const user = useSelector(selectUser);

    const [isDisabled, setIsDisabled] = useState(false)
    const [nameText, setNameText] = useState('')
    const [phone, setPhone] = useState('')
    const [cccd, setCccd] = useState('')
    const [email, setEmail] = useState('')
    const [province, setProvince] = useState('')
    const [referralCode, setReferralCode] = useState('')
    const [show, setShow] = useState(false);

    const handleChangeName = (e) => {
        setNameText(e.target.value);
    }

    const handleChangePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleChangeCccd = (e) => {
        setCccd(e.target.value);
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangeProvince = (e) => {
        setProvince(e.target.value);
    }

    const handleChangeReferralCode = (e) => {
        setReferralCode(e.target.value);
    }

    const handleNone = (e) => {
        setShow(!show)
    }

    return (
        <>
            <div className="order__last">
                <div className="vf__form">
                    <form action="" id=''>
                        <div className="row group-customer">
                            <div className="l-12 group__title">Thông tin khách hàng</div>
                            <div className="l-12">
                                <div className="row">
                                    <div className="l-6 group__personal">
                                        <GroupInput value={user ? user.name : ""} handleChange={handleChangeName} label="Họ tên cá nhân"/>
                                    </div>
                                    <div className="l-6 group__personal">
                                        <GroupInput handleChange={handleChangeCccd} label="CMND/CCCD"/>
                                    </div>
                                </div>
                            </div>
                            <div className="l-12">
                                <div className="row">
                                    <div className="l-6 group__personal">
                                        <GroupInput handleChange={handleChangePhone} label="Số điện thoại"/>
                                    </div>
                                    <div className="l-6 group__personal">
                                        <GroupInput handleChange={handleChangeEmail} label="Email"/>
                                    </div>
                                </div>
                            </div>
                            <div className="l-12">
                                <div className="row">
                                    <div className="l-6 group__personal">
                                        <GroupInput handleChange={handleChangeProvince} label="Tỉnh thành"/>
                                    </div>
                                    <div className="l-6 group__personal">
                                        <GroupInput handleChange={handleChangeReferralCode} label="Mã giới thiệu"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row checkbox checkbox__agree">
                            <div className="group__input">
                                <input type="checkbox" id="1"/>
                                <label htmlFor="1">Tôi cam kết các thông tin đã cung cấp tại đây hoàn toàn chính xác.</label>
                            </div>
                            <div className="group__input">
                                <input type="checkbox" id="2"/>
                                <label htmlFor="2">
                                    Tôi đã đọc, hiểu rõ và xác nhận đồng ý với toàn bộ nội dung
                                    <Link to="/"> Điều khoản </Link>                                    
                                    trong Thỏa Thuận Đặt Cọc trên cũng như Chính Sách Ưu Đãi áp dụng tại thời điểm đặt mua xe ô tô này trên VinFast Online.
                                </label>
                            </div>
                            <div className="group__input">
                                <input type="checkbox" id="3"/>
                                <label htmlFor="3">
                                    Tôi đồng ý với các
                                    <Link to="/"> Điều kiện & Điều khoản </Link>
                                    của VinFast Online.
                                </label>
                            </div>
                        </div>
                        <div className="radio">
                            <p>Hình thức thanh toán</p>
                            <div className="group__input">
                                <input type="radio" id="radio1" name="payment" value="radio1"/>
                                <label htmlFor='radio1'>Thanh toán qua thẻ tín dụng</label>
                            </div>
                            <div className="group__input">
                                <input type="radio" id="radio2" name="payment" value="radio2"/>
                                <label htmlFor='radio2'>Thanh toán qua thẻ ATM nội địa/Internet Banking</label>
                            </div>
                            <div className="group__input">
                                <input type="radio" id="radio3" name="payment" value="radio3"/>
                                <label htmlFor='radio3'>Thanh toán qua chuyển khoản ngân hàng</label>
                            </div>
                        </div>
                        <div className="btn">
                            <button onClick={(e) => (e.preventDefault(),setShow(!show))} disabled={isDisabled}>Đặt cọc</button>
                        </div>
                    </form>
                </div>
            </div>
            <DepostConfirm show={show} handleNone={handleNone}/>
        </>
    )
}

export default OrderLast
