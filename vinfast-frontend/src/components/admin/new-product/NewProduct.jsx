import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './new-product.scss'
import productApi from '../../../api/admin/productApi'
const NewProduct = () => {

    const navigate = useNavigate();

    const [idProduct, setIdProduct] = useState('')
    const [name, setName] = useState('')
    const [color, setColor] = useState('')
    const [image, setImage] = useState('')
    const [count, setCount] = useState('')
    const [price, setPrice] = useState('')
    const [deposts, setDeposts] = useState('')
    const [focus, setFocus] = useState(false)
    console.log(focus)
    const createProduct = async (e) => {
        e.preventDefault();

        const params = {
            id: idProduct,
            name: name,
            color: color,
            image: image,
            count: count,
            price: price,
            deposts: deposts,
        }
        try {
            const res = await axios.post('http://localhost/vinfast/vinfast-backend/api/admin/createProducts.php',params)
            navigate(`/admin/products`)
            console.log(res)
        } catch(err) {
            alert(err)
            console.log(err)
        }
        
    }

    return (
        <div className='new__product'>
            <div className="new__product--top">
                <h2 className="page-header">
                    Create product
                </h2>
                <div className='btn'>
                    <button onClick={() => navigate('/admin/products')}>Cancel</button>
                    <button onClick={createProduct}>Create</button>
                </div>
            </div>
            <div className="form__create">
                <form className="formCreate" action="">
                    <div className="row">
                        <div className="l-6">
                            <div className="form-group">
                                <input onChange={(e) => setIdProduct(e.target.value)} type="text" name="id" id="id"  />
                                <div onClick={(e) => setFocus(!focus)} className={focus ? "label" : "label focus"}>Id product</div>
                            </div>
                        </div>
                        <div className="l-6">
                            <div className="form-group">
                                <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder="Name" />
                            </div>
                        </div>
                        <div className="l-6">
                            <div className="form-group">
                                <input onChange={(e) => setColor(e.target.value)} type="text" name="color" id="color" placeholder="Color" />
                            </div>
                        </div>
                        <div className="l-6">
                            <div className="form-group">
                                <input onChange={(e) => setImage(e.target.value)} type="text" name="image" id="image" placeholder="Image" />
                            </div>
                        </div>
                        <div className="l-6">
                            <div className="form-group">
                                <input onChange={(e) => setCount(e.target.value)} type="text" name="count" id="count" placeholder="Count" />
                            </div>
                        </div>
                        <div className="l-6">
                            <div className="form-group">
                                <input onChange={(e) => setPrice(e.target.value)} type="text" name="price" id="price" placeholder="Price" />
                            </div>
                        </div>
                        <div className="l-6">
                            <div className="form-group">
                                <input onChange={(e) => setDeposts(e.target.value)} type="text" name="deposts" id="deposts" placeholder="Deposts" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewProduct
