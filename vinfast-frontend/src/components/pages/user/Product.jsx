import React from 'react'

import ProductView from '../../user/product-view/ProductView'

import productData from '../../../assets/fake-data/products'
import { useParams } from 'react-router-dom'

const Product = props => {

    let params = useParams();

    const product = productData.getProductBySlug(params.slug)
    console.log(product)

    const relatedProducts = productData.getProducts(10)

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
