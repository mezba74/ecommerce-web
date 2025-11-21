import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Fotter from '../Components/Fotter';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default RootLayout;