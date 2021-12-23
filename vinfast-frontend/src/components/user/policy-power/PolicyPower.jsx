import React from 'react'

import policy from '../../../assets/images/policy.png'
import './policy-power.scss'
const PolicyPower = () => {
    return (
        <div className="policy__power text-center">
            <div className="container">
                <div className="title">CHÍNH SÁCH PIN LINH HOẠT - TIẾT KIỆM</div>
                <p className="desc">
                    Mua pin, thuê pin linh hoạt, tiết kiệm. Khách hàng linh hoạt lựa chọn hình thức mua pin
                    hoặc thuê pin ưu việt với gói thuê pin chỉ từ 149.000 vnđ/pin/tháng.
                </p>
                <div className="img">
                    <img src={policy} alt="policy" />
                </div>
                <div className="btn">
                    <button>Chính sách thuê pin</button>
                </div>
            </div>
        </div>
    )
}

export default PolicyPower
