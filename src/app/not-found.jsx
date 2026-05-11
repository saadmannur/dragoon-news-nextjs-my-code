
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Not Found",
};

const NotFoundPage = () => {
    return (
        <div className='text-center my-auto space-y-5'>
            <h2 className='text-5xl font-bold text-red-800'>This page is not found</h2>
            <button className='btn btn-neutral'><Link href={'/'}>Go Home</Link></button>
        </div>
    )
};

export default NotFoundPage;