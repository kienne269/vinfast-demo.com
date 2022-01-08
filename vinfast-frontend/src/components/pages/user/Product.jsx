import React, {useState, useEffect} from 'react'
import ProtoTypes from 'prop-types'

import axios from 'axios'

import ProductView from '../../user/product-view/ProductView'

import { useParams } from 'react-router-dom'

const Product = props => {

    let params = useParams();

    const [productData, setProductData] = useState([])

    const getProductBySlug = (slug) => productData.find(e => e.slug === slug)
    const product = getProductBySlug(params.slug)

    const [president2, setPresident2] = useState([])

    useEffect(() => {
        
        axios.get(`http://localhost/vinfast/vinfast-backend/api/deposit/read_${params.slug}.php`)
            .then(res => {
                const persons = res.data;
                setPresident2( persons.data);
            })
            .catch(error => console.log(error));
        
        axios.get('http://localhost/vinfast/vinfast-backend/api/readProduct.php')
            .then(res => {
                const persons = res.data;
                setProductData( persons.data);
            })
            .catch(error => console.log(error));
                    
    }, [])
    return (
        <div>
            <ProductView product={product} president2 = {president2}/>
        </div>
    )
}

export default Product
