import React from 'react';

import { Route, Routes} from 'react-router-dom';

import Sidebar from '../components/admin/sidebar/Sidebar';
import TopNav from '../components/admin/topNav/TopNav';
import Customers from '../components/pages/admin/Customers';
import Dashboard from '../components/pages/admin/Dashboard';
import Products from '../components/pages/admin/Products';

const RouteAdmin = () => {
    return (
        <>
        <div className='layout'>
            <Sidebar />
            <div className="layout__content">
                <TopNav />
                <div className="layout__content-main">        
                <Routes>
                    <Route exact path='/customers' element={<Customers />} />
                    <Route exact path='/products' element={<Products />} />
                    <Route exact path='/' element={<Dashboard />} />
                </Routes>
                </div>
            </div>  
        </div>
        </>
    )
}

export default RouteAdmin
