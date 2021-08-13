import React, { useState } from "react";
import CustomSelect from "../../components/custom-select/custom-select.component";
import ProductCard from "../../components/product-card/product-card.component";
import Display from "../../components/display/display.component";
import { Container } from "@material-ui/core";
import productImg from "../../assets/product-img.png";
import image1 from "../../assets/product-image-1.png";
import image2 from "../../assets/product-image-2.png";
import image3 from "../../assets/product-image-3.png";
import image4 from "../../assets/product-image-4.png";
import "./products.styles.css";

const productsArray = [
  {
    id: 1,
    title: "Product 1",
    image: image1,
    starRating: 3,
    totalRatings: 45,
    like: true,
  },
  {
    id: 2,
    title: "Product 2",
    image: image2,
    starRating: 4,
    totalRatings: 20,
    like: true,
  },
  {
    id: 3,
    title: "Product 3",
    image: image3,
    starRating: 5,
    totalRatings: 30,
    like: false,
  },
  {
    id: 4,
    title: "Product 4",
    image: image4,
    starRating: 2.5,
    totalRatings: 10,
    like: false,
  },
];

function Products() {
  let [products, setProducts] = useState(productsArray);

  return (
    <Container>
      <div className="products">
        <Display
          title="Smirnoff - Vodka"
          paragraph="Lorem Ipsum is simply a sample text used in the printing and stacking industry. It has been the industry's main test text since the 1500s, when an unknown printer took a lot of random text to make a print sample."
          image={productImg}
        />
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
          {products.map(
            ({ id, title, image, totalRatings, starRating, like }) => {
              return (
                <ProductCard
                  key={id}
                  title={title}
                  productImg={image}
                  totalRatings={totalRatings}
                  starRating={starRating}
                  linkTo={`?id=${id}`}
                  like={like}
                />
              );
            }
          )}
        </div>
      </div>
    </Container>
  );
}

export default Products;
