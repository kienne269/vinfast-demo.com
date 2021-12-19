import React from 'react'
import ProtoTypes from 'prop-types'

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css'

import './block2.scss';

const Block2 = props => {

    const data = props.data

    return (
        <div className='block2'>
            <div className="block2__title">
                <h2>Hành trình chinh phục thế giới</h2>
            </div>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                pagination={{ clickable: true }}
                slidesPerView={1}
                // autoplay={{delay: 3000}}
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Block2Item item={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

Block2.prototype = {
    data: ProtoTypes.array.isRequired
}

const Block2Item = props => (
    <div className="block2__item">
        <div className="block2__item__quote">{props.item.quote}</div>
        <div className="block2__item__author">{props.item.author}</div>
    </div>
)

export default Block2
