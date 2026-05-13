import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import user from "@/assets/user.png"
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mt-10 container mx-auto border-b border-gray-200 py-5'>
            <div className='hidden md:block'>
                
            </div>
            <div>
                <ul className='flex justify-center items-center gap-3 text-gray-500'>
                    <li><NavLink href={"/"}>Home</NavLink></li>
                    <li><NavLink href={"/about"}>About</NavLink></li>
                    <li><NavLink href={"/career"}>Career</NavLink></li>
                </ul>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <Image
                    src={user}
                    alt='user'
                    width={40}
                    height={40}
                ></Image>
                <button className='btn btn-neutral'><Link href={"/login"}>Login</Link></button>
                {/* <button className='btn btn-neutral'><Link href={"/register"}>Register</Link></button> */}
            </div>
        </div>
    );
};

export default Navbar;