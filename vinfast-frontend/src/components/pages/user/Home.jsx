import React from 'react'

import VinSlide from '../../user/vin-slide/VinSlide'
import Block1 from '../../user/block1/Block1'
import Block2 from '../../user/block2/Block2'
import Block3 from '../../user/block3/Block3'
import Block4 from '../../user/block4/Block4'
import RegisterSuccess from '../../user/register-success/RegisterSuccess'

import image1 from '../../../assets/images/lux-sa/red.png'
import image2 from '../../../assets/images/lux-sa/gray.png'
import image3 from '../../../assets/images/lux-sa/blue.png'
import image4 from '../../../assets/images/lux-sa/silver.png'
import image5 from '../../../assets/images/lux-sa/black.png'
import image6 from '../../../assets/images/lux-sa/white.png'

const Home = () => {

    console.log(image4)
    console.log(image5)
    console.log(image6)

    return (
        <>
            <VinSlide />
            <div className="container">
                <Block1 />
            </div>
            <Block2 />
            <Block3 />
            <Block4 />
            <RegisterSuccess />
        </>
    )
}

export default Home
