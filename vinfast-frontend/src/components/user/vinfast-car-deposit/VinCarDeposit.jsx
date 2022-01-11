import React, {useState, useEffect} from 'react'
import ProtoTypes from 'prop-types'
import axios from 'axios'
import { Link } from 'react-router-dom'

import ThreeSixty from 'react-360-view'

import OrderLast from '../order-last/OrderLast'

import './vin-car-deposit.scss'

import thumb from '../../../assets/images/thumb-MD04-PO21.jpg'

import luxsaRed from '../../../assets/images/lux-sa/red.png'
import luxaWhite from '../../../assets/images/lux-a/white.png'
import fadilGray from '../../../assets/images/fadil/gray.png'
import vfe34Black from '../../../assets/images/vfe34/black.png'
import presidentBlack from '../../../assets/images/president/black.png'

const VinCarDetail = () => {

    const carFirst = [presidentBlack, luxsaRed, luxaWhite, fadilGray, vfe34Black]
    
    const [container, setContainer] = useState([])
    const [postData, setPostData] = useState([])
    const [allCar, setAllCar] = useState([])

    console.log(allCar)
    
    const name = ['president', 'lux-sa', 'lux-a', 'fadil', 'vfe34'];
    const nameTitle = ['PRESIDENT', 'LUX SA2.0', 'LUX A2.0', 'FADIL', 'VF e34'];

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
        
            axios.get('http://localhost/vinfast/vinfast-backend/api/deposit/readAll.php')
        .then(res => {
            const persons = res.data;
            setAllCar( persons.data);
        })
        .catch(error => console.log(error));
    }, [])

    const [active, setActive] = useState(1);
    const [active2, setActive2] = useState(0);
    const [background, setBackground] = useState(carFirst[1])

    const li = () => {
        return (
            <ul>
                <li className="active" data="Đỏ" style={{backgroundColor: 'rgb(199, 0, 0)'}}>0</li>
                <li className="" data="Xanh" style={{backgroundColor: 'rgb(18, 42, 65)'}}>1</li>
                <li className="" data="Xám" style={{backgroundColor: 'rgb(95, 99, 99)'}}>2</li>
                <li className="" data="Bạc" style={{backgroundColor: 'rgb(153, 153, 153)'}}>3</li>
                <li className="" data="Đen" style={{backgroundColor: 'rgb(0, 0, 0)'}}>4</li>
                <li className="" data="Trắng" style={{backgroundColor: 'rgb(255, 255, 255)'}}>5</li>
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
                        {/* <img src={background} alt="" /> */}
                        {
                            allCar ? allCar.map((item, index) => (
                                <div key={index} className={index === active2 ? `${item.color2} check` : `${item.color2}`}>
                                    <ThreeSixty
                                        amount={36}
                                        imagePath={`./images/${item.slug}`}
                                        fileName="{index}.png"
                                    />
                                </div>
                            )) : null
                        }
                        <div className="images-360">
                            <img src="http://localhost/vinfast/vinfast-backend/images/360/360-images.png" alt="" />
                        </div>
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
                            <Link to="http://localhost/vinfast/vinfast-backend/images/Bang-gia_T12-02.jpg" target="_blank">
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
