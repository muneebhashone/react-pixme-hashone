import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import CustomSelect from "../../components/custom-select/custom-select.component";
import ProductCard from "../../components/product-card/product-card.component";
import Display from "../../components/display/display.component";
import { fetchDrinksStart } from "../../redux/products/products.action";
import { Container } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import productImg from "../../assets/product-img.png";
import "./drinks-overview.styles.css";

function DrinksOverview() {
  const { drinks: drinks } = useSelector((state) => state.drinks);
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();
  const [pagination, setPagination] = useState(false);
  const isFetching = useSelector((state) => state.drinks.isFetching);

  useEffect(() => {
    if (drinks === null) {
      dispatch(fetchDrinksStart(1, 0));
    } else {
      setPagination(true);
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
      <div className="products">
        {/* <Display
          title="Smirnoff - Vodka"
          paragraph="Lorem Ipsum is simply a sample text used in the printing and stacking industry. It has been the industry's main test text since the 1500s, when an unknown printer took a lot of random text to make a print sample."
          image={productImg}
        /> */}
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
          {drinks === null || isFetching === true ? (
            <LoadingSpinner />
          ) : (
            drinks.data.map((wine) => {
              return (
                <ProductCard
                  key={wine.id}
                  title={wine.wine_title}
                  productImg={wine.wine_image}
                  totalRatings={4}
                  starRating={4}
                  linkTo={`${location.pathname}/flavour/${wine.id}`}
                  like={false}
                />
              );
            })
          )}
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
