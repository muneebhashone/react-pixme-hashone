import React from "react";
import LoadingSpinner from "../loading-spinner/loading-spinner.component";
import ProductCard from "../product-card/product-card.component";
import { Grid } from "@material-ui/core";

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
        <ProductCard
          key={result.id}
          title={result.wine_title}
          productImg={result.wine_image}
          totalRatings={4}
          starRating={4}
          linkTo={`/pixme/drinks/flavour/${result.id}`}
          like={false}
        />
      );
    }

    if (type === "ingredients") {
      return (
        <ProductCard
          key={result.id}
          title={result.wine_flavour_name}
          productImg={result.wine_flavour_image}
          totalRatings={4}
          starRating={4}
          linkTo={`/pixme/flavours/${result.id}`}
          like={false}
        />
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
          <Grid item xs={12} sm={6} md={4} lg={3}>
            {handleProductData(data, type)}
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default Listings;
