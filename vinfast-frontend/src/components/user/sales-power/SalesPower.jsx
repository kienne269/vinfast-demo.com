import React from 'react'

import SwiperCore, {Autoplay, Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'; 

import bike_feliz from '../../../assets/images/bike/bike-feliz.jpg'
import bike_tempest from '../../../assets/images/bike/bike-tempest.jpg'

import klaras from '../../../assets/images/bike/klaras.png'
import feliz from '../../../assets/images/bike/feliz.png'
import bike_klara_a2 from '../../../assets/images/bike/bike-klara-a2.jpg'
import impres_red from '../../../assets/images/bike/impes-red.jpg'
import impres_blue from '../../../assets/images/bike/impres-blue.jpg'
import klara_s_black from '../../../assets/images/bike/klara-s-black.jpg'
import ludo_red from '../../../assets/images/bike/ludo-red.jpg'

import './sales-power.scss'

const SalesPower = () => {
    const list_bike = [klaras, feliz, bike_klara_a2, impres_red, impres_blue, klara_s_black, ludo_red]
    const img_new = [bike_tempest, bike_feliz];
    const name_new = ['TEMPEST', 'FELIZ']
    const price_new = ['19.250.000', '24.900.000']
    const name_hot = ['KLARA S - Xanh lục', 'FELIZ - Đỏ', 'KLARA A2 - 2021', 'IMPES - Xanh đậm', 'IMPES - Đỏ', 'KLARA S - Đen', 'LUDO - Đỏ']
    const price_hot = ['39.900.000', '24.900.000', '26.900.000', '14.900.000', '14.900.000', '39.900.000', '12.900.000']

    return (
        <div className='sales__power'>
            <div className="container">
                <div className="sales__power__new">
                    <h3 className='text-center'>Sản phẩm mới</h3>
                    <div className="row">
                        {
                            name_new.map((item, index) => (
                                <div className="l-6 m-6 c-12">
                                    <div className="container">
                                        <div className="img" key={index}>
                                            <img src={img_new[index]} alt={item} />
                                        </div>
                                        <div className="container">
                                            <div className="sales__power__new--price">
                                                <h4>{item}</h4>
                                                <p className="price">
                                                    {price_new[index]}
                                                    <span className='vnd'>vnđ</span>
                                                </p>
                                                <p className="desc">Giá đã bao gồm VAT</p>
                                            </div>
                                            <div className="sales__power__new--endow">
                                                <p className="power-text">Ưu đãi</p>
                                                <p className="power-text-price">Trả góp lãi suất 0%</p>
                                            </div>
                                            <div className="buy">
                                                <button className='btn'>Mua ngay</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="product">
                <div className="container">
                    <div className="sales__power__hot">
                        <h3 className='text-center'>Sản phẩm bán chạy</h3>
                        <Swiper
                            modules={[Autoplay]}
                            grabCursor={true}
                            spaceBetween={0}
                            slidesPerView={3}
                            autoplay={{delay: 3000}}
                            navigation
                        >
                            {
                                name_hot.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="container">
                                            <div className="img">
                                                <img src={list_bike[index]} alt="" width="100%"/>
                                            </div>
                                            <div className="container">
                                                <div className="sales__power__hot--price">
                                                    <h4 style={{flex: '0 0 100%'}}>{item}</h4>
                                                    <p className="desc">Giá bán</p>
                                                    <p className="price">
                                                        {price_hot[index]}
                                                        <span className='vnd'>vnđ</span>
                                                    </p>
                                                </div>
                                                <div className="sales__power__hot--endow">
                                                    <p className="power-text">Ưu đãi</p>
                                                    <p className="power-text-price">Trả góp lãi suất 0%</p>
                                                </div>
                                                <div className="buy">
                                                    <button className='btn'>Mua ngay</button>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalesPower
