import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandPinterestFilled,
  IconBrandTwitterFilled,
  IconHeart,
} from "@tabler/icons-react";
import { ArrowBack } from "./ArrowBack";
import { ColorPicker } from "./ColorPicker";
import { PrimaryButton } from "./PrimaryButton";
import { ProductCounter } from "./ProductCounter";
import RatingStars from "./Stars";

export const ProductDescription = () => {
  return (
    <div className="max-w-[440px] w-1/3 ml-[80px]">
      <ArrowBack className="hover:text-primary cursor-pointer transition-colors" />
      <ul className="flex mt-[34px]">
        <li>
          <a
            className="hover:underline text-cool-gray hover:text-primary"
            href="/chair"
          >
            Chair
          </a>
        </li>
        <span className="mx-2">/</span>
        <li>
          <span className="text-gray-900 font-medium">Meryl Lounge Chair</span>
        </li>
      </ul>

      <h1 className="text-3xl font-bold mt-[76px]">Meryl Lounge Chair</h1>
      <div className="flex justify-between mt-[24px] items-center">
        <p className="text-2xl font-semibold text-gray-800">$149.99</p>
        <RatingStars className="flex items-center" rating={4.5} reviews={556} />
      </div>
      <p className="mt-[48px]">
        The gently curved lines accentuated by sewn details are kind to your
        body and pleasant to look at. Also, there’s a tilt and height-adjusting
        mechanism that’s built to outlast years of ups and downs.
      </p>
      <ColorPicker colors={["#C1BDB3", "#58737D", "#545454", "#CBA5A5"]} />

      <div className="mt-8 flex items-center">
        <ProductCounter />
        <PrimaryButton className="ml-6">Add to Cart</PrimaryButton>
      </div>
      <p className="mt-8">
        Free 3-5 day shipping • Tool-free assembly • 30-day trial
      </p>
      <div className="flex mt-20 items-center justify-between">
        <button className="flex hover:underline items-center text-primary font-semibold">
          <IconHeart className="text-primary" />{" "}
          <span className="ml-4">Add to Wishlist</span>
        </button>
        <div className="flex space-x-4">
          <a href="#">
            <IconBrandFacebookFilled className="w-4 h-4" />
          </a>
          <a href="#">
            <IconBrandTwitterFilled className="w-4 h-4" />
          </a>
          <a href="#">
            <IconBrandPinterestFilled className="w-4 h-4" />
          </a>
          <a href="#">
            <IconBrandInstagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
