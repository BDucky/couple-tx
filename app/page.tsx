import { Card } from "@/components/home";
import LayoutCard from "@/layout/LayoutCard";
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
    </div>
  );
}
