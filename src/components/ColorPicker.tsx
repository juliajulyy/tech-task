"use client";
import { FC, useState } from "react";

type Props = {
  colors: string[];
};

export const ColorPicker: FC<Props> = ({ colors }) => {
  const [selectedColor, setColor] = useState(colors[0]);

  return (
    <div className="flex space-x-4 mt-4">
      {colors.map((colorCode) => (
        <div
          className="flex items-center justify-center relative"
          key={colorCode}
        >
          <div
            className="rounded-full w-7 h-7 absolute -z-10"
            style={{
              backgroundColor: colorCode,
              opacity: colorCode === selectedColor ? 0.5 : 0,
              transition: "opacity 200ms linear",
            }}
          ></div>

          <button
            onClick={() => setColor(colorCode)}
            className="rounded-full w-5 h-5"
            style={{
              backgroundColor: colorCode,
            }}
          ></button>
        </div>
      ))}
    </div>
  );
};
