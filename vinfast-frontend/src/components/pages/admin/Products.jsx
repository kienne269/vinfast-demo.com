import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Table from '../../admin/table/Table'

// import productList from '../../../assets/JsonData/products-list.json'
// import black from '../../../assets/images/360/lux-a/black.png'
// import blue from '../../../assets/images/360/lux-a/blue.png'
// import red from '../../../assets/images/360/lux-a/red.png'
// import silver from '../../../assets/images/360/lux-a/silver.png'
// import gray from '../../../assets/images/360/lux-a/gray.png'
// import gray1 from '../../../assets/images/360/fadil/gray.png'
// import red1 from '../../../assets/images/360/fadil/red.png'
// import blue1 from '../../../assets/images/360/fadil/blue.png'
// import silver1 from '../../../assets/images/360/fadil/silver.png'
// import white1 from '../../../assets/images/360/fadil/white.png'

const productTableHead = [
    '',
    'name',
    'color',
    'image',
    'count',
    'price',
    'deposits',
    'action',
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.color}</td>
        <td style={{width: '12%'}}>
            <img src={item.image} alt="" />
        </td>
        <td>{item.count}</td>
        <td>{item.price}</td>
        <td>{item.deposits}</td>
        <td>
            <Link to={`/admin/products/${item.id}`}>
                <i className="fas fa-external-link"></i>
                <span className="action">Detail</span>
            </Link>
        </td>
    </tr>
)

const Products = () => {

    const [productsData, setProductsData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost/vinfast/vinfast-backend/api/admin/readProducts.php')
            setProductsData(result.data.data);        
        }
        fetchData();
    }, [])
    return (
        <>
            <h2 className="page-header page-header--product">
                <p>Product list</p>
                <Link to="/admin/products/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </h2>
            <div className="row">
                <div className="l-12">
                    <div className="card">
                        <div className="card__body">
                            <Table 
                                limit='10'
                                headData={productTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={productsData}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
