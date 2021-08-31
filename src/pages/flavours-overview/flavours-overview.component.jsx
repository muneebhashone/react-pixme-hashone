import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import CustomSelect from "../../components/custom-select/custom-select.component";
import ProductCard from "../../components/product-card/product-card.component";
import Display from "../../components/display/display.component";
import {
  fetchSingleDrinkStart,
  singleDrinkUnmount,
} from "../../redux/products/products.action";
import { Container, Grid } from "@material-ui/core";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import "./flavours-overview.styles.css";

function FlavoursOverview() {
  const { singleDrink, isFetching } = useSelector((state) => state.drinks);
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();
  const drinkId = params.drinkId;
  console.log(params);

  useEffect(() => {
    if (singleDrink === null) {
      dispatch(fetchSingleDrinkStart(drinkId));
    }

    return () => {
      dispatch(singleDrinkUnmount());
    };
  }, []);

  return (
    <Container>
      <div className="products">
        {singleDrink === null || isFetching === true ? (
          <LoadingSpinner />
        ) : (
          <Display
            title={singleDrink.wine_brand.brand_title}
            paragraph={singleDrink.wine_description}
            image={singleDrink.wine_brand.brand_image}
          />
        )}
        <div className="product-filters">
          <h3>Filter</h3>
          <div className="product-filters_grid">
            <CustomSelect name="category_filter" id="category_filter">
              <option value="0" disabled selected>
                Category
              </option>
              <option value="option-1">Option 1</option>
              <option value="option-2">Option 1</option>
            </CustomSelect>

            <CustomSelect name="color_filter" id="color_filter">
              <option value="0" disabled selected>
                Color
              </option>
              <option value="option-1">Option 1</option>
              <option value="option-2">Option 1</option>
            </CustomSelect>
            <CustomSelect name="price_filter" id="price_filter">
              <option value="0" disabled selected>
                Price
              </option>
              <option value="option-1">Option 1</option>
              <option value="option-2">Option 1</option>
            </CustomSelect>
            <CustomSelect name="brand_filter" id="brand_filter">
              <option value="0" disabled selected>
                Brand
              </option>
              <option value="option-1">Option 1</option>
              <option value="option-2">Option 1</option>
            </CustomSelect>
          </div>
        </div>
        <div className="products_listing">
          <Grid container spacing={6}>
            {singleDrink === null || isFetching === true ? (
              <LoadingSpinner />
            ) : singleDrink.wine_flavours.length === 0 ? (
              <div>No Flavours Founds</div>
            ) : (
              singleDrink.wine_flavours.map((flavour) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard
                      key={flavour.id}
                      title={flavour.wine_flavour_name}
                      productImg={flavour.wine_flavour_image}
                      totalRatings={4}
                      starRating={4}
                      linkTo={`/pixme/flavours/${flavour.id}`}
                      like={false}
                    />
                  </Grid>
                );
              })
            )}
          </Grid>
        </div>
      </div>
    </Container>
  );
}

export default FlavoursOverview;
