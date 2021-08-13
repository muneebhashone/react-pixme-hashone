import React from "react";
import "./custom-button.styles.css";

function CustomButton({ Icon, text, link, handleCiick, isGoogle, isFacebook }) {
  if (link) {
    return (
      <a
        href={link}
        className={`${
          isGoogle === true
            ? "google-btn"
            : isFacebook === true
            ? "facebook-btn"
            : ""
        } custom-button`}
      >
        {Icon && (
          <div className="custom-button_icon">
            <Icon />
          </div>
        )}
        <div className="custom-button_text">{text}</div>
      </a>
    );
  } else {
    return (
      <button
        onClick={handleCiick}
        className={`${
          isGoogle === true
            ? "google-btn"
            : isFacebook === true
            ? "facebook-btn"
            : ""
        } custom-button`}
      >
        {Icon && (
          <div className="custom-button_icon">
            <Icon />
          </div>
        )}
        <div className="custom-button_text">{text}</div>
      </button>
    );
  }
}

export default CustomButton;
