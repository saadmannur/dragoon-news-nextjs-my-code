import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({ allCategories, isActive }) => {
    return (
        <div className='sticky top-5'>
            <h2 className="text-xl font-bold mb-6">All categories</h2>
            <ul className="space-y-2">
                {
                    allCategories.map(category => <li 
                        className={`${isActive === category.category_id && "bg-pink-800 text-white hover:bg-pink-800"} text-lg  pl-10 hover:bg-gray-200`} 
                        key={category.category_id}>
                        <Link href={`/category/${category.category_id}`} className='block p-1.5'>{category.category_name}</Link>
                        </li>)
                }
            </ul>
        </div>
    );
};

export default LeftSideBar;