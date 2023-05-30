import React from "react";
import "./Button.scss";

const Button = ({ text, className = "", icon = "", ...props }) => {
  return (
    <button className={[`btn btn-primary w-100`, className].join(" ")} {...props}>
      {text}
      {icon && <img src={`/img/icon-${icon}.svg`} className="icon" alt={`${icon} icon`} />}
    </button>
  );
};

export default Button;
