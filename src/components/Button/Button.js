import React from "react";
import "./Button.scss";

const Button = ({ text, className = "", ...props }) => {
  return (
    <button className={[`btn btn-primary w-100`, className].join(" ")} {...props}>
      {text}
    </button>
  );
};

export default Button;
