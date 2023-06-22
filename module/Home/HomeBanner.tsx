"use client";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomeBanner = () => {
    return (
        <div className="mb-[120px] p-0 mt-0 m-auto max-w-[90rem] h-[100%]">
            <div className="relative touch-pan-y select-none">
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
        </div>
    )
}

export default HomeBanner;