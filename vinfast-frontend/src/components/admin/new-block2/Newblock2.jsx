import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import productApi from '../../../api/admin/productApi'
import './new-block2.scss'
const NewProduct = () => {

    const navigate = useNavigate();

    const [idProduct, setIdProduct] = useState('')
    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')
    const [focus, setFocus] = useState(false)
    console.log(focus)
    const createProduct = async (e) => {
        e.preventDefault();

        const params = {
            id: idProduct,
            quote: quote,
            author: author,
        }
        try {
            const res = await productApi.createBlock2(params) 
            alert("Thêm thành công")
            navigate(`/admin/homeblock2`)
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
                    Create block
                </h2>
                <div className='btn'>
                    <button onClick={() => navigate('/admin/homeblock2')}>Cancel</button>
                    <button onClick={createProduct}>Create</button>
                </div>
            </div>
            <div className="form__create">
                <form className="formCreate" action="">
                    <div className="row">
                        <div className="l-6"> 
                            <div className="form-group">
                                <input onChange={(e) => setIdProduct(e.target.value)} type="text" name="id" id="id"  />
                                <div onClick={(e) => setFocus(!focus)} className={focus ? "label" : "label focus"}>Id block</div>
                            </div>
                        </div>
                        <div className="l-6">
                            <div className="form-group">
                                <input onChange={(e) => setQuote(e.target.value)} type="text" name="name" id="name" placeholder="Quote" />
                            </div>
                        </div>
                        <div className="l-6">
                            <div className="form-group">
                                <input onChange={(e) => setAuthor(e.target.value)} type="text" name="color" id="color" placeholder="Author" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewProduct
