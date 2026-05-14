import Navbar from '@/components/shared/Navbar';
import React from 'react';
import { montserrat } from '../layout';

export const metadata = {
    title: "Dragoon News | Register",
};

const AuthLayout = ({ children }) => {
    return (
        <div className={`${montserrat.className} m-5 md: m-0`}>
            <Navbar></Navbar>
            <main className='md:bg-base-300 h-full md:pt-10'>
                {children}
            </main>
        </div>
    );
};

export default AuthLayout;