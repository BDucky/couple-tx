import HomeButton from "./HomeButton";

const NewArrival = () => {
  return (
    <div className="py-[90px] container relative">
      <picture>
        <img
          className="w-100 lazyloaded"
          alt="new arrival"
          src="/image/new_arrival.webp"
        />
      </picture>
      <div
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start"
        style={{ marginLeft: "59px" }}
      >
        <div className="container py-[90px] px-[30px] text-left text-3xl">
          <h2
            className="text-6xl font-bold text-white"
            style={{ lineHeight: "44px", marginBottom: "2px" }}
          >
            NEW ARRIVALS
          </h2>
          <p className="mb-3 text-white text-sm " >
            Những thiết kế tinh tế, mang đến xu hướng<br />
            thời trang mới
          </p>
          <HomeButton
            title="SHOP NOW"
            style={{ height: "39px", width: "202px" }}
          />
        </div>
      </div>
    </div>



  );
};

export default NewArrival;