import React from 'react';
import logo from "@/assets/logo.png"
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
    return (
        <div className='text-center space-y-2 py-8'>
            <Image
                src={logo}
                alt='logo'
                width={"400"}
                height={"400"}
                className='mx-auto'
            ></Image>
            <p className='text-xl font-semibold text-gray-500'>Journalism Without Fear or Favour</p>
            <p className='text-2xl text-gray-500 font-semibold'>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;