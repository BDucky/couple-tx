

import Footer from "@/components/user/footer/page";
import { FlashSale, MixAndMatch, NewArrival, MostPopular, Login } from "@/module/Home";
import HiddenGem from "@/module/Home/HidenGem";
import HomeBanner from "@/module/Home/HomeBanner";

export default function Home() {
  return (
    <div>
      {/* Banner */}
      <HomeBanner></HomeBanner>
      {/* MIX & MATCH */}
      <MixAndMatch></MixAndMatch>
      {/* Flash Sale */}
      <FlashSale></FlashSale>
      {/* New Arrival */}
      <NewArrival></NewArrival>
      {/* Most Popular */}
      <MostPopular></MostPopular>
      {/* Hiden Gem */}
      <HiddenGem></HiddenGem>
      {/* Login */}
      <Login></Login>
      {/* Footer */}
      <Footer></Footer>
    </div>
  )
}
