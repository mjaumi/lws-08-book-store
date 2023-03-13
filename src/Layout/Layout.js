import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const Layout = ({ children }) => {

    // the web application layout is defined here
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default Layout;