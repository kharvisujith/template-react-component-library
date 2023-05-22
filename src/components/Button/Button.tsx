import React from "react";
import "./Button.style.scss";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ label, onClick, className = "" }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`button-style ${className}`}>
      {label}
    </button>
  );
};

export default Button;
