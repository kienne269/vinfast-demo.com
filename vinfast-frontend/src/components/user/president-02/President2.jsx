import React, {useState, useEffect} from 'react'

import { Link } from 'react-router-dom';

import './president2.scss'


const President2 = props => {

    const product = props.product;
    console.log(product.image02[0])
    
    const [background, setBackground] = useState(product.image02[0])
    const [active, setActive] = useState(0);
    return (
        <section id="president-02">
            <div className="president__wrap">
                <div className="president__wrap__info">
                    <div className="container">
                        <div className="row">
                            <div className="l-12">
                                <div className="president__wrap__info--group">
                                    <div className="parameter">
                                        <span>Động cơ BMW</span>
                                        {product.dongcoBMW}
                                    </div>
                                    <div className="parameter">
                                        <span>Công suất</span>
                                        {product.congSuat}
                                    </div>
                                    <div className="parameter">
                                        <span>Hộp số tự động</span>
                                        {product.hopSo}
                                    </div>
                                </div>
                                <div className="img">
                                    <img src={background} alt="" />
                                </div>
                                <div className="president__wrap__info--color">
                                    <div className="label">Chọn màu xe</div>
                                    <ul>
                                        {
                                            product.image02.map((item, index) => (
                                                <li onClick={() => (setBackground(item), setActive(index))} key={index} className={`${index === active ? 'active' : ''}`}></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="president__wrap__info--bottom">
                        <div className="container">
                            <div className="row">
                                <div className="l-5">
                                    <div className="group-title">
                                        <h3>Thiết kế ngoại thất</h3>
                                        <h2>
                                            {product.thietKeNgoaiThat}
                                            <br />
                                            {product.thietKeNgoaiThat2}
                                        </h2>
                                    </div>
                                </div>
                                <div className="l-7">
                                    <p>{product.thietKeNgoaiThat3}</p>
                                    <div className="group__button">
                                        <Link to="/">Mua ngay</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default President2
