import LayoutWebsite from "@/components/layout/LayoutWebsite";
import Image from "next/image";

const Page = async () => {
  return (
    <LayoutWebsite>
      <div className="flex flex-col">
        <div className="">
          <Image
            width={1440}
            height={500}
            src={`https://file.hstatic.net/1000184601/file/z4345686899656_98cd84d1592737be9ea88fe907f38b0e_3b35c0c6f3f64e98b4b6fca043ecca50.jpg`}
            alt="our-product"
            className="w-full"
          />
        </div>
        <div className="-mt-10 mb-[100px]">
          <div className="w-[1280px] mx-auto shadow-lg">
            <div>
              <Image
                width={700}
                height={500}
                src={`https://file.hstatic.net/1000184601/file/asset_50_2x_b5e130e57dd54e2596eb7bef181a8ed4.png`}
                alt="our-product"
                className="object-cover object-center w-full"
              />
            </div>
            <div className="w-[1240px] mx-auto">
              <div className="flex items-center justify-between text-base font-bold">
                <div className="p-5">COUPLE TX</div>
                <div className="p-5">GREEN EX</div>
                <div className="p-5">COUPLE TX DENIM</div>
                <div className="p-5">C.TX STUDIO</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-center">
            THỜI TRANG ĐA DỤNG THEO PHONG CÁCH URBAN CASUAL
          </h1>
          <div className="w-[1187px] mx-auto">
            <Image
              width={1187}
              height={1287}
              src={`https://file.hstatic.net/1000184601/file/asset_45_2x_ca83b5dd606140e49e5dfafb6f8bc86f.png`}
              alt="our-product"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </LayoutWebsite>
  );
};

export default Page;
