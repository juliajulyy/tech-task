"use client";

import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandPinterestFilled,
  IconBrandTwitterFilled,
  IconHeart,
  IconHeartFilled,
} from "@tabler/icons-react";
import { ArrowBack } from "./ArrowBack";
import { ColorPicker } from "./ColorPicker";
import { PrimaryButton } from "./PrimaryButton";
import { ProductCounter } from "./ProductCounter";
import RatingStars from "./Stars";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "@/types";
import { ProductService } from "@/services/product.service";

const variationTitles = {
  colorOptions: "color",
};

type Props = {
  product: Pick<
    Product,
    | "name"
    | "category"
    | "variations"
    | "description"
    | "price"
    | "rating"
    | "review_count"
    | "id"
  >;
};

const productService = new ProductService();

export const ProductDescription: FC<Props> = ({ product }) => {
  const [wishlistId, setWishlistId] = useState<string | undefined>();

  useEffect(() => {
    productService.getWishlistId(product.id).then((wishlistId) => {
      setWishlistId(wishlistId);
    });
  }, [product.id]);

  const isWishlisted = Boolean(wishlistId);

  const handleWishlist = async () => {
    if (wishlistId) {
      productService.removeFromWishlist(wishlistId);
      setWishlistId(undefined);
    } else {
      const wishlistId = await productService.addToWishlist(
        parseInt(product.id, 10)
      );
      setWishlistId(wishlistId);
    }
  };

  const colorOptions = product.variations
    .filter((variant) => variant.title === variationTitles.colorOptions)
    .flatMap((item) => item.options);

  return (
    <div className="max-w-[440px] w-1/3 ml-[80px]">
      <ArrowBack className="hover:text-primary cursor-pointer transition-colors" />
      <ul className="flex mt-[34px] text-label-small font-semibold">
        <li>
          <Link
            className="hover:underline text-cool-gray transition-colors hover:text-primary"
            href={`/${product.category}`}
          >
            {product.category}
          </Link>
        </li>
        <span className="mx-2">/</span>
        <li>
          <span className="text-foreground ">{product.name}</span>
        </li>
      </ul>

      <h1 className="text-headline-large font-bold mt-[76px]">
        {product.name}
      </h1>
      <div className="flex justify-between mt-[24px] items-center text-body-large">
        <p className="text-title-medium font-semibold">${product.price}</p>
        <RatingStars
          className="flex items-center"
          rating={product.rating}
          reviews={product.review_count}
        />
      </div>
      <p className="mt-[48px] text-body-large">{product.description}</p>
      <ColorPicker colors={colorOptions} />

      <div className="mt-8 flex items-center">
        <ProductCounter />
        <PrimaryButton className="ml-6">Add to Cart</PrimaryButton>
      </div>
      <p className="mt-8 text-body-large">
        Free 3-5 day shipping • Tool-free assembly • 30-day trial
      </p>
      <div className="flex mt-20 items-center justify-between">
        <button
          onClick={handleWishlist}
          className="flex hover:underline items-center text-primary text-label-medium font-semibold"
        >
          {isWishlisted ? (
            <>
              <IconHeartFilled className="text-primary" />{" "}
              <span className="ml-4">Remove from Wishlist</span>
            </>
          ) : (
            <>
              <IconHeart className="text-primary" />{" "}
              <span className="ml-4">Add to Wishlist</span>
            </>
          )}
        </button>
        <div className="flex space-x-4">
          <Link href="#">
            <IconBrandFacebookFilled className="w-4 h-4" />
          </Link>
          <Link href="#">
            <IconBrandTwitterFilled className="w-4 h-4" />
          </Link>
          <Link href="#">
            <IconBrandPinterestFilled className="w-4 h-4" />
          </Link>
          <Link href="#">
            <IconBrandInstagram className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
