import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {useNavigate} from 'react-router-dom'

import './product-detail.scss'
import { useParams } from 'react-router-dom'
const ProductDetail = () => {

    const { id } = useParams();

    const [productData, setProductData] = useState([])

    const getProductBySlug = (id) => productData.find(e => e.id === id)
    const product = getProductBySlug(id)
    useEffect(() => {
        
        axios.get('http://localhost/vinfast/vinfast-backend/api/admin/readProducts.php')
                .then(res => {
                    const persons = res.data;
                    setProductData( persons.data);
                })
                .catch(error => console.log(error));
                
    }, [])

    return (
        <div className='product__detail'>
            <div className="new__product--top">
                <h2 className="page-header">
                    Product Detail
                </h2>
            </div>
            <div className="form__create">
                <form className="formCreate" action="">
                    {
                        product ? <ProductInfo product={product} /> : ''
                    }
                </form>
            </div>
        </div>
    )
}

export default ProductDetail

const ProductInfo = ({product}) => {

    const navigate = useNavigate();

    const [idProduct, setIdProduct] = useState(product.id)
    const [name, setName] = useState(product.name)
    const [color, setColor] = useState(product.color)
    const [image, setImage] = useState(product.image)
    const [count, setCount] = useState(product.count)
    const [price, setPrice] = useState(product.price)
    const [deposits, setDeposits] = useState(product.deposits)

    const updateProduct = async (e) => {
        e.preventDefault();

        const params = {
            id: idProduct,
            name: name,
            color: color,
            image: image,
            count: count,
            price: price,
            deposits: deposits,
        }

        console.log(params)
        
        try {
            const res = await axios.post('http://localhost/vinfast/vinfast-backend/api/admin/updateProducts.php',params)
            navigate(`/admin/products`)
            console.log(res)
        } catch(err) {
            alert(err)
            console.log(err)
        }
        
    }

    const DeleteProduct = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.delete(`http://localhost/vinfast/vinfast-backend/api/admin/deleteProduct.php?id=${idProduct}`)
            navigate(`/admin/products`)
            console.log(res)
        } catch(err) {
            alert(err)
            console.log(err)
        }
    }
    
    return (
        <>
            <div className="row">
                <div className="l-6">
                    <div className="form-group">
                        <input value={idProduct } onChange={(e) => setIdProduct(e.target.value)} type="text" name="id" id="id" placeholder="Id product" />
                    </div>
                </div>
                <div className="l-6">
                    <div className="form-group">
                        <input value={name } onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder="Name" />
                    </div>
                </div>
                <div className="l-6">
                    <div className="form-group">
                        <input value={color } onChange={(e) => setColor(e.target.value)} type="text" name="color" id="color" placeholder="Color" />
                    </div>
                </div>
                <div className="l-6">
                    <div className="form-group">
                        <input value={image } onChange={(e) => setImage(e.target.value)} type="text" name="image" id="image" placeholder="Image" />
                    </div>
                </div>
                <div className="l-6">
                    <div className="form-group">
                        <input value={count } onChange={(e) => setCount(e.target.value)} type="text" name="count" id="count" placeholder="Count" />
                    </div>
                </div>
                <div className="l-6">
                    <div className="form-group">
                        <input value={price } onChange={(e) => setPrice(e.target.value)} type="text" name="price" id="price" placeholder="Price" />
                    </div>
                </div>
                <div className="l-6">
                    <div className="form-group">
                        <input value={deposits } onChange={(e) => setDeposits(e.target.value)} type="text" name="deposit" id="deposit" placeholder="Deposit" />
                    </div>
                </div>
            </div>
            <div className='btn'>
                <button onClick={updateProduct}>update</button>
                <button onClick={DeleteProduct}>Delete</button>
            </div>
        </>
    )
}
