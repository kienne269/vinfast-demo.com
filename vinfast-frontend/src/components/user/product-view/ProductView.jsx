import React from 'react'
import PropTypes from 'prop-types'

// import { useDispatch } from 'react-redux'

import { Swiper, SwiperSlide } from 'swiper/react';

import President1 from '../president-01/President1'
import President2 from '../president-02/President2'
import President3 from '../president-03/President3'
import President4 from '../president-04/President4'
import President5 from '../president-05/President5'
import President6 from '../president-06/President6'

import './product-view.scss';


const ProductView = props => {

    // const dispatch = useDispatch()

    let product = props.product

    if (product === undefined) product = {
        title: "",
        price: '',
        image01: null,
        image02: null,
        categorySlug: "",
        colors: [],
        slug: "",
        size: [],
        description: ""
    }

    return (
        <div id="product">
            <div className="product__title">{product.title}</div>
            <Swiper>
                <SwiperSlide>
                    <President1 product={product}/>
                </SwiperSlide>
                <SwiperSlide>
                    <President2 product={product}/>
                </SwiperSlide>
                <SwiperSlide>
                    <President3 product={product}/>
                </SwiperSlide>
                <SwiperSlide>
                    <President4 product={product}/>
                </SwiperSlide>
                <SwiperSlide>
                    <President5 product={product}/>
                </SwiperSlide>
                <SwiperSlide>
                    <President6 product={product}/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object
}

export default ProductView