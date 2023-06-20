import { FlashSale, MixAndMatch, MostPopular, NewArrival } from "@/module/Home";

export default function Home() {
  return (
    <div>
      {/* MIX & MATCH */}
      <MixAndMatch></MixAndMatch>
      {/* Flash Sale */}
      <FlashSale></FlashSale>
      {/* New Arrival */}
      <NewArrival></NewArrival>
      {/* Most Popular */}
      <MostPopular></MostPopular>
    </div>
  );
}
