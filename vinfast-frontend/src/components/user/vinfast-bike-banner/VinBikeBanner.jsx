import React from 'react'
import banner from '../../../assets/images/Slide/3.png'

import pay from '../../../assets/images/bike/pay.png'
import sales from '../../../assets/images/bike/sales.png'
import car from '../../../assets/images/bike/car.png'

import './vin-bike-banner.scss'
const VinBikeBanner = () => {
    return (
        <div className='vinfast__bike__banner'>
            <img src={banner} alt="banner"/>
            <div className="table">
                <div className="container">
                    <div className="row">
                        <div className="text-center l-4 m-4 c-12">
                            <img src={pay} alt="pay" />
                            <p className='col-text'>
                                <span className='color-blue'>Thanh toán</span>
                                <br />
                                Khi nhận xe
                            </p>
                        </div>
                        <div className="text-center l-4 m-4 c-12">
                            <img src={sales} alt="sales" />
                            <p className='col-text'>
                                Ưu đãi trả góp
                                <br />
                                <span className='color-blue'>Lãi xuất 0%</span>
                            </p>
                        </div>
                        <div className="text-center l-4 m-4 c-12">
                            <img src={car} alt="" />
                            <p className='col-text'>
                                Nhận xe tại hệ thống showroom
                                <br />
                                <span className='color-blue'>Trên toàn quốc</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VinBikeBanner
