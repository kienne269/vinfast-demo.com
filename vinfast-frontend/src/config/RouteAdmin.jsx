import React from 'react';

import { Route, Routes} from 'react-router-dom';

import Sidebar from '../components/admin/sidebar/Sidebar';
import TopNav from '../components/admin/topNav/TopNav';
import Customers from '../components/pages/admin/Customers';
import Dashboard from '../components/pages/admin/Dashboard';
import Account from '../components/pages/admin/Account';
import Products from '../components/pages/admin/Products';
import NewProduct from '../components/admin/new-product/NewProduct';
import ProductDetail from '../components/admin/product-detail/ProductDetail';

const RouteAdmin = () => {
    return (
        <>
        <div className='layout'>
            <Sidebar />
            <div className="layout__content">
                <TopNav />
                <div className="layout__content-main">        
                <Routes>
                    <Route exact path='/account' element={<Account />} />
                    <Route exact path='/customers' element={<Customers />} />
                    <Route exact path='/products' element={<Products />} />
                    <Route exact path='/products/:id' element={<ProductDetail />} />
                    <Route exact path='/products/newproduct' element={<NewProduct />} />
                    <Route exact path='/' element={<Dashboard />} />
                </Routes>
                </div>
            </div>  
        </div>
        </>
    )
}

export default RouteAdmin
