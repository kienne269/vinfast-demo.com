import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import customerApi from '../../../api/depost/customerApi'
import './depost-confirm.scss'

const DepostConfirm = (props) => {

    console.log(props)
    const params = props.params
    const createCustomer = async (e) => {
        e.preventDefault();
        const obj = {
            nameText: params.nameText,
            phone: params.phone,
            cccd: params.cccd,
            email: params.email,
            province: params.province,
            referralCode: params.referralCode,
        }
        try {
            const res = await customerApi.create(obj)
            // navigate(`/admin/products`)
            console.log(res)
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
                        <form action="" className='deposit__confirm' >
                            <div className="row group__info">
                                <h5 className="l-12">THÔNG TIN SẢN PHẨM</h5>
                                <div className="l-6">
                                    <div className="row group__item">
                                        <label htmlFor="" className="l-5">Mẫu xe</label>
                                        <div className="l-7">
                                            {/* <label htmlFor="" className="l-7">{name[active]}</label> */}
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
                                            // postData[active2] ? <label htmlFor="" className="l-7">{postData[active2].color}</label> : ''
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
                                            {/* <label className="l-7">{amountDeposit[active]} vnđ</label> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal__content__footer">
                        <button onClick={props.handleNone} className="btn">Thay đổi thông tin</button>
                        <button onClick={createCustomer} className="btn">
                            <Link to='/'>Thanh toán</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DepostConfirm
