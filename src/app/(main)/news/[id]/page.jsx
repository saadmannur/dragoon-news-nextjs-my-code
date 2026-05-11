import RightSideBar from '@/components/homepage/news/RightSideBar';
import NewsDetails from '@/components/newsDetails/NewsDetails';
import { getNewsDetailsById } from '@/lib/data';
import React from 'react';

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    const newsArray = await getNewsDetailsById(id);
    const news = newsArray.data[0];

    return{
        title: news.title,
        description: news.details
    }
}

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;

    const newsDetails = await getNewsDetailsById(id);
    const details = newsDetails.data[0];

    return (
        <div className="container mx-auto my-10 grid md:grid-cols-14 gap-6">
            <div className="  md:col-span-11">
                <NewsDetails details={details}></NewsDetails>
            </div>

            <div className="md:col-span-3">
                <RightSideBar></RightSideBar>
            </div>

        </div>
    );
};

export default NewsDetailsPage;