import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ children, onClick, className = "", type = "button", shape = "rounded-md" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white ${shape} hover:bg-blue-600 transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
