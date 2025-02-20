"use client";
import Image from "next/image";
import { FC, useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

type Props = {
  images: string[];
};

const customImages = [
  "https://i.imgur.com/pQCroZE.png",
  "https://imgur.com/IWOhL09.png",
  "https://imgur.com/pRkJF1H.png",
  "https://imgur.com/ae3rgB8.png",
];

export const ProductSlider: FC<Props> = ({ images = customImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const formatNumber = (number: number) => number.toString().padStart(2, "0");

  return (
    <div className="flex flex-col flex-1 items-end">
      <div className="flex flex-col gap-4 mr-10">
        <div className="pl-2">
          <span className="font-bold text-3xl">
            {formatNumber(currentIndex + 1)}
          </span>{" "}
          <span className="font-semibold text-2xl text-cool-gray">
            {"/"} {formatNumber(images.length)}
          </span>
        </div>
        <div className="flex justify-self-end justify-between w-[128px]">
          <button onClick={prevSlide} className="hover:text-primary-active">
            <IconChevronLeft />
          </button>
          <button onClick={nextSlide} className="hover:text-primary-active">
            <IconChevronRight />
          </button>
        </div>
      </div>

      <div className="flex flex-col g-10 w-full h-full justify-between">
        <div className="relative h-96">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                className="object-contain"
                fill
              />
            </div>
          ))}
          <div
            style={{
              background:
                "linear-gradient(270.26deg, #edf3f3  54%, white 96.85%)",
            }}
            className="w-[440px] h-[250px] absolute top-1/2 right-0 -translate-y-1/2 -z-10"
          />
        </div>

        <div className="flex gap-6 justify-end mr-10">
          {images.map((src, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative flex justify-center items-center border-2 rounded-md overflow-hidden w-[104px] h-[104px] ${
                index === currentIndex
                  ? "border-primary-active"
                  : "border-french-gray"
              }`}
            >
              <div className="relative h-[88px] w-[88px]">
                <Image
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
