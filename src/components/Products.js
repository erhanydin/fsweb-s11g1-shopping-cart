import React from "react";
import styled from "styled-components";

import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

// Components
import Product from "./Product";

const ScProducts = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);

    img {
      width: 100%;
    }
  }
`;

const Products = (props) => {

  const {products, addItem} = useContext(ProductContext);

  return (
    <ScProducts>
      {products.map((product) => (
        <Product key={product.id} product={product} addItem={addItem} />
      ))}
    </ScProducts>
  );
};

export default Products;
