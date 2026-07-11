import { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  fullWidth?: boolean;
}

export default function Button({
  text,
  disabled,
  type,
  onClick,
  fullWidth,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`bg-primary cursor-pointer hover:bg-primary/90 transition-all text-white px-3 py-2 rounded-md ${fullWidth && "w-full"}`}
    >
      {text}
    </button>
  );
}
