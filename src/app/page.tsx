import { ProductDescription } from "@/components/ProductDescription";
import { ProductSlider } from "@/components/ProductSlider";

export default function Home() {
  return (
    <div className="pt-[54px] flex justify-between">
      <ProductDescription />
      <ProductSlider
        images={[
          "https://i.imgur.com/pQCroZE.png",
          "https://i.imgur.com/IWOhL09.png",
          "https://i.imgur.com/pRkJF1H.png",
          "https://i.imgur.com/ae3rgB8.png",
        ]}
      />
    </div>
  );
}
