import { id } from 'date-fns/locale';
import { Fullscreen } from 'lucide';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiSaveDown2 } from 'react-icons/ci';
import { FaEye, FaStar } from 'react-icons/fa';
import { IoShareSocialOutline } from 'react-icons/io5';

const NewsCard = ({ news }) => {
    // console.log(news)
    const { title,} = news
    return (
        <div className='rounded-xl'>
            <div className='flex justify-between items-center bg-gray-100 py-5 rounded-t-xl px-10 '>
                <div className='flex gap-3 items-center'>
                    <Image
                        src={news.author?.img}
                        alt={"poster"}
                        width={50}
                        height={50}
                        className='rounded-full'
                    ></Image>
                    <div>
                        <h2 className='font-bold text-xl'>{news.author?.name}</h2>
                        <p className='text-gray-500'>{news.author?.published_date}</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center text-4xl'>
                    <CiBookmark />
                    <IoShareSocialOutline />
                </div>
            </div>
            <div className='p-6 border border-gray-200 rounded-b-xl'>
                <h2 className='text-3xl font-bold'>{title}</h2>
                <Image
                    src={news.image_url}
                    alt='news thumbnail'
                    width={600}
                    height={400}
                    unoptimized
                    className='w-full h-auto my-5 rounded-xl'
                ></Image>

                {/* <p className='flex flex-col'>
                    {news.details.slice(0, 300)}...
                    <Link href={""} className=' text-pink-800 text-lg font-bold'>
                        Read More                            
                    </Link>
                </p> */}
                <p className='line-clamp-3'>{news.details}</p>
                <Link href={`/news/${news._id}`} className=' text-pink-800 text-lg font-bold'>
                    Read More
                </Link>


                <div className="divider"></div>

                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-8 text-xl'>
                        <p className='flex items-center gap-2'><FaStar className='text-yellow-500' />{news.rating.number}</p>
                        <p className='flex items-center gap-2'><FaEye />{news.total_view}</p>
                    </div>
                    <Link href={`/news/${news._id}`}>
                        <button className='btn bg-pink-800 text-white'>See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;