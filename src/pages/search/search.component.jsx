import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import CustomSelect from "../../components/custom-select/custom-select.component";
import { fetchSearchStart } from "../../redux/products/products.action";
import { Container } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import Listings from "../../components/listings/listings.component";
import "./search.styles.css";

function Search() {
  const { searchData, isFetching } = useSelector((state) => state.drinks);
  const dispatch = useDispatch();
  const [typeState, setTypeState] = useState("");
  const location = useLocation();
  // const [pagination, setPagination] = useState(false);

  const { q, type } = queryString.parse(location.search);

  useEffect(() => {
    console.log(queryString.parse(location.search));
    setTypeState(type);
    dispatch(fetchSearchStart(q, type));
  }, [q, type]);

  // const handlePaginationChange = (page) => {
  //   if (page === 1) {
  //     dispatch(fetchDrinksStart(page, 0));
  //   } else {
  //     dispatch(fetchDrinksStart(page, page * 10 - 10));
  //   }
  // };

  return (
    <Container>
      <div className="products">
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
        <Listings data={searchData} isFetching={isFetching} type={typeState} />
        {/* <div className="product-pagination">
          {searchData === null ? null : (
            <Pagination
              page={Number(searchData.current_page)}
              count={searchData.total_pages}
              shape="rounded"
              onChange={(event, page) => handlePaginationChange(page)}
            />
          )}
        </div> */}
      </div>
    </Container>
  );
}

export default Search;
