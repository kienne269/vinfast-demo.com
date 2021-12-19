import React from 'react'
import { Link } from 'react-router-dom';
import ProtoTypes from 'prop-types'

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css'

import './block3.scss'

const Block3 = props => {

    const data = props.data

    return (
        <div className="block3">
            <div className="block3__title">Xe ô tô</div>
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={0}
                    pagination={{ clickable: true }}
                    slidesPerView={4}
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
                                <Link to={`/catalog/${item.slug}`}>
                                    <Block3Item item={item} />
                                </Link>
                            </SwiperSlide>
                        ))
                    }
            </Swiper>
        </div>
    )
}

Block3.prototype = {
    data: ProtoTypes.array.isRequired
}

const Block3Item = props => (
    <div className="info">
        <div className="info__body">
            <div className="info__body--dongxe">{props.item.dongxe}</div>
            <div className="info__body--slogan">{props.item.slogan}</div>
            <div className="info__body--name">{props.item.name}</div>
        </div>
        <img className="swiper-lazy swiper-lazy-loaded" src={props.item.logo} alt="" />
        <div className="info__body">
            <div className="info__body--body">
                {
                    props.item.descs.map((desc, index) => (
                        <div key={index} className="info__body--desc">{desc}</div>
                    ))
                }
            </div>
        </div>
        <div className="img">
            <div className="img__lienket">
                Chi tiết
                <img className="swiper-lazy swiper-lazy-loaded" src={props.item.logoVin} alt="" />
            </div>
            <img src={props.item.img} alt="" />
        </div>
    </div>
)

export default Block3
