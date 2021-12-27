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
import ProductFilters from "../../components/product-filters/ProductFilters";
import "./flavours-overview.styles.css";
import { Helmet } from "react-helmet";
import { URL } from "../../config";

function FlavoursOverview() {
  const { singleDrink, isFetching } = useSelector((state) => state.drinks);
  const dispatch = useDispatch();
  // const location = useLocation();
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${singleDrink?.wine_brand?.brand_title} | Pix Me A Drink`}</title>
        <meta
          data-react-helmet="true"
          name="title"
          content={singleDrink?.meta_title}
        />
        <meta
          data-react-helmet="true"
          name="description"
          content={singleDrink?.meta_description}
        />
        <meta
          data-react-helmet="true"
          name="keywords"
          content={singleDrink?.keywords}
        />
        <link
          rel="canonical"
          href={`https://pixmeadrink.com/drinks/flavour/${singleDrink?.slug}`}
        />
      </Helmet>
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
        {/* <ProductFilters /> */}
        <div className="products_listing">
          <Grid container spacing={6}>
            {singleDrink === null || isFetching === true ? (
              <LoadingSpinner />
            ) : singleDrink.wine_flavours.length === 0 ? (
              <div>No Flavours Founds</div>
            ) : (
              singleDrink.wine_flavours.map((flavour) => {
                return (
                  <Grid key={flavour.id} item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard
                      title={flavour.wine_flavour_name}
                      productImg={flavour.wine_flavour_image}
                      totalRatings={4}
                      starRating={4}
                      linkTo={`${URL}/flavours/${flavour.slug}`}
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
