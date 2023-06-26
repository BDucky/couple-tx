import React from "react";
import Image from "next/image";

import HomeButton from "./HomeButton";

const HiddenGem = () => {
  return (
    <div className="mb-[60px]">
      <div className="container">
        <div className="title" style={{ fontSize: "24px", fontWeight: "bold" }}>
          UNLOCK MORE HIDDEN GEMS
        </div>

        <div className="container text-left bg-grayE">
          <div className="flex items-center justify-between">
            <div className="flex-1" style={{ textAlign: "left" }}>
              <h2
                style={{
                  fontWeight: "bold",
                  fontSize: "44px",
                  marginLeft: "65px",
                }}
              >
                MATCHING OUTFIT
              </h2>
              <p
                className="des-title"
                style={{
                  fontSize: "12px",
                  fontWeight: "150",
                  marginLeft: "65px",
                }}
              >
                Mang đến sự kết hợp tuyệt vời và đồng điệu.
              </p>
              <div
                className="home-button-container"
                style={{ marginLeft: "65px" }}
              >
                <HomeButton title="SHOP NOW" />
              </div>
            </div>

            <div className="flex-1">
              <Image src="/image/Gem1.webp" alt="" width={800} height={800} />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Image src="/image/Gem2.jpg" alt="" width={800} height={800} />
            </div>

            <div className="flex-1" style={{ textAlign: "left" }}>
              <h2
                style={{
                  fontWeight: "bold",
                  fontSize: "44px",
                  marginLeft: "65px",
                }}
              >
                SUMMER
                <br />
                COLLECTION
              </h2>
              <p
                className="des-title"
                style={{
                  fontSize: "12px",
                  fontWeight: "150",
                  marginLeft: "65px",
                }}
              >
                Cùng bạn trải nghiệm muôn nơi
              </p>
              <div
                className="home-button-container"
                style={{ marginLeft: "65px" }}
              >
                <HomeButton title="SHOP NOW" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1" style={{ textAlign: "left" }}>
              <h2
                style={{
                  fontWeight: "bold",
                  fontSize: "44px",
                  marginLeft: "65px",
                }}
              >
                POLO
              </h2>
              <p
                className="des-title"
                style={{
                  fontSize: "12px",
                  fontWeight: "150",
                  marginLeft: "65px",
                }}
              >
                Đa dụng và thời thượng.
              </p>
              <div
                className="home-button-container"
                style={{ marginLeft: "65px" }}
              >
                <HomeButton title="SHOP NOW" />
              </div>
            </div>

            <div className="flex-1">
              <Image src="/image/Gem3.jpg" alt="" width={800} height={800} />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1" style={{ textAlign: "left" }}>
              <Image src="/image/Gem4.webp" alt="" width={800} height={800} />
            </div>

            <div className="flex-1" style={{ textAlign: "left" }}>
              <h2
                style={{
                  fontWeight: "bold",
                  fontSize: "44px",
                  marginLeft: "65px",
                }}
              >
                ACCESSORIES
              </h2>
              <p
                className="des-title"
                style={{
                  fontSize: "12px",
                  fontWeight: "150",
                  marginLeft: "65px",
                }}
              >
                Phụ kiện luôn là “vũ khí lợi hại” giúp trang phục trở nên thời
                thượng hơn.
              </p>
              <div
                className="home-button-container"
                style={{ marginLeft: "65px" }}
              >
                <HomeButton title="SHOP NOW" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiddenGem;
