import React from 'react'

import banner from '../../../assets/images/banner/Banner-all-car-VN.jpg'

import './vin-car-banner.scss'
const VinCarBanner = () => {
    return (
        <div className="vinfast__car__banner">
            <img src={banner} alt="Banner Vinfast Car" />
        </div>
    )
}

export default VinCarBanner
