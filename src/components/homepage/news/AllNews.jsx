import React from 'react';
import NewsCard from './NewsCard';

const AllNews = ({ allNews }) => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-6">Dragoon News Home</h2>
            <div>
                {
                    allNews.length === 0 ?
                        <div className='text-center'>
                            <h2 className='text-4xl'>No news found</h2>
                        </div> :
                        <div className='space-y-4'>
                            {
                                allNews.map(news => <NewsCard
                                    key={news._id}
                                    news={news}
                                ></NewsCard>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default AllNews;