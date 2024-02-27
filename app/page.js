"use client";

import ArticleForNewCollection from "./components/HomePage/ArticleForNewCollection";
import CategoryProductCard from "./components/HomePage/CategoryProductCard";
import CategoryProductCard2 from "./components/HomePage/CategoryProductCard2";
import CategoryProductCardCenter from "./components/HomePage/CategoryProductCardCenter";
import ExploreCategory from "./components/HomePage/ExploreCategory";
import Header from "./components/HomePage/Header";
import Newsletter from "./components/HomePage/Newsletter";
import Slider from "./components/HomePage/Slider";
import NetworkCheck from "./components/NetworkCheck";
import ProductPage from "./product/page";

export default function Home() {
  return (
    <div className="grid place-items-center pt-6 sm:pt-24">
      <div className="relative w-full h-full max-w-7xl">
        
        <div className="px-4 xl:px-0">
          <Slider />
        </div>
        {/* <Header /> */}
        <div className="px-4 py-20 xl:px-0 ">
          <ArticleForNewCollection />
        </div>
        <div className="px-4 my-4 xl:px-0">
          <CategoryProductCard />
        </div>
        <div className="px-4 my-4 xl:px-0">
          <CategoryProductCard2 />
        </div>
        <div className="px-4 my-4 xl:px-0">
          <CategoryProductCardCenter />
        </div>
        <div className="px-4 pt-12 xl:px-0">
          <ExploreCategory />
        </div>

        <div className="grid my-12 place-items-center">
          <Newsletter />
        </div>
      </div>
    </div>
  );
}
