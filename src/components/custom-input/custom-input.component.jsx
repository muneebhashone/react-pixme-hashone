import React from "react";
import "./custom-input.styles.css";

function CustomInput({ ...options }) {
  return <input className="custom-input" {...options} />;
}

export default CustomInput;
