import React from "react";
import LoadingSpinner from "../loading-spinner/loading-spinner.component";
import ProductCard from "../product-card/product-card.component";
import { Grid } from "@material-ui/core";
import { URL } from "../../config";

function Listings({ data, isFetching, type }) {
  const handleProductData = (data, type) => {
    if (type === "spirits") {
      return data.map((result) => handleProductCard(result, type));
    }

    if (type === "ingredients") {
      return data.map((result) => handleProductCard(result, type));
    }
  };

  const handleProductCard = (result, type) => {
    if (type === "spirits") {
      return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductCard
            key={result.id}
            title={result.wine_title}
            productImg={result.wine_image}
            linkTo={`${URL}/drinks/flavour/${result.id}`}
          />
        </Grid>
      );
    }

    if (type === "ingredients") {
      return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductCard
            key={result.id}
            title={result.wine_flavour_name}
            productImg={result.wine_flavour_image}
            totalRatings={4}
            starRating={4}
            linkTo={`${URL}/flavours/${result.id}`}
            like={false}
          />
        </Grid>
      );
    }
  };

  return (
    <div className="products_listing">
      <Grid container spacing={6}>
        {data === null || isFetching === true ? (
          <LoadingSpinner />
        ) : data.length === 0 ? (
          <div>No search results found</div>
        ) : (
          handleProductData(data, type)
        )}
      </Grid>
    </div>
  );
}

export default Listings;
