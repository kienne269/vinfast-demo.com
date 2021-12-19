import React from 'react'
import ProtoTypes from 'prop-types'

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css'

import './block1.scss'

SwiperCore.use([Navigation, Pagination])

const Block1 = props => {

    const data = props.data

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
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Block1Item item={item} />
                        </SwiperSlide>
                    ))
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
            <img src={props.item.img} alt="" height="501px"/>
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
