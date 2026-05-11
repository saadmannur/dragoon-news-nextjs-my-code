import AllNews from '@/components/homepage/news/AllNews';
import LeftSideBar from '@/components/homepage/news/LeftSideBar';
import RightSideBar from '@/components/homepage/news/RightSideBar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';

export const metadata = {
    title: "Dragoon News",
};

const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);

    const categories = await getCategories();
    const allCategories = categories.data.news_category;

    const news = await getNewsByCategoryId(id)
    const allNews = news.data;
    return (

        <div className="container mx-auto my-10 grid md:grid-cols-14 gap-4">
            <div className="  md:col-span-3">
                <LeftSideBar allCategories={allCategories} isActive={id}></LeftSideBar>
            </div>

            <div className="md:col-span-8">
                <AllNews allNews={allNews}></AllNews>
            </div>

            <div className="md:col-span-3">
                <RightSideBar></RightSideBar>
            </div>

        </div>

    );
};

export default NewsCategoryPage;