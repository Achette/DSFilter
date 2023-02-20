import React from "react";
import { CardListProps } from "../../types";
import "./styles.css";

export const CartListing = ({ product }: CardListProps) => {
  return (
    <section>
      <div className="cart-listing-container container-body">
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>R$ {product.price.toFixed(2)}</p>
        </div>
      </div>
    </section>
  );
};
