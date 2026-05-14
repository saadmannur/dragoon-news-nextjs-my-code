import React from 'react';
import NavLink from './NavLink';
import AuthSection from '../authSection/AuthSection';


const Navbar = () => {
    return (
        <div className='flex justify-between items-center mt-10 container mx-auto border-b border-gray-200 py-5'>
            <div className='hidden md:block'>

            </div>
            <div className='hidden md:block'>
                <ul className='flex justify-center items-center gap-3 text-gray-500'>
                    <li><NavLink href={"/"}>Home</NavLink></li>
                    <li><NavLink href={"/about"}>About</NavLink></li>
                    <li><NavLink href={"/career"}>Career</NavLink></li>
                </ul>
            </div>
            <div>
                <AuthSection></AuthSection>
            </div>
        </div>
    );
};

export default Navbar;