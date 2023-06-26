"use client";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CategoryBanner from "./CategoryBanner";
import SortBtn from "./Sort";

const HomeBanner = () => {
    return (
        <div className="p-0 mt-0 m-auto max-w-[90rem] h-[100%]">
            <div className="relative touch-pan-y select-none mb-[20px]">
                <Carousel
                    showThumbs={false}
                    autoPlay
                    transitionTime={1000}
                    infiniteLoop
                    showStatus={false}
                    emulateTouch
                >
                    <div>
                        <img src="/image/banner_1.webp" alt="banner_1" />
                    </div>
                    <div>
                        <img src="/image/banner_2.webp" alt="banner_2" />
                    </div>
                    <div>
                        <img src="/image/banner_3.webp" alt="banner_3" />
                    </div>
                    <div>
                        <img src="/image/banner_4.webp" alt="banner_4" />
                    </div>
                </Carousel>
            </div>
            <div className="flex mb-[20px]">
                <div className="w-[33%] pr-[0.75rem]">
                    <CategoryBanner
                        img="/image/cate_1.webp"
                        descriptions="Thể hiện phong cách năng động và phóng khoáng trong BST mới nhất."
                        category="Men"></CategoryBanner>
                </div>
                <div className="w-[33%] pr-[0.75rem]">
                    <CategoryBanner
                        img="/image/cate_2.jpg"
                        descriptions="Thể hiện phong cách năng động và phóng khoáng trong BST mới nhất."
                        category="Men"></CategoryBanner>
                </div>
                <div className="w-[33%] pr-[0.75rem]">
                    <CategoryBanner
                        img="/image/cate_3.webp"
                        descriptions="Thể hiện phong cách năng động và phóng khoáng trong BST mới nhất."
                        category="Men"></CategoryBanner>
                </div>
            </div>
            <SortBtn></SortBtn>
        </div>
    )
}

export default HomeBanner;