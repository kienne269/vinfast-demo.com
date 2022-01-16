import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import productApi from '../../../api/admin/productApi'

import './product-detail.scss'
const ProductDetail = () => {

    const { id } = useParams();

    const [productData, setProductData] = useState("")
    useEffect(() => {
        const getProductApi = async () => {
            try {
                const res = await productApi.getOne(id)
                setProductData(res)
            } catch(err) {
                console.log(err)
            }
        }
        getProductApi()
                
    }, [id])

    console.log(productData)
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
                        productData ? <ProductInfo product={productData} /> : null
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

    console.log(name)
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
        const updateProductApi = async () => {
            try {
                const res = await productApi.update(params)
                alert("Cập nhật thành công")
                navigate(`/admin/products`)
                console.log(res)
            } catch(err) {
                console.log(err)
            }
        }
        updateProductApi()
    }

    const DeleteProduct = async (e) => {
        e.preventDefault();
        try {
            const res = await productApi.delete(idProduct)
            alert("Xóa thành công")
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
                        <input disabled value={idProduct } type="text" name="id" id="id" placeholder="Id product" />
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
