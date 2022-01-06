import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './president4.scss'
import first from '../../../assets/images/lux-sa/4.1.jpg'


const President4 = props => {

    const product = props.product;
    
    
    const [president4, setPresident4] = useState([]);
    const [active, setActive] = useState(0);
    
    const [background, setBackground] = useState()
    useEffect(() => {
        axios.get('http://localhost/vinfast/vinfast-backend/api/readPresident4.php')
            .then(res => {
                const persons = res.data;
                setPresident4( persons.data);
            })
            .catch(error => console.log(error));
    }, [])

    console.log(president4)
    console.log(background)
    return (
        <section id="president-04">
            <div className="president__wrap">
                <div className="row">
                    <div className="l-8">
                        {/* <div style={{backgroundImage: `url(${background})`}}></div> */}
                        <img src={background || first} alt="" />
                    </div>
                    <div className="l-4">
                        <div className="container">
                            <div className="row">
                                <div className="l-12">
                                    <div className="group__title">
                                        <h3>ĐỘNG CƠ & CÔNG NGHỆ</h3>
                                        <h2>{product.dongCoCN}</h2>
                                        <p>{product.dongCoCN1}</p>
                                    </div>
                                </div>
                                <div className="l-12">
                                    <ul>
                                        {
                                            president4 ? president4.map((item, index) => (
                                                <li onClick={() => (setBackground(item.image), setActive(index))} key={index} className={`${index === active ? 'active' : ''}`}>{`${item.dongCo}`}</li>
                                            )) : null
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default President4
