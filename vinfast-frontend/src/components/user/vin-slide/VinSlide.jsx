import React from 'react'

import SwiperCore, {Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'; 

import './vin-slide.scss';

import Slide1 from '../../../assets/images/Slide/1.png'
import Slide2 from '../../../assets/images/Slide/2.png'
import Slide3 from '../../../assets/images/Slide/3.png'
import Slide4 from '../../../assets/images/Slide/4.png'
import Slide5 from '../../../assets/images/Slide/5.png'

const Slides = [Slide1, Slide2, Slide3, Slide4, Slide5]

const VinSlide = () => {

    SwiperCore.use([Autoplay]);

    return (
        <div className="vinfast-slide">
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                // autoplay={{delay: 3000}}
            >
                {
                    Slides.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="vinfast-slide__item">
                                <img src={item} alt="" />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="sr-mb">
                <div className="slide__content">
                    <div className="slide__title">
                        <h2>
                            Cùng bạn
                            <br />
                            bứt phá mọi giới hạn
                        </h2>
                    </div>
                    <div className="slide__des">
                        <p>Vượt tầm nhìn toàn cầu, VinFast sáng tạo không ngừng nghỉ 
                            để mang lại những sản phẩm đẳng cấp, trải nghiệm thông 
                            minh và giá trị vượt trội cho khách hàng.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VinSlide
