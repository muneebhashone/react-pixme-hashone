import React from "react";
import "./custom-select.styles.css";

function CustomSelect({ children, ...options }) {
  return (
    <select className="custom-select" {...options}>
      {children}
    </select>
  );
}

export default CustomSelect;
