import Providers from "@/components/Provider";
import LayoutFilter from "@/components/layout/LayoutFilter";
import LayoutWebsite from "@/components/layout/LayoutWebsite";
import Image from "next/image";

const Page = async () => {
  const products = await getProduct();
  return (
    <LayoutWebsite>
      <div className="container px-[24px]">
        <div className="flex items-center !mb-10 gap-x-12">
          <div className="max-h-[406px]">
            <Image
              src="/image/new_arrival_banner.webp"
              alt="new_arrival"
              width={696}
              height={406}
              className="w-full h-full"
            />
          </div>
          <div>
            <h1 className="font-bold text-[32px] text-center">
              BST THỜI TRANG MỚI COUPLE TX
            </h1>
            <p className="text-center text-gray-500">
              Sáng tạo nhiều phong cách cho mọi dịp với những thiết kế trẻ
              trung, năng động, thời thượng từ Couple TX.
            </p>
          </div>
        </div>
        <Providers>
          <LayoutFilter products={products}></LayoutFilter>
        </Providers>
      </div>
    </LayoutWebsite>
  );
};

export async function getProduct() {
  const res = await fetch(`http://localhost:3000/api/products/filter`);
  return res.json();
}

export default Page;
