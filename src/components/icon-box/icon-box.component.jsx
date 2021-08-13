import React from "react";
import { Link } from "react-router-dom";
import "./icon-box.styles.css";

function IconBox({ Icon, subtitle, title, linkTo = "#" }) {
  return (
    <Link to={linkTo} className="icon-box">
      <div className="icon-box_icon">
        <Icon />
      </div>
      <div className="icon-box_right">
        <div className="icon-box_right-subtitle">{subtitle}</div>
        <div className="icon-box_right-title">{title}</div>
      </div>
    </Link>
  );
}

export default IconBox;
