import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import CustomSelect from "../../components/custom-select/custom-select.component";
import ProductCard from "../../components/product-card/product-card.component";
import { fetchDrinksStart } from "../../redux/products/products.action";
import { Container, Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import ProductFilters from "../../components/product-filters/ProductFilters";
import "./drinks-overview.styles.css";

function DrinksOverview() {
  const { drinks: drinks } = useSelector((state) => state.drinks);
  const dispatch = useDispatch();
  const location = useLocation();
  // const [pagination, setPagination] = useState(false);
  const isFetching = useSelector((state) => state.drinks.isFetching);

  useEffect(() => {
    if (drinks === null) {
      dispatch(fetchDrinksStart(1, 0));
    }
  }, [drinks]);

  const handlePaginationChange = (page) => {
    if (page === 1) {
      dispatch(fetchDrinksStart(page, 0));
    } else {
      dispatch(fetchDrinksStart(page, page * 10 - 10));
    }
  };

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Re-Spirit Your Life with Flavorful Drinks | Pix Me A Drink
        </title>
        <meta
          data-react-helmet="true"
          name="description"
          content="Enter the dark spirits alcohol world! From Johnnie Walker to Jimmy Dean, and other dark alcohol brands, prepare to immerse yourself and forget everything else."
        />
        <meta
          data-react-helmet="true"
          name="title"
          content="Spirits Drink | Alcoholic Drinks Brands | Pix Me A Drink"
        />
        <link rel="canonical" href="https://pixmeadrink.com/drinks" />
      </Helmet>
      <div className="products">
        {/* <ProductFilters /> */}
        <div className="products_listing">
          <Grid container spacing={6}>
            {drinks === null || isFetching === true ? (
              <LoadingSpinner />
            ) : (
              drinks.data.map((wine) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard
                      key={wine.id}
                      title={wine.wine_title}
                      productImg={wine.wine_image}
                      linkTo={`${location.pathname}/flavour/${wine.slug}`}
                    />
                  </Grid>
                );
              })
            )}
          </Grid>
        </div>
        <div className="product-pagination">
          {drinks === null ? null : (
            <Pagination
              page={Number(drinks.current_page)}
              count={drinks.total_pages}
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
