import Footer from "@/components/user/footer/page";
import { FlashSale, MixAndMatch, NewArrival } from "@/module/Home";
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
      {/* Footer */}
      <Footer></Footer>
    </div>
  )
}
