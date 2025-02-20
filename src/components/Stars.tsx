"use client";
import {
  IconStar,
  IconStarFilled,
  IconStarHalfFilled,
} from "@tabler/icons-react";
import { FC } from "react";

interface RatingProps {
  rating?: number;
  max?: number;
  className?: string;
  reviews?: number;
}

const RatingStars: FC<RatingProps> = ({
  rating = 0,
  max = 5,
  className,
  reviews = 0,
}) => {
  return (
    <div className={className}>
      {[...Array(max)].map((_, i) => {
        const starValue = i + 1;
        const isFull = starValue <= rating;
        const isHalf = !isFull && starValue - 0.5 <= rating;

        return (
          <span
            key={i}
            className="w-4"
            style={{
              color: isFull || isHalf ? "#FFD700" : "#ccc",
            }}
          >
            {isFull ? (
              <IconStarFilled className="w-[14px]" />
            ) : isHalf ? (
              <IconStarHalfFilled className="w-[14px]" />
            ) : (
              <IconStar className="w-[14px]" />
            )}
          </span>
        );
      })}
      <span className="ml-3">
        {rating.toFixed(1)} / {max}.0
      </span>
      <span className="ml-1 text-cool-gray">({reviews})</span>
    </div>
  );
};

export default RatingStars;
