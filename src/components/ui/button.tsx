// Simple Button component for demonstration
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost";
  size?: "sm" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "sm",
  className = "",
  ...props
}) => {
  let base = "rounded px-4 py-2 font-medium transition";
  let variants = variant === "ghost"
    ? "bg-transparent text-gray-600 hover:text-gray-950"
    : "bg-gray-950 text-white hover:bg-gray-900";
  let sizes = size === "lg"
    ? "text-base px-8 py-3"
    : size === "sm"
    ? "text-sm px-3 py-1.5"
    : "";

  return (
    <button className={`${base} ${variants} ${sizes} ${className}`} {...props} />
  );
};

export default Button;