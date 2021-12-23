import React from 'react'

import VinCarBanner from '../../user/vinfast-car-banner/VinCarBanner'
import VinCarDeposit from '../../user/vinfast-car-deposit/VinCarDeposit'
const Car = () => {

    return (
        <>
            <div className='page__deposit'>
                <VinCarBanner />
                <VinCarDeposit  />
            </div>
        </>
    )
}

export default Car
