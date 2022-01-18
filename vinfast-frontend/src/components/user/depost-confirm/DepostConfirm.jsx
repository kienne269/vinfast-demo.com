import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import customerApi from '../../../api/depost/customerApi'
import './depost-confirm.scss'

const DepostConfirm = (props) => {

    const navigate = useNavigate();
    const params = props.params
    console.log(params)
    const createCustomer = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append("name", params.nameText)
        formData.append("phone", params.phone)
        formData.append("cccd", params.cccd)
        formData.append("email", params.email)
        formData.append("province", params.province)
        formData.append("referralCode", params.referralCode)
        formData.append("file", params.referralCode)
        formData.append("published_at", new Date())
        formData.append("order_id", "Nội dung chuyển khoản")
        formData.append("amount", 50000)
        formData.append("order_desc", "Thanh toán qua thẻ tín dụng")
        formData.append("language", "vn")
        try {
            const res = await axios.post("http://localhost/vinfast/vinfast-backend/api/deposit/vnpay_php/vnpay_create_payment.php", formData)
            // const res = await customerApi.create(formData)
            navigate(res.data.data)
            console.log(res.data)
        } catch(err) {
            console.log(err)
        }
    }
    
    return (
        <>
            <div className={props.show ? 'modal deposit__confirm show' : 'modal deposit__confirm'}>
                <div className="modal__content">
                    <div className="modal__content__header">
                        <h5 className='title'>Thông tin đặt hàng</h5>
                        <p>Quý khách vui lòng kiểm tra lại thông tin trước khi thực hiện thanh toán.</p>
                    </div>
                    <div className="modal__content__body">
                        <form className='deposit__confirm' id="create_form" method="post">
                            <div className="row group__info">
                                <h5 className="l-12">THÔNG TIN SẢN PHẨM</h5>
                                <div className="l-6">
                                    <div className="row group__item">
                                        <label htmlFor="" className="l-5">Mẫu xe</label>
                                        <div className="l-7">{props.nameCar}</div>
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
                                        <div className="l-7">{props.colorCar}</div>
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
                                            <label htmlFor="" className="l-7">{params.nameText}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-6">
                                    <div className="row group__item">
                                        <label htmlFor="" className="l-5">CMND/CCCD</label>
                                        <div className="l-7">
                                            <label htmlFor="" className="l-7">{params.cccd}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-6">
                                    <div className="row group__item">
                                        <label htmlFor="" className="l-5">Số điện thoại</label>
                                        <div className="l-7">
                                            <label htmlFor="" className="l-7">{params.phone}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-6">
                                    <div className="row group__item">
                                        <label htmlFor="" className="l-5">Email</label>
                                        <div className="l-7">
                                            <label htmlFor="" className="l-7">{params.email}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-6">
                                    <div className="row group__item">
                                        <label htmlFor="" className="l-5">Tỉnh thành</label>
                                        <div className="l-7">
                                            <label htmlFor="" className="l-7">{params.province}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-6">
                                    <div className="row group__item">
                                        <label htmlFor="" className="l-5">Mã giới thiệu</label>
                                        <div className="l-7">
                                            <label htmlFor="" className="l-7">{params.referralCode}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row group__info">
                                <h5 className="l-12">THÔNG TIN THANH TOÁN</h5>
                                <div className="l-6" style={{display: 'none'}}>
                                    <div className="row group__item">
                                        <label htmlFor="order_id" className="l-5">Mã hóa đơn</label>
                                        <input class="form-control" id="order_id" name="order_id" type="text" value={new Date()}/>
                                    </div>
                                </div>
                                <div className="l-6">
                                    <div className="row group__item">
                                        <label htmlFor="" className="l-5">Hình thức</label>
                                        <div className='l-7' name="order_desc">
                                            <label className="l-7">Thanh toán qua thẻ tín dụng</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="l-6">
                                    <div className="row group__item">
                                        <label htmlFor="" className="l-5">Số tiền đặt cọc</label>
                                        <div className='l-7' name="amount">{props.money}</div>
                                    </div>
                                </div>
                                <div className="l-6" style={{display: 'none'}}>
                                    <div className="row group__item">
                                        <label htmlFor="language" className="l-5">Số tiền đặt cọc</label>
                                        <select name="language" id="language" class="form-control">
                                            <option value="vn">Tiếng Việt</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal__content__footer">
                        <button onClick={props.handleNone} className="btn">Thay đổi thông tin</button>
                        <button onClick={createCustomer} className="btn">Thanh toán</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DepostConfirm
