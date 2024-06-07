import React from "react";

interface InputProps {
  type: "search" | "text" | "button" | "date";
  placeholder: string;
  label: string;
  func?: (value: string | number) => void;
}
export function Input({ type, placeholder, label, func }: InputProps) {
  return (
    <div className="flex flex-col items-start">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={label}
        onChange={(e) => func?.(e.target.value)}
      />
    </div>
  );
}
