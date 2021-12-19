import React from 'react'

import VinSlide from '../../user/vin-slide/VinSlide'
import Block1 from '../../user/block1/Block1'
import Block2 from '../../user/block2/Block2'
import Block3 from '../../user/block3/Block3'
import Block4 from '../../user/block4/Block4'
import Block1Data from '../../../assets/fake-data/block1-data'
import Block2Data from '../../../assets/fake-data/block2-data'
import OToData from '../../../assets/fake-data/oto-data'
import XeMayDienData from '../../../assets/fake-data/xemaydien-data'


const Home = () => {
    return (
        <>
            <VinSlide />
            <div className="container">
                <Block1 data={Block1Data}/>
            </div>
            <Block2 data={Block2Data}/>
            <Block3 data={OToData}/>
            <Block4 data={XeMayDienData}/>
        </>
    )
}

export default Home
