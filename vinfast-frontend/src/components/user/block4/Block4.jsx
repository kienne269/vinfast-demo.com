import React, {useState, useEffect} from 'react'
import ProtoTypes from 'prop-types'

import axios from 'axios'

import { Link } from 'react-router-dom';

import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css'

import './block4.scss'

import image1 from '../../../assets/images/vinfast-data-01/Theon_1624348475.webp'
import image2 from '../../../assets/images/vinfast-data-01/Feliz_1624348483.webp'
import image3 from '../../../assets/images/vinfast-data-01/KlaraS_1624348494.webp'
import image4 from '../../../assets/images/vinfast-data-01/Impes_1624348519.webp'
import image5 from '../../../assets/images/vinfast-data-01/Ludo_1624348528.webp'

const Block4 = () => {

    const [block4Data, setBlock4Data] = useState([])

    useEffect(() => {
        
        axios.get('http://localhost/vinfast/vinfast-backend/api/home/readBlock4.php')
                .then(res => {
                    const persons = res.data;
                    console.log(persons)
                    setBlock4Data( persons.data);
                })
                .catch(error => console.log(error));
                
    }, [])

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
                        block4Data.map((item, index) => (
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
            <img src={props.item.image} alt="" />
            <div className="name">{props.item.name}</div>
        </div>
        <div className="info__body">
            <div className="info__body--slogan">{props.item.slogan}</div>
            <div className="info__body--descs">
                <div className="info__body--desc">{props.item.description1}</div>
                <div className="info__body--desc">{props.item.description2}</div>
                <div className="info__body--desc">{props.item.description3}</div>
                <div className="info__body--desc">{props.item.description4}</div>
            </div>
        </div>
    </div>
)

export default Block4
