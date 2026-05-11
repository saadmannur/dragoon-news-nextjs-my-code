import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    const breakingNews = [
        {
            id: 1,
            title: "Breaking News: Massive Storm Causes Flight Delays Across Major Cities",
        },
        {
            id: 2,
            title: "Breaking News: Global Tech Conference Unveils Next-Gen AI Tools",
        },
        {
            id: 3,
            title: "Breaking News: Stock Markets Rally After Economic Growth Report",
        },
        {
            id: 4,
            title: "Breaking News: Championship Final Ends in Dramatic Penalty Shootout",
        },
        {
            id: 5,
            title: "Breaking News: Scientists Discover Potential Breakthrough in Cancer Research",
        },
        {
            id: 6,
            title: "Breaking News: New Electric Vehicle Sets Record for Battery Efficiency",
        },
    ];
    return (
        <div className='flex justify-between gap-3 items-center py-2 px-2 border border-gray-400 bg-gray-200'>
            <button className='btn bg-pink-800 text-white'>Latest News</button>
            <Marquee pauseOnHover={true} speed={80}>
                {
                    breakingNews.map(n => <p className='mx-7' key={n.id}>{n.title}</p>)
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;