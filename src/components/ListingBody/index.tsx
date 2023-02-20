import React from "react";
import { ProductDTO, QueryParams } from "../../types";
import { CardFilter } from "../CardFilter";
import { CartListing } from "../CartListing";
import * as productService from "../../services/product-service";
import { ContextNumberCount } from "../../context/context-product-count";

export const ListingBody = () => {
  const { setContexNumberCount } =
    React.useContext(ContextNumberCount);

  const [products, setProducts] = React.useState<ProductDTO[]>([]);

  const [queryParams, setQueryParams] = React.useState<QueryParams>({
    minPrice: 0,
    maxPrice: Number.MAX_VALUE,
  });

  React.useEffect(() => {
    const loadProducts: ProductDTO[] = productService.findAll();
    setProducts(loadProducts);

    if (queryParams.minPrice !== 0 || queryParams.maxPrice !== 0) {
      const filteredProducts: ProductDTO[] = productService.findByPrice(
        queryParams.minPrice,
        queryParams.maxPrice
      );
      setProducts(filteredProducts);

      setContexNumberCount(
        productService.findByPrice(queryParams.minPrice, queryParams.maxPrice)
          .length
      ); 
    }
  }, [queryParams.maxPrice, queryParams.minPrice, setContexNumberCount]);

  const handleOnFilter = (minPrice: number, maxPrice: number) => {
    setQueryParams({ ...queryParams, minPrice, maxPrice });
  };
  return (
    <main className="container-body-960">
      <CardFilter onFilter={handleOnFilter} />
      {products.map((product) => (
        <CartListing key={product.id} product={product} />
      ))}
    </main>
  );
};
