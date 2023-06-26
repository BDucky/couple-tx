import Footer from "@/components/user/footer/page";
import {
  FlashSale,
  MixAndMatch,
  NewArrival,
  MostPopular,
  ScrollToTop,
} from "@/module/Home";
import HiddenGem from "@/module/Home/HidenGem";

import LayoutWebsite from "@/components/layout/LayoutWebsite";
import HomeHeader from "@/components/user/header/page";
import HomeBanner from "@/module/Home/HomeBanner";

export default function Home() {
  return (
    <LayoutWebsite>
      <div>
        {/* Banner */}
        <HomeBanner></HomeBanner>
        {/* New Arrival */}
        <NewArrival></NewArrival>
        {/* Most Popular */}
        <MostPopular></MostPopular>
        {/* Hiden Gem */}
        <HiddenGem></HiddenGem>
        {/* MIX & MATCH */}
        <MixAndMatch></MixAndMatch>
        {/* Flash Sale */}
        <FlashSale></FlashSale>
        {/* Scroll To Top*/}
        <ScrollToTop></ScrollToTop>
      </div>
    </LayoutWebsite>
  );
}
