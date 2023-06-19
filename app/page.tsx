import Footer from "@/components/user/footer/page";
import { FlashSale, MixAndMatch } from "@/module/Home";

export default function Home() {
  return (
    <div>
      {/* MIX & MATCH */}
      <MixAndMatch></MixAndMatch>
      {/* Flash Sale */}
      <FlashSale></FlashSale>
      <Footer></Footer>
    </div>
  );
}
