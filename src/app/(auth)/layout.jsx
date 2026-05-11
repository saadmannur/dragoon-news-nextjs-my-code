import Navbar from '@/components/shared/Navbar';
import React from 'react';
import { montserrat } from '../layout';

export const metadata = {
    title: "Dragoon News | Register",
};

const AuthLayout = ({ children }) => {
    return (
        <div className={`${montserrat.className}`}>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default AuthLayout;