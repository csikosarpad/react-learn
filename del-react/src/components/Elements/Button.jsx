import React from "react";

const Button = ({ handleClick, children }) => (
  <button type="button" className="btn" onClick={handleClick}>
    {children}
  </button>
);

export default Button;
