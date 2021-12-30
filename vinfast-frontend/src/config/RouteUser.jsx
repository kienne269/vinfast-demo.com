import React from 'react';

import { Route, Routes} from 'react-router-dom';

import Header from '../components/user/header/Header';
import Footer from '../components/user/footer/Footer';
import Home from '../components/pages/user/Home';
import Car from '../components/pages/user/Car';
import Bike from '../components/pages/user/Bike';
import Service from '../components/pages/user/Service';
import Blog from '../components/pages/user/Blog';
import Login from '../components/login/Login';
import Signin from '../components/signin/Signin';
import Product from '../components/pages/user/Product';
import DepostSuccess from '../components/user/depost-success/DepostSuccess';

const RouteUser = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/vinfast-cars-deposit' element={<Car />} />
                <Route path='/vinfast-bike' element={<Bike />} />
                <Route path='/uu-dai' element={<Service />} />
                <Route path='dich-vu' element={<Service />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signin' element={< Signin/>} />
                <Route path='/dat-coc' element={<DepostSuccess />} />
                <Route path='/catalog/:slug' element={<Product  />} />
                <Route path='/' element={<Home />} />
            </Routes>
            <Footer />
        </>
    )
}

export default RouteUser
