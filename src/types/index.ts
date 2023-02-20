export type ProductDTO = {
  id: number;
  name: string;
  price: number;
};

export type ButtonProps = {
  title: string;
};

export type FormDataProps = {
  minPrice: number;
  maxPrice: number;
};

export type FilterProps = {
  onFilter: (arg1: number, arg2: number) => void;
};

export type QueryParams = {
  minPrice: number;
  maxPrice: number;
};

export type CardListProps = {
  product: ProductDTO
}