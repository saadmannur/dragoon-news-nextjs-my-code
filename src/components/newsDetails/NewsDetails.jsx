import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiLeftArrow } from 'react-icons/bi';

const NewsDetails = ({ details }) => {
    // console.log(details)
    const { title, image_url, details: newsDetails } = details;
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Dragoon News</h2>
            <div className='p-5 border border-gray-300 rounded-xl space-y-6'>
                <Image
                    src={image_url}
                    alt={title}
                    width={400}
                    height={400}
                    className='w-full h-auto rounded-xl'
                ></Image>
                <h2 className='text-3xl font-bold'>{title}</h2>
                <p>{newsDetails}</p>
                <Link href={`/category/${details.category_id}`}>
                    <button className='btn bg-pink-800 text-white'><BiLeftArrow></BiLeftArrow> All news in this category</button>
                </Link>
            </div>
        </div>
    );
};

export default NewsDetails;