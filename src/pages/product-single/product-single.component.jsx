import React from "react";
import Display from "../../components/display/display.component";
import IconBox from "../../components/icon-box/icon-box.component";
import { Container } from "@material-ui/core";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import productSingleImg from "../../assets/product-single.png";
import productBottleImg from "../../assets/bottle.png";
import "./product-single.styles.css";

function ProductSingle() {
  return (
    <Container>
      <div className="product-single">
        <div className="product-single_top">
          <Display
            title="Smirnoff Summer Punch"
            paragraph="Lorem Ipsum is simply a sample text used in the printing and stacking industry. It has been the industry's main test text since the 1500s, when an unknown printer took a lot of random text to make a print sample. It became known in the 1960s with the release of Letraset pages, and more recently with text editors such as Aldus PageMaker, which contain various versions of Lorem Ipsum."
            image={productSingleImg}
            starRating={4}
            totalRatings={40}
          />
        </div>
        <div className="product-single_bottom">
          <div className="product-single_ingredients">
            <h2 className="product-single_heading">Ingredients</h2>
            <ul className="product-single_ingredients-list">
              <li className="ingredients-list-item">
                <span className="list-item_quantity">400ml</span>
                <span className="list-item_name">Smirnoff No. 21® Vodka</span>
              </li>
              <li className="ingredients-list-item">
                <span className="list-item_quantity">600ml</span>
                <span className="list-item_name">Smirnoff No. 21® Vodka</span>
              </li>
            </ul>
          </div>
          <div className="product-single_make">
            <h2 className="product-single_heading">How to make</h2>
            <ul className="product-single_steps-list">
              <li className="steps-list-item">
                <span className="list-item_index">1-</span>
                <span className="list-item_heading">
                  Fill a large bowl with ice.
                </span>
                <span className="list-item_desc">
                  Add large chunks of ice, or large cubes, to a punch bowl, or
                  container.
                </span>
              </li>
              <li className="steps-list-item">
                <span className="list-item_index">2-</span>
                <span className="list-item_heading">
                  Fill a large bowl with ice.
                </span>
                <span className="list-item_desc">
                  Add large chunks of ice, or large cubes, to a punch bowl, or
                  container.
                </span>
              </li>
            </ul>
          </div>
          <div className="product-single_img">
            <img src={productBottleImg} alt="" />
          </div>
        </div>
        <div className="product-single_last">
          <h2 className="product-single_heading">
            Smirnoff No. 21&#174; Vodka
          </h2>
          <p className="product-single_paragraph">
            A vodka that's known around the world, Smirnoff is born of a long
            history of charcoal filtration to give smooth mouth feel and a pure,
            clean flavour.
          </p>
        </div>
        <div className="product-single_bottom-btns">
          <IconBox
            Icon={FaApple}
            subtitle="Download on the"
            title="App Store"
          />
          <IconBox
            Icon={FaGooglePlay}
            subtitle="Available on the"
            title="Google Play"
          />
        </div>
      </div>
    </Container>
  );
}

export default ProductSingle;
