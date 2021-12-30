import React from 'react'

import { Link } from 'react-router-dom'

import thanksPage from '../../../assets/images/thanks-page.png'
import './depost-success.scss'
const DepostSuccess = () => {
    return (
        <div className="depost__cars">
            <div className="container">
                <div className='depost__success row'>
                    <div className="depost__success__left l-6">
                        <div className="img">
                            <img src={thanksPage} alt="thank-page" />
                        </div>
                    </div>
                    <div className="depost__success__right l-6">
                        <h2>Đặt hàng thành công</h2>
                        <p>
                            Kính gửi Quý khách  
                            <strong> Nguyễn Tiến Trung Kiên</strong>
                        </p>
                        <p style={{marginBottom: '15px'}}>
                            Cảm ơn Quý khách đã đặt mua xe VinFast tại Vinfastauto.com.
                            <br />
                            Chúng tôi xin thông báo tình trạng đơn hàng của Quý khách:
                        </p>
                        <p>
                            <strong>Đơn hàng: </strong>
                            <strong>VinFast LUX SA2.0</strong>
                        </p>
                        <p style={{marginBottom: '15px'}}>
                            <strong>Trạng thái đơn hàng: </strong>
                            <span style={{color: '#2c72c6', fontWeight: '600'}}>Đang xử lý</span>
                        </p>
                        <p>
                            <strong>Phiên bản: </strong>
                            <span>Tiêu Chuẩn</span>
                        </p>
                        <p>
                            <strong>Số tiền đặt cọc: </strong>
                            <span>50.000.000 đồng</span>
                        </p>
                        <p style={{marginBottom: '15px'}}>
                            <strong>Phương thức thanh toán: </strong>
                            <span>Chuyển khoản</span>
                        </p>
                        <p style={{marginBottom: '15px'}}>Chúng tôi sẽ cập nhật tình trạng đơn hàng của Quý khách trong thời gian sớm nhất.</p>
                        <p style={{marginBottom: '40px'}}>Trân trọng!</p>
                        <div className="group__button">
                            <Link to="/">Trở về trang chủ</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DepostSuccess
