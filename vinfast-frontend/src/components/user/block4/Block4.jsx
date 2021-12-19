import React from 'react'
import { Link } from 'react-router-dom';
import ProtoTypes from 'prop-types'

import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css'

import './block4.scss'

const Block4 = props => {

    const data = props.data

    return (
        <div className="block4">
            <div className="block4__title">Xe máy điện</div>
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={0}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    autoplay={{delay: 5000}}
                    breakpoints={{
                        "360": {
                            "slidesPerView": 1,
                          },
                        "576": {
                          "slidesPerView": 1,
                        },
                        "768": {
                          "slidesPerView": 2,
                        },
                        "992": {
                          "slidesPerView": 3,
                        },
                        "1200": {
                            "slidesPerView": 4,
                          }
                    }}
                >
                    {
                        data.map((item, index) => (
                            <SwiperSlide  key={index}>
                                <Link to="/">
                                    <Block4Item item={item} />
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
        </div>
    )
}

Block4.prototype = {
    data: ProtoTypes.array.isRequired
}

const Block4Item = props => (
    <div className="info">
        <div className="img">
            <img src={props.item.img} alt="" />
            <div className="name">{props.item.name}</div>
        </div>
        <div className="info__body">
            <div className="info__body--slogan">{props.item.slogan}</div>
            <div className="info__body--descs">
                {
                    props.item.descs.map((desc, index) => (
                        <div key={index} className="info__body--desc">{desc}</div>
                    ))
                }
            </div>
        </div>
    </div>
)

export default Block4
