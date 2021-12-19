import React, { useState } from 'react'

import { Link } from 'react-router-dom';

import './president4.scss'

const President4 = props => {

    const product = props.product;

    const dongCoCN2 = ['1. Động cơ 2.0 L - 228 HP', '2. Hộp số tự động ZF 8 cấp', '3. Khung gầm liền khối tiêu chuẩn Châu Âu', '4. Trợ lực lái thủy lực điều khiển điện', '5. ABS - Hệ thống chống bó cứng phanh', '6. Cảnh báo điểm mù', '7. EBD - Phân phối lực phanh điện tử', '8. BA - Hỗ trợ phanh khẩn cấp', '9. ESC - Hệ thống cân bằng điện tử', '10. ROM - Chức năng chống lật', '11. HSA - Hỗ trợ khởi hành ngang dốc', '12. HDC - Hỗ trợ đổ đèo', '13. Hệ thống túi khí']
    
    const [background, setBackground] = useState(product.image04[0])
    
    const [active, setActive] = useState(0);
    return (
        <section id="president-04">
            <div className="president__wrap">
                <div className="row">
                    <div className="l-8">
                        {/* <div style={{backgroundImage: `url(${background})`}}></div> */}
                        <img src={background} alt="" />
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
                                            product.image04.map((item, index) => (
                                                <li onClick={() => (setBackground(item), setActive(index))} key={index} className={`${index === active ? 'active' : ''}`}>{`${dongCoCN2[index]}`}</li>
                                            ))
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
