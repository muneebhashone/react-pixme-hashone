import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Display from "../../components/display/display.component";
import IconBox from "../../components/icon-box/icon-box.component";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleFlavourStart,
  singleFlavourUnmount,
} from "../../redux/products/products.action";
import { useParams } from "react-router-dom";
import { Container } from "@material-ui/core";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import "./drink-single.styles.css";

function ProductSingle() {
  const dispatch = useDispatch();
  const { isFetching, singleFlavour } = useSelector((state) => state.drinks);
  const params = useParams();
  const productId = params.flavourId;

  console.log(singleFlavour);

  useEffect(() => {
    dispatch(fetchSingleFlavourStart(productId));

    return () => {
      dispatch(singleFlavourUnmount());
    };
  }, []);

  if (isFetching || singleFlavour === null) {
    return <LoadingSpinner />;
  }

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${singleFlavour.wine_flavour_name} | Pix Me A Drink`}</title>
        <meta
          data-react-helmet="true"
          name="description"
          content={singleFlavour.meta_description}
        />
        <meta
          data-react-helmet="true"
          name="title"
          content={singleFlavour.meta_title}
        />
        <link
          rel="canonical"
          href={`https://pixmeadrink.com/flavours/${singleFlavour.slug}`}
        />
      </Helmet>
      <div className="product-single">
        <div className="product-single_top">
          <Display
            title={singleFlavour.wine_flavour_name}
            paragraph={singleFlavour.wine_flavour_description}
            image={singleFlavour.wine_flavour_image}
            starRating={singleFlavour.rating}
            totalRatings={singleFlavour.flavour_wine_reviews.length}
          />
        </div>
        <div className="product-single_bottom">
          <div className="product-single_ingredients">
            <h2 className="product-single_heading">Ingredients</h2>
            <ul className="product-single_ingredients-list">
              {singleFlavour.flavour_wine_ingredients.map((ingredient) => (
                <li key={ingredient.id} className="ingredients-list-item">
                  <span className="list-item_quantity">{ingredient.label}</span>
                  <span className="list-item_name">
                    {ingredient.ingredients_details}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="product-single_make">
            <h2 className="product-single_heading">How to make</h2>
            <ul className="product-single_steps-list">
              {singleFlavour.flavour_wine_making_steps.map((step) => (
                <li key={step.id} className="steps-list-item">
                  <span className="list-item_index">{step.sequence}-</span>
                  <span className="list-item_heading">{step.label}</span>
                  <span className="list-item_desc">{step.steps_details}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="product-single_img">
            <img
              src={singleFlavour.flavour_wine_dictionary.wine_image}
              alt=""
            />
          </div>
        </div>
        <div className="product-single_last">
          <h2 className="product-single_heading">
            {singleFlavour.flavour_wine_dictionary.wine_title}
          </h2>
          <p className="product-single_paragraph">
            {singleFlavour.flavour_wine_dictionary.wine_description}
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
            linkTo="https://play.google.com/store/apps/details?id=com.wine.shake"
            title="Google Play"
          />
        </div>
      </div>
    </Container>
  );
}

export default ProductSingle;
