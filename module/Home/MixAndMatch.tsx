import HomeButton from "./HomeButton";

const MixAndMatch = () => {
  return (
    <div className="container py-[90px] px-[30px] text-left bg-grayE">
      <h1 className="mb-4 text-4xl font-bold">MIX & MATCH</h1>
      <p className="mb-3 text-gray-500">
        Thoả sức sáng tạo với vô số sự kết hợp từ món đồ bạn thích.
      </p>
      <HomeButton title="SHOP NOW"></HomeButton>
      <div className="grid grid-cols-4">Image</div>
    </div>
  );
};

export default MixAndMatch;
