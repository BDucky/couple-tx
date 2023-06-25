import Providers from "@/components/Provider";
import LayoutFilter from "@/components/layout/LayoutFilter";
import LayoutWebsite from "@/components/layout/LayoutWebsite";
import Image from "next/image";

const Page = async () => {
  const products = await getProduct();
  return (
    <LayoutWebsite>
      <div className="container px-[24px]">
        <div className="flex items-center justify-center !mb-10 gap-x-2">
          <div className="flex flex-col cursor-pointer gap-y-3 group">
            <div className="transition-all duration-200 border-2 group-hover:border-black w-[224px] h-[261px]">
              <Image
                src={`https://file.hstatic.net/1000184601/file/9_61e9f751c5ee41ff81a4be88fc6c1133.jpg`}
                alt="Ao_nu"
                width={224}
                height={261}
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="relative text-xs font-bold">
              ÁO NỮ
              <div className="w-[0px] top-full absolute h-[0.1rem] bg-black group-hover:w-[2.5rem] transition-all duration-200"></div>
            </h1>
          </div>
          <div className="flex flex-col cursor-pointer gap-y-3 group">
            <div className="transition-all duration-200 border-2 group-hover:border-black w-[224px] h-[261px]">
              <Image
                src={`https://file.hstatic.net/1000184601/file/8_7bd7e72c61c24b6491042afdb9453f97.jpg`}
                alt="Quan_nam"
                width={224}
                height={261}
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="relative text-xs font-bold">
              QUẦN / VÁY NỮ
              <div className="w-[0px] top-full absolute h-[0.1rem] bg-black group-hover:w-[5.7rem] transition-all duration-200"></div>
            </h1>
          </div>
          <div className="flex flex-col cursor-pointer gap-y-3 group">
            <div className="transition-all duration-200 border-2 group-hover:border-black h-[261px] w-[224px]">
              <Image
                src={`https://file.hstatic.net/1000184601/file/cls-sp-275-350-pk_7d5eff8f1ebb45bbac55aa5b4236f117.jpg`}
                alt="phu_kien"
                width={224}
                height={261}
                className="object-cover object-center w-full h-full"
              />
            </div>
            <h1 className="relative text-xs font-bold">
              PHỤ KIỆN
              <div className="w-[0px] top-full absolute h-[0.1rem] bg-black group-hover:w-[3.5rem] transition-all duration-200"></div>
            </h1>
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
  const res = await fetch(
    `http://localhost:3000/api/products/filter?gender=nu`
  );
  return res.json();
}

export default Page;
