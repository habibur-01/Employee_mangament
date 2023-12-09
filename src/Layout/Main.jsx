import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../SharedComponent/Navbar/Navbar';
import Footer from '../SharedComponent/Footer/Footer';
import SubMenubar from '../SharedComponent/SubMenu/SubMenubar';

const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>
            {noHeaderFooter || <SubMenubar></SubMenubar>}
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;