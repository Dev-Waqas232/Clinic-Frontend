import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({
  label,
  placeholder,
  type,
  value,
  onChange,
  disabled,
  required,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>
      <input
        className="border border-border active:border-primary py-2 px-3 rounded-md text-sm focus:outline-none"
        placeholder={placeholder}
        type={type}
        required={required}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
