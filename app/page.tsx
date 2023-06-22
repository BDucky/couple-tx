import { Card } from "@/components/home";
import LayoutCard from "@/layout/LayoutCard";
import Footer from "@/components/user/footer/page";
import { FlashSale, MixAndMatch, NewArrival } from "@/module/Home";

export default function Home() {
  return (
    <div>
      {/* MIX & MATCH */}
      <MixAndMatch></MixAndMatch>
      {/* Flash Sale */}
      <FlashSale></FlashSale>

      {/* New Arrival */}
      <NewArrival></NewArrival>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}
