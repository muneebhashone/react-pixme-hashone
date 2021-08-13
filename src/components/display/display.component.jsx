import React from "react";
import ReactStars from "react-rating-stars-component";
import "./display.styles.css";

function Display({ title, paragraph, image, starRating, totalRatings }) {
  return (
    <div className="display">
      <div className="display_details">
        <h1 className="display_title">{title}</h1>
        {starRating && (
          <div className="display_stars-container">
            <div className="display_stars">
              <ReactStars
                count={5}
                isHalf={true}
                value={starRating}
                edit={false}
                size={30}
                activeColor="#ffd700"
              />
              <div className="display_stars-total">{totalRatings}</div>
            </div>
          </div>
        )}
        <p className="display_desc">{paragraph}</p>
      </div>
      <div className="display_img">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Display;
