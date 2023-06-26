import HomeButton from "./HomeButton";

const NewArrival = () => {
  return (
    <div className="container relative overflow-hidden">
      <picture>
        <img
          className="relative touch-pan-y select-none mb-[20px]"
          alt="new arrival"
          src="/image/new_arrival.webp"
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
        />
      </picture>
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ marginLeft: "59px" }}
      >
        <div className="container py-[90px] px-[30px] text-left text-3xl flex flex-col ">
          <h2
            className="text-6xl font-bold text-white"
            style={{ lineHeight: "44px", marginBottom: "2px" }}
          >
            NEW ARRIVALS
          </h2>
          <p className="mb-3 text-sm text-white">
            Những thiết kế tinh tế, mang đến xu hướng
            <br />
            thời trang mới
          </p>
          <button
            className="btn-cus"
            style={{
              backgroundColor: "white",
              color: "black",
              width: "202px",
              height: "42px",
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
