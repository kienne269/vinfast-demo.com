import React, {useState, useEffect} from 'react'
import ProtoTypes from 'prop-types'
import axios from 'axios'
import { Link } from 'react-router-dom'

import OrderLast from '../order-last/OrderLast'

import './vin-car-deposit.scss'

import thumb from '../../../assets/images/thumb-MD04-PO21.jpg'
import bangGia from '../../../assets/images/Bang-gia_T12-02.jpg'
import lux_sa from '../../../assets/images/ldp-all-cars/LuxSA.jpg'
import lux_sa_active from '../../../assets/images/ldp-all-cars/LuxSA-highlight.jpg'
import lux_a from '../../../assets/images/ldp-all-cars/LuxA.jpg'
import lux_a_active from '../../../assets/images/ldp-all-cars/LuxA-highlight.jpg'
import president from '../../../assets/images/ldp-all-cars/President.jpg'
import president_active from '../../../assets/images/ldp-all-cars/President-highlight.jpg'
import vfe34 from '../../../assets/images/ldp-all-cars/VFe34.jpg'
import vfe34_active from '../../../assets/images/ldp-all-cars/VFe34-highlight.jpg'

import president1 from '../../../assets/images/president/black.png'
import president2 from '../../../assets/images/president/white.png'
import president3 from '../../../assets/images/president/purple.png'
import president4 from '../../../assets/images/president/gray.png'
import president5 from '../../../assets/images/president/silver.png'
import president6 from '../../../assets/images/president/brown.png'
import president7 from '../../../assets/images/president/orange.png'
import president8 from '../../../assets/images/president/blue.png'

import vfe34_1 from '../../../assets/images/vfe34/black.png'
import vfe34_2 from '../../../assets/images/vfe34/blue1.png'
import vfe34_3 from '../../../assets/images/vfe34/blue2.png'
import vfe34_4 from '../../../assets/images/vfe34/gray.png'
import vfe34_5 from '../../../assets/images/vfe34/silver.png'
import vfe34_6 from '../../../assets/images/vfe34/purple.png'
import vfe34_7 from '../../../assets/images/vfe34/red.png'
import vfe34_8 from '../../../assets/images/vfe34/blue.png'
import vfe34_9 from '../../../assets/images/vfe34/white.png'

import luxsaRed from '../../../assets/images/lux-sa/red.png'
import luxaWhite from '../../../assets/images/lux-a/white.png'
import fadilGray from '../../../assets/images/fadil/gray.png'
import vfe34Black from '../../../assets/images/vfe34/black.png'
import presidentBlack from '../../../assets/images/president/black.png'
const VinCarDetail = () => {

    const carFirst = [presidentBlack, luxsaRed, luxaWhite, fadilGray, vfe34Black]

    const [test, setTest] = useState([])
    const [container, setContainer] = useState([])
    const [postData, setPostData] = useState([])
    
    const name = ['president', 'lux-sa', 'lux-a', 'fadil', 'vfe34'];
    const nameTitle = ['PRESIDENT', 'LUX SA2.0', 'LUX A2.0', 'FADIL', 'VF e34'];
    const amountDeposit = ['100.000.000', '50,000.000', '50.000.000', '20.000.000', '10.000.000'];

    const [type, setType] = useState('lux-sa')

    useEffect(() => {
        axios.get(`http://localhost/vinfast/vinfast-backend/api/deposit/read_${type}.php`)
            .then(res => {
                const persons = res.data;
                setPostData( persons.data);
            })
            .catch(error => console.log(error));
                
    }, [type])

    useEffect(() => {
        axios.get('http://localhost/vinfast/vinfast-backend/api/deposit/readDepositContainer.php')
            .then(res => {
                const persons = res.data;
                setContainer( persons.data);
            })
            .catch(error => console.log(error));
    }, [])
    const [active, setActive] = useState(1);
    const [active2, setActive2] = useState(0);
    const [background, setBackground] = useState(carFirst[1])
    const [color, setColor] = useState(carFirst[1])

    const li = () => {
        return (
            <ul>
                <li class="active" data="Đỏ" style="background-color: rgb(199, 0, 0);">0</li>
                <li class="" data="Xanh" style="background-color: rgb(18, 42, 65);">1</li>
                <li class="" data="Xám" style="background-color: rgb(95, 99, 99);">2</li>
                <li class="" data="Bạc" style="background-color: rgb(153, 153, 153);">3</li>
                <li class="" data="Đen" style="background-color: rgb(0, 0, 0);">4</li>
                <li class="" data="Trắng" style="background-color: rgb(255, 255, 255);">5</li>
            </ul>
        )
    }
    
    return (
        <>
            <div className="vin__car__deposit">
                <ul className="vin__car__deposit__container">
                    {
                        container ? container.map((item, index) => (
                            <li 
                                onClick={
                                    () => (setBackground(carFirst[index]), setActive(index), setType(name[index]), setActive2(0))
                                } 
                                className={`${index === active ? 'active' : ''}`} 
                                key={index}>
                                    <img src={item.container} alt="" />
                                    <img src={item.containerActive} className="active" alt="" />
                                    <h2>{name[index]}</h2>
                            </li>
                        )) : null
                    }
                </ul>
                <div className="vin__car__deposit__detail row">
                    <div className="vin__car__deposit__detail--left l-6">
                        <img src={background} alt="" />
                    </div>
                    <div className="vin__car__deposit__detail--right l-6">
                        <div className="group__name__title">
                            <h3>{nameTitle[active]}</h3>
                            <div className="amount">
                                <span>Số tiền đặt cọc</span>
                                <span>{postData[active] ? postData[active].deposits : '50.000.000'} vnđ</span>
                            </div>
                        </div>
                        <div className="group__name__color">
                            <p className="select__color">Lựa chọn màu ngoại thất</p>
                            <ul>
                                {
                                    postData ? postData.map((item, index) => (
                                        <li onClick={() => (setActive2(index), setBackground(item.image)) } className={active2 === index ? 'active' : ''} key={index} data={item.color} style={{backgroundColor: `${item.colorCode}`}}>{index}</li>
                                    )) : li
                                }
                            </ul>
                            {
                                postData[active2] ? <div className='colorName'>{postData[active2].color}</div> : ''
                            }
                            <p className="select__color">Lựa chọn màu nội thất</p>
                            <ul>
                                <li className="active">
                                    <img src={thumb} alt="" />
                                </li>
                            </ul>
                            <div className="colorName">Da tiêu chuẩn</div>
                        </div>
                        <div className="detail__policy">
                            <Link to="/static/media/Bang-gia_T12-02.66e5bc95.jpg" target="_blank">
                                Chi tiết chính sách bán hàng
                            </Link>
                        </div>
                    </div>
                </div>
                
            </div>
            <OrderLast />
        </>
    )
}

VinCarDetail.propTypes = {
    vincardeposit: ProtoTypes.object
}

export default VinCarDetail
