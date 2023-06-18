import { Card } from "@/components/home";
import LayoutCard from "@/layout/LayoutCard";
import { FlashSale, MixAndMatch } from "@/module/Home";

export default function Home() {
  return (
    <div>
      {/* MIX & MATCH */}
      <MixAndMatch></MixAndMatch>
      {/* Flash Sale */}
      <FlashSale></FlashSale>
      {/* Demo cách sử dụng Card và Layout Card, có gì mn có thể custom lại nha */}
      <LayoutCard>
        {new Array(7).fill(null).map((item, index) => (
          <Card key={index}></Card>
        ))}
      </LayoutCard>
    </div>
  );
}
