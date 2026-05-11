import AllNews from "@/components/homepage/news/AllNews";
import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";

const getCategories = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data;
}

const getNewsByCategoryId = async (category_id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
  const data = await res.json();
  return data
}

export default async function Home() {
  const categories = await getCategories();
  const allCategories = categories.data.news_category;

  const news = await getNewsByCategoryId('01')
  const allNews = news.data;

  return (
    <div className="container mx-auto my-10 grid grid-cols-14 gap-6">
      <div className="  col-span-3">
        <LeftSideBar allCategories={allCategories} isActive={'01'}></LeftSideBar>
      </div>
      
      <div className="col-span-8">
        <AllNews allNews={allNews}></AllNews>
      </div>

      <div className="col-span-3">
        <RightSideBar></RightSideBar>
      </div>

    </div>
  );
}
