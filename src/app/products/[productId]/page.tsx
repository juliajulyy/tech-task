import { ProductDescription } from "@/components/ProductDescription";
import { ProductSlider } from "@/components/ProductSlider";
import { ProductService } from "@/services/product.service";

export default async function ProductItem({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productService = new ProductService();

  const productId = (await params).productId;

  const product = await productService.getProducts(productId);

  return (
    <div className="flex justify-between">
      <ProductDescription product={product} />
      <ProductSlider images={product.images} />
    </div>
  );
}
