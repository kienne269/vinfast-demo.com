import React, {useState, useEffect} from 'react'
import ProtoTypes from 'prop-types'

import axios from 'axios'

import ProductView from '../../user/product-view/ProductView'

import productData from '../../../assets/fake-data/products'
import { useParams } from 'react-router-dom'

const Product = props => {

    let params = useParams();

    const [productData, setProductData] = useState([])

    const getProductBySlug = (slug) => productData.find(e => e.slug === slug)
    const product = getProductBySlug(params.slug)

    useEffect(() => {
        
        axios.get('http://localhost/vinfast/vinfast-backend/api/readProduct.php')
                .then(res => {
                    const persons = res.data;
                    setProductData( persons.data);
                })
                .catch(error => console.log(error));
                
    }, [])
    console.log(productData)

    // let product = props.product
    console.log(product)

    // React.useEffect(() => {
    //     console.log(product)
    // }, [product])
    return (
        <div>
            <ProductView product={product}/>
        </div>
    )
}

export default Product
