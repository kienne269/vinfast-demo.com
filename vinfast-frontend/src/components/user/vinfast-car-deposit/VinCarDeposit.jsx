import React, {useState, useEffect} from 'react'
import ProtoTypes from 'prop-types'

import { Link } from 'react-router-dom'

import axios from 'axios'

import GroupInput from '../group-input/GroupInput'

import './vin-car-deposit.scss'

import thumb from '../../../assets/images/thumb-MD04-PO21.jpg'
import bangGia from '../../../assets/images/Bang-gia_T12-02.jpg'

import president from '../../../assets/images/ldp-all-cars/President.jpg'
import presidentActive from '../../../assets/images/ldp-all-cars/President-highlight.jpg'
import lux__sa from '../../../assets/images/ldp-all-cars/LuxSA.jpg'
import lux__saActive from '../../../assets/images/ldp-all-cars/LuxSA-highlight.jpg'
import lux__a from '../../../assets/images/ldp-all-cars/LuxA.jpg'
import lux__aActive from '../../../assets/images/ldp-all-cars/LuxA-highlight.jpg'
import fadil from '../../../assets/images/ldp-all-cars/Fadil.jpg'
import fadilActive from '../../../assets/images/ldp-all-cars/Fadil-highlight.jpg'
import vfe34 from '../../../assets/images/ldp-all-cars/VFe34.jpg'
import vfe34Active from '../../../assets/images/ldp-all-cars/VFe34-highlight.jpg'

import lux__sa__red from '../../../assets/images/lux-sa/red.png'

import president__purple from '../../../assets/images/360/president/purple.png'
// import lux__sa__red from '../../../assets/images/360/lux-sa/red.png'
import lux__a__white from '../../../assets/images/360/lux-a/white.png'
import fadil__gray from '../../../assets/images/360/fadil/gray.png'
import vfe34__black from '../../../assets/images/360/vfe34/black.png'

const VinCarDetail = () => {

    const [postData, setPostData] = useState([])
    

    useEffect(() => {
        axios.get('http://localhost/vinfast/vinfast-backend/api/deposit/readDeposit.php')
            .then(res => {
                const persons = res.data;
                setPostData( persons.data);
            })
            .catch(error => console.log(error));
                
    }, [])

    const details = [president__purple, lux__sa__red, lux__a__white, fadil__gray, vfe34__black];
    const container = [president, lux__sa, lux__a, fadil, vfe34];
    const containerActive = [presidentActive, lux__saActive, lux__aActive, fadilActive, vfe34Active];
    const name = ['PRESIDENT', 'LUX SA2.0', 'LUX A2.0', 'FADIL', 'VF e34'];
    const amountDeposit = ['100.000.000', '50,000.000', '50.000.000', '20.000.000', '10.000.000'];

    const [active, setActive] = useState(1);
    const [active2, setActive2] = useState(0);
    const [background, setBackground] = useState(details[1])
    
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

    // if (nameText === '' && phone === '') {
    //     setIsDisabled(false)
    // } else {
    //     setIsDisabled(true)
    // }

    const OnSubmit = (e) => {
        e.preventDefault();
        const obj = {
            nameText: nameText,
            phone: phone,
            cccd: cccd,
            email: email,
            province: province,
            referralCode: referralCode,
        }
        console.log(obj);
        axios.post('http://localhost/vinfast/vinfast-backend/api/deposit/insertcustomer.php',obj)
        .then(res=> console.log(res.data))
        .catch(error => {
            console.log(error.response)
        })
    }
    return (
        <div>
            <div className="vin__car__deposit">
                <ul className="vin__car__deposit__container">
                    {
                        container.map((item, index) => (
                            <li 
                                onClick={
                                    () => (setBackground(details[index]), setActive(index))
                                } 
                                className={`${index === active ? 'active' : ''}`} 
                                key={index}>
                                    <img src={item} alt="" />
                                    <img src={containerActive[index]} className="active" alt="" />
                                    <h2>{name[index]}</h2>
                            </li>
                        ))
                    }
                </ul>
                <div className="vin__car__deposit__detail row">
                    <div className="vin__car__deposit__detail--left l-6">
                        <img src={background} alt="" />
                    </div>
                    <div className="vin__car__deposit__detail--right l-6">
                        <div className="group__name__title">
                            <h3>{name[active]}</h3>
                            <div className="amount">
                                <span>Số tiền đặt cọc</span>
                                <span>{amountDeposit[active]} vnđ</span>
                            </div>
                        </div>
                        <div className="group__name__color">
                            <p className="select__color">Lựa chọn màu ngoại thất</p>
                            <ul>
                                {
                                    postData ? postData.map((item, index) => (
                                        <li onClick={() => setActive2(index) } className={active2 === index ? 'active' : ''} key={index} data={item.color} style={{backgroundColor: `${item.colorCode}`}}>{index}</li>
                                    )) : ''
                                }
                            </ul>
                            {
                                postData[active2] ? <div className='colorName'>{postData[active2].color}</div> : ''
                            }
                            <p className="select__color">Lựa chọn màu nội thất</p>
                            <ul>
                                <li className="active">
                                    <img src={thumb} alt="" />
                                </li>
                            </ul>
                            <div className="colorName">Da tiêu chuẩn</div>
                        </div>
                        <div className="detail__policy">
                            <Link to="/static/media/Bang-gia_T12-02.66e5bc95.jpg" target="_blank">
                                Chi tiết chính sách bán hàng
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="order__last">
                    <div className="vf__form">
                        <form action="" id=''>
                            <div className="row group-customer">
                                <div className="l-12 group__title">Thông tin khách hàng</div>
                                <div className="l-12">
                                    <div className="row">
                                        <div className="l-6 group__personal">
                                            <GroupInput handleChange={handleChangeName} label="Họ tên cá nhân"/>
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
            </div>
            <div className={show ? 'modal deposit__confirm show' : 'modal deposit__confirm'}>
                <div className="modal__content">
                    <div className="modal__content__header">
                        <h5 className='title'>Thông tin đặt hàng</h5>
                        <p>Quý khách vui lòng kiểm tra lại thông tin trước khi thực hiện thanh toán.</p>
                    </div>
                    <div className="modal__content__body">
                        <form action="" className='deposit__confirm' >
                            <div className="row group__info">
                                <h5 className="l-12">THÔNG TIN SẢN PHẨM</h5>
                                <div className="l-6">
                                    <div className="row group__item">
                                        <label htmlFor="" className="l-5">Mẫu xe</label>
                                        <div className="l-7">
                                            <label htmlFor="" className="l-7">{name[active]}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-6">
                                    <div className="row group__item">
                                        <label htmlFor="" className="l-5">Phiên bản</label>
                                        <div className="l-7">
                                            <label htmlFor="" className="l-7">TIÊU CHUẨN</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-6">
                                    <div className="row group__item">
                                        <label htmlFor="" className="l-5">Màu ngoại thất</label>
                                        <div className="l-7">
                                        {
                                            postData[active2] ? <label htmlFor="" className="l-7">{postData[active2].color}</label> : ''
                                        }
                                        </div>
                                    </div>
                                </div>
                                <div className="l-6">
                                    <div className="row group__item">
                                        <label htmlFor="" className="l-5">Màu nội thất</label>
                                        <div className="l-7">
                                            <label htmlFor="" className="l-7">Da Tiêu Chuẩn</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row group__info">
                                <h5 className="l-12">THÔNG TIN CÁ NHÂN</h5>
                                <div className="l-6">
                                    <div className="row group__item">
                                        <label htmlFor="" className="l-5">Họ tên</label>
                                        <div className="l-7">
                                            <label htmlFor="" className="l-7">{nameText}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-6">
                                    <div className="row group__item">
                                        <label htmlFor="" className="l-5">CMND/CCCD</label>
                                        <div className="l-7">
                                            <label htmlFor="" className="l-7">{cccd}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-6">
                                    <div className="row group__item">
                                        <label htmlFor="" className="l-5">Số điện thoại</label>
                                        <div className="l-7">
                                            <label htmlFor="" className="l-7">{phone}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-6">
                                    <div className="row group__item">
                                        <label htmlFor="" className="l-5">Email</label>
                                        <div className="l-7">
                                            <label htmlFor="" className="l-7">{email}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-6">
                                    <div className="row group__item">
                                        <label htmlFor="" className="l-5">Tỉnh thành</label>
                                        <div className="l-7">
                                            <label htmlFor="" className="l-7">{province}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-6">
                                    <div className="row group__item">
                                        <label htmlFor="" className="l-5">Mã giới thiệu</label>
                                        <div className="l-7">
                                            <label htmlFor="" className="l-7">{referralCode}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row group__info">
                                <h5 className="l-12">THÔNG TIN THANH TOÁN</h5>
                                <div className="l-6">
                                    <div className="row group__item">
                                        <label htmlFor="" className="l-5">Hình thức</label>
                                        <div className='l-7'>
                                            <label className="l-7">Thanh toán qua thẻ tín dụng</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-6">
                                    <div className="row group__item">
                                        <label htmlFor="" className="l-5">Số tiền đặt cọc</label>
                                        <div className='l-7'>
                                            <label className="l-7">{amountDeposit[active]} vnđ</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal__content__footer">
                        <button onClick={handleNone} className="btn">Thay đổi thông tin</button>
                        <button onClick={OnSubmit} className="btn">
                            <Link to='/'>Thanh toán</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

VinCarDetail.propTypes = {
    vincardeposit: ProtoTypes.object
}

export default VinCarDetail
