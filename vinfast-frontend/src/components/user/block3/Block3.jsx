import React, {useState, useEffect} from 'react'
import ProtoTypes from 'prop-types'

import axios from 'axios'

import { Link } from 'react-router-dom';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css'

import logoTitle from '../../../assets/images/vinfast-data-01/bg-title-car.png'
import logoVin from '../../../assets/images/vinfast/logo_gray.svg'

import './block3.scss'

import image1 from '../../../assets/images/vinfast-data-01/VFe34_1624348575.webp'
import image2 from '../../../assets/images/vinfast-data-01/LuxSA_1624348590.webp'
import image3 from '../../../assets/images/vinfast-data-01/LuxA_1624348606.webp'
import image4 from '../../../assets/images/vinfast-data-01/Fadil_1624348615.webp'
import image5 from '../../../assets/images/vinfast-data-01/president.webp'
import image6 from '../../../assets/images/vinfast/logo_gray.svg'

const Block3 = () => {

    const [block3Data, setBlock3Data] = useState([])

    useEffect(() => {
        
        axios.get('http://localhost/vinfast/vinfast-backend/api/home/readBlock3.php')
                .then(res => {
                    const persons = res.data;
                    setBlock3Data( persons.data);
                })
                .catch(error => console.log(error));
                
    }, [])

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
                        block3Data ? block3Data.map((item, index) => (
                            <SwiperSlide  key={index}>
                                <Link to={`/catalog/${item.slug}`}>
                                    <Block3Item item={item} />
                                </Link>
                            </SwiperSlide>
                        )) : null
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
        <img className="swiper-lazy swiper-lazy-loaded" src={logoTitle} alt="" />
        <div className="info__body">
            <div className="info__body--body">
                <div className="info__body--desc">{props.item.description1}</div>
                <div className="info__body--desc">{props.item.description2}</div>
                <div className="info__body--desc">{props.item.description3}</div>
                <div className="info__body--desc">{props.item.description4}</div>
            </div>
        </div>
        <div className="img">
            <div className="img__lienket">
                Chi tiết
                <img className="swiper-lazy swiper-lazy-loaded" src={logoVin} alt="" />
            </div>
            <img src={props.item.image} alt="" />
        </div>
    </div>
)

export default Block3
