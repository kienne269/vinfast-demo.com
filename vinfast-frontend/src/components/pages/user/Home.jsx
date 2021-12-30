import React from 'react'

import VinSlide from '../../user/vin-slide/VinSlide'
import Block1 from '../../user/block1/Block1'
import Block2 from '../../user/block2/Block2'
import Block3 from '../../user/block3/Block3'
import Block4 from '../../user/block4/Block4'
// import RegisterSuccess from '../../user/register-success/RegisterSuccess'

// import black from '../../../assets/images/vfe34/black.png'
// import blue from '../../../assets/images/vfe34/blue.png'
// import blue1 from '../../../assets/images/vfe34/blue1.png'
// import blue2 from '../../../assets/images/vfe34/blue2.png'
// import gray from '../../../assets/images/vfe34/gray.png'
// import silver from '../../../assets/images/vfe34/silver.png'
// import white from '../../../assets/images/vfe34/white.png'
// import red from '../../../assets/images/vfe34/red.png'

// import product_02_image_04_1 from '../../../assets/images/lux-sa/4.1.jpg'
// import product_02_image_04_2 from '../../../assets/images/lux-sa/4.2.jpg'
// import product_02_image_04_3 from '../../../assets/images/lux-sa/4.3.jpg'
// import product_02_image_04_4 from '../../../assets/images/lux-sa/4.4.jpg'
// import product_02_image_04_5 from '../../../assets/images/lux-sa/4.5.jpg'
// import product_02_image_04_6 from '../../../assets/images/lux-sa/4.6.jpg'
// import product_02_image_04_7 from '../../../assets/images/lux-sa/4.7.jpg'
// import product_02_image_04_8 from '../../../assets/images/lux-sa/4.8.jpg'
// import product_02_image_04_9 from '../../../assets/images/lux-sa/4.9.jpg'
// import product_02_image_04_10 from '../../../assets/images/lux-sa/4.10.jpg'
// import product_02_image_04_11 from '../../../assets/images/lux-sa/4.11.jpg'
// import product_02_image_04_12 from '../../../assets/images/lux-sa/4.12.jpg'
// import product_02_image_04_13 from '../../../assets/images/lux-sa/4.13.jpg'
const Home = () => {
    return (
        <>
            <VinSlide />
            <div className="container">
                <Block1 />
            </div>
            <Block2 />
            <Block3 />
            <Block4 />
            {/* <RegisterSuccess /> */}
        </>
    )
}

export default Home
