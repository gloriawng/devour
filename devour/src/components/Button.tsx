"use client";

import { ReactNode } from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode; 
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    type = "button",
    disabled = false,
    className = "",
    variant = "primary",
    size = "md",
    icon,
  }) => {
    const baseStyles = "flex items-center gap-2 rounded-lg font-semibold transition duration-300";
    const variantStyles = {
      primary: "bg-blue-500 hover:bg-blue-600 text-white",
      secondary: "bg-gray-500 hover:bg-gray-600 text-white",
      outline: "border border-gray-500 text-gray-700 hover:bg-gray-100",
      danger: "bg-red-500 hover:bg-red-600 text-white",
    };
    const sizeStyles = {
      sm: "px-2 py-1 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };
  
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`
          ${baseStyles} 
          ${sizeStyles[size]} 
          ${disabled ? "bg-gray-400 cursor-not-allowed" : variantStyles[variant]} 
          ${className}
        `}
      >
        {icon && <span>{icon}</span>} {/* Renders icon if provided */}
        {label}
      </button>
    );
  };
  
  export default Button;