import React from 'react'

import { Link } from 'react-router-dom'

import Table from '../../admin/table/Table'

import productList from '../../../assets/JsonData/products-list.json'

const productTableHead = [
    '',
    'name',
    'description',
    'count',
    'image',
    'price',
    'action',
    ''
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.count}</td>
        <td style={{width: '10%'}}>
            <img src={item.image} alt="" />
        </td>
        <td>{item.price}</td>
        <td>
            <span className="badge badge-success">
                {item.action}
            </span>
        </td>
        <td>
            <i style={{fontSize: '1.6rem' ,padding: '1.5rem', cursor: 'pointer'}} className="fas fa-trash-alt"></i>
        </td>
    </tr>
)

const Products = () => {
    return (
        <div>
            <h2 className="page-header page-header--product">
                <p>Products</p>
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
                                bodyData={productList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
