import LayoutWebsite from "@/components/layout/LayoutWebsite";
import Footer from "@/components/user/footer/page";
import HomeHeader from "@/components/user/header/page";
import { FlashSale, MixAndMatch, NewArrival } from "@/module/Home";
import HomeBanner from "@/module/Home/HomeBanner";
export default function Home() {
  return (
    <LayoutWebsite>
      <div>
        {/* Banner */}
        <HomeBanner></HomeBanner>
        {/* MIX & MATCH */}
        <MixAndMatch></MixAndMatch>
        {/* Flash Sale */}
        <FlashSale></FlashSale>
        {/* New Arrival */}
        <NewArrival></NewArrival>
      </div>
    </LayoutWebsite>
  );
}
