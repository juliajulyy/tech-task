import { FC, ReactElement, ReactNode, MouseEvent } from "react";

type Props = {
  children: ReactNode | ReactElement;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

export const PrimaryButton: FC<Props> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-10 h-[56px] py-4 bg-primary text-white text-label-medium rounded-[4px] hover:bg-primary-active transition-all transform duration-300 font-semibold hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
};
