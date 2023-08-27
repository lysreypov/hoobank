import React from "react";

const Button = ({ style }) => {
  return (
    <button
      className={`px-6 py-4 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] ${style}`}
    >
      Get Started
    </button>
  );
};

export default Button;
