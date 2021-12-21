//Vin-cars-container

const president = require('../images/ldp-all-cars/President.jpg').default
const presidentActive = require('../images/ldp-all-cars/President-highlight.jpg').default

const lux__sa = require('../images/ldp-all-cars/LuxSA.jpg').default
const lux__saActive = require('../images/ldp-all-cars/LuxSA-highlight.jpg').default

const lux__a = require('../images/ldp-all-cars/LuxA.jpg').default
const lux__aActive = require('../images/ldp-all-cars/LuxA-highlight.jpg').default

const fadil = require('../images/ldp-all-cars/Fadil.jpg').default
const fadilActive = require('../images/ldp-all-cars/Fadil-highlight.jpg').default

const vfe34 = require('../images/ldp-all-cars/VFe34.jpg').default
const vfe34Active = require('../images/ldp-all-cars/VFe34-highlight.jpg').default

//Vin-cars-detail

const president__purple = require('../images/360/president/purple.png').default
const lux__sa__red = require('../images/360/lux-sa/red.png').default
const lux__a__white = require('../images/360/lux-a/white.png').default
const fadil__gray = require('../images/360/fadil/gray.png').default
const vfe34__black = require('../images/360/vfe34/black.png').default

const vinCarDeposit = [
    {
        title: 'President',
        tienCoc: '100.000.000vnđ',
        carContainer : president,
        carContainerActive : presidentActive,
        cardetail: president__purple
    },
    {
        title: 'Lux SA2.0',
        tienCoc: '50.000.000vnđ',
        carContainer : lux__sa,
        carContainerActive : lux__saActive,
        cardetail: lux__sa__red
    },
    {
        title: 'Lux A2.0',
        tienCoc: '50.000.000vnđ',
        carContainer : lux__a,
        carContainerActive : lux__aActive,
        cardetail: lux__a__white
    },
    {
        title: 'Fadil',
        tienCoc: '20.000.000vnđ',
        carContainer : fadil,
        carContainerActive : fadilActive,
        cardetail: fadil__gray
    },
    {
        title: 'VFe34',
        tienCoc: '10.000.000vnđ',
        carContainer : vfe34,
        carContainerActive : vfe34Active,
        cardetail: vfe34__black
    },
]

export default vinCarDeposit
