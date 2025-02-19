"use client";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export const ProductCounter = () => {
  const [count, setCount] = useState(1);

  const handleCount = (nextCount: number) => () => {
    setCount((state) => {
      const nextState = state + nextCount;
      return nextState < 1 ? state : nextState;
    });
  };

  return (
    <div className="flex items-center border-cool-gray border rounded-[4px] w-40 h-14 justify-between px-3 py-1">
      <button className="text-gray-500" onClick={handleCount(-1)}>
        <IconMinus className="text-foreground hover:text-primary" />
      </button>
      <span className="text-xl">{count}</span>
      <button className="text-gray-500" onClick={handleCount(1)}>
        <IconPlus className="text-foreground hover:text-primary" />
      </button>
    </div>
  );
};
