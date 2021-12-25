import React, {useState, useEffect} from 'react'
import ProtoTypes from 'prop-types'

import axios from 'axios'

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css'

import './block1.scss'

import image1 from '../../../assets/images/block1/top_slide_1.png'
import image2 from '../../../assets/images/block1/top_slide_2.webp'
import image3 from '../../../assets/images/block1/top_slide_3.webp'
import image4 from '../../../assets/images/block1/top_slide_4.webp'
import image5 from '../../../assets/images/block1/top_slide_5.webp'

SwiperCore.use([Navigation, Pagination])

const Block1 = () => {

    const [block1Data, setBlock1Data] = useState([])

    useEffect(() => {
        
        axios.get('http://localhost/vinfast/vinfast-backend/api/home/readBlock1.php')
                .then(res => {
                    const persons = res.data;
                    setBlock1Data( persons.data);
                })
                .catch(error => console.log(error));
                
    }, [])

    return (
        <div className="block1">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                pagination={{ clickable: true }}
                slidesPerView={1}
                // autoplay={{delay: 3000}}
            >
                {
                    block1Data ? block1Data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Block1Item item={item} />
                        </SwiperSlide>
                    )) : null
                }
            </Swiper>
        </div>
    )
}

Block1.prototype = {
    data: ProtoTypes.array.isRequired
}

const Block1Item = props => (
    
    <div className="block1__item">
        <div className="block1__item__image">
            <img src={props.item.image} alt="" height="501px"/>
        </div>
        <div className="block1__item__info">
            <div className="block1__item__info--title">
                <span>{props.item.title}</span>
            </div>
            <div className="block1__item__info--description">
                <span>{props.item.description}</span>
            </div>
        </div>
    </div>
)

export default Block1
