import React from "react";
import CustomSelect from "../custom-select/custom-select.component";

function ProductFilters() {
  return (
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
  );
}

export default ProductFilters;
