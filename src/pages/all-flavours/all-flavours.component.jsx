import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import CustomSelect from "../../components/custom-select/custom-select.component";
import ProductCard from "../../components/product-card/product-card.component";
import { fetchFlavoursStart } from "../../redux/products/products.action";
import { Container, Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import ProductFilters from "../../components/product-filters/ProductFilters";
import "./all-flavours.styles.css";

function DrinksOverview() {
  const { flavours } = useSelector((state) => state.drinks);
  const dispatch = useDispatch();
  const location = useLocation();
  const [pagination, setPagination] = useState(false);
  const isFetching = useSelector((state) => state.drinks.isFetching);

  useEffect(() => {
    if (flavours === null) {
      dispatch(fetchFlavoursStart(1, 0));
    } else {
      setPagination(true);
    }
  }, [flavours]);

  const handlePaginationChange = (page) => {
    if (page === 1) {
      dispatch(fetchFlavoursStart(page, 0));
    } else {
      dispatch(fetchFlavoursStart(page, page * 10 - 10));
    }
  };

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Flavor Alcohol Drinks | Alcohol Drinks Mix | Pix Me A Drink</title>
        <meta
          name="title"
          content="Flavor Alcohol Drinks | Alcohol Drinks Mix | Pix Me A Drink"
        />
        <meta
          name="description"
          content="Recreate ingredients mixed drinks using a Pix Me A Drink’s recipe. Whether a Gentleman Ginger or A Hole in One, try unlimited cocktail ingredients in one place!"
        />
        <link rel="canonical" href="https://pixmeadrink.com/flavours" />
      </Helmet>
      <div className="products">
        {/* <Display
          title="Smirnoff - Vodka"
          paragraph="Lorem Ipsum is simply a sample text used in the printing and stacking industry. It has been the industry's main test text since the 1500s, when an unknown printer took a lot of random text to make a print sample."
          image={productImg}
        /> */}
        {/* <ProductFilters /> */}
        <div className="products_listing">
          <Grid container spacing={6}>
            {flavours === null || isFetching === true ? (
              <LoadingSpinner />
            ) : (
              flavours.data.map((flavour) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard
                      key={flavour.id}
                      title={flavour.wine_flavour_name}
                      productImg={flavour.wine_flavour_image}
                      totalRatings={4}
                      starRating={4}
                      linkTo={`${location.pathname}/${flavour.slug}`}
                      like={false}
                    />
                  </Grid>
                );
              })
            )}
          </Grid>
        </div>
        <div className="product-pagination">
          {flavours === null ? null : (
            <Pagination
              page={Number(flavours.current_page)}
              count={flavours.total_pages}
              shape="rounded"
              onChange={(event, page) => handlePaginationChange(page)}
            />
          )}
        </div>
      </div>
    </Container>
  );
}

export default DrinksOverview;
