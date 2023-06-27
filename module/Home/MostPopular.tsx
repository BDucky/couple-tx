const MostPopular = () => {
  return (
    <div className="mb-[60px]">
      <div className="container py-[90px] px-[30px] text-center bg-grayE">
        <h1 className="mb-4 text-4xl font-bold text-left">
          MOST POPULAR CATEGORIES
        </h1>
        <p className="mb-3 text-left text-gray-500">
          Tham khảo ngay những sản phẩm sở hữu lượt mua cao nhất.
        </p>

        <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex gap-10">
            <div className="text-center">
              <a aria-label="banner" href="" title="">
                <picture>
                  <img
                    data-src=""
                    className="mb-4 w-100 lazyloaded"
                    alt=""
                    src="/image/Ao_thun.webp"
                    style={{ margin: "0 auto" }}
                  />
                </picture>
              </a>
              <a href="" title="">
                <div className="text-left caret-block">
                  <strong>Áo Thun</strong>{" "}
                  <span className="caret-nbsp">&nbsp;</span>
                  <span className="caret">&#9658;</span>
                </div>
              </a>
            </div>

            <div className="text-center">
              <a aria-label="banner" href="" title="">
                <picture>
                  <img
                    data-src=""
                    className="mb-4 w-100 lazyloaded"
                    alt=""
                    src="/image/Ao_Polo.jpg"
                    style={{ margin: "0 auto" }}
                  />
                </picture>
              </a>
              <a href="" title="">
                <div className="text-left caret-block">
                  <strong>Áo Polo</strong>{" "}
                  <span className="caret-nbsp">&nbsp;</span>
                  <span className="caret">&#9658;</span>
                </div>
              </a>
            </div>

            <div className="text-center">
              <a aria-label="banner" href="" title="">
                <picture>
                  <img
                    data-src=""
                    className="mb-4 w-100 lazyloaded"
                    alt=""
                    src="/image/Quan_VayNu.jpg"
                    style={{ margin: "0 auto" }}
                  />
                </picture>
              </a>
              <a href="" title="">
                <div className="text-left caret-block">
                  <strong>Quần | Váy Nữ</strong>{" "}
                  <span className="caret-nbsp">&nbsp;</span>
                  <span className="caret">&#9658;</span>
                </div>
              </a>
            </div>

            <div className="text-center">
              <a aria-label="banner" href="" title="">
                <picture>
                  <img
                    data-src=""
                    className="mb-4 w-100 lazyloaded"
                    alt=""
                    src="/image/Quan_Nam.jpg"
                    style={{ margin: "0 auto" }}
                  />
                </picture>
              </a>
              <a href="1" title="">
                <div className="text-left caret-block">
                  <strong>Quần Nam</strong>{" "}
                  <span className="caret-nbsp">&nbsp;</span>
                  <span className="caret">&#9658;</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
