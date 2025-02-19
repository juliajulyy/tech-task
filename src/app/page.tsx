import { ProductDescription } from "@/components/ProductDescription";
import { ProductSlider } from "@/components/ProductSlider";

export default function Home() {
  return (
    <div className="pt-[54px] flex justify-between">
      <ProductDescription />
      <ProductSlider />
    </div>
  );
}
