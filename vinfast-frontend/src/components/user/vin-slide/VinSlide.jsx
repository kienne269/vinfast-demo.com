import React, {useState, useEffect} from 'react'

import axios from 'axios'

import SwiperCore, {Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'; 

import './vin-slide.scss';

import image1 from '../../../assets/images/Slide/1.png'
import image2 from '../../../assets/images/Slide/2.png'
import image3 from '../../../assets/images/Slide/3.png'
import image4 from '../../../assets/images/Slide/4.png'
import image5 from '../../../assets/images/Slide/5.png'


const VinSlide = () => {

    const [bannerData, setBannerData] = useState([])

    useEffect(() => {
        
        axios.get('http://localhost/vinfast/vinfast-backend/api/home/readBanner.php')
                .then(res => {
                    const persons = res.data;
                    console.log(persons)
                    setBannerData( persons.data);
                })
                .catch(error => console.log(error));

        const handleScroll = () => {
            if (window.scrollY > 0) {
                
            }
        }
                
    }, [])

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
                    bannerData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="vinfast-slide__item">
                                <img src={item.banner} alt="" width="100%"/>
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
