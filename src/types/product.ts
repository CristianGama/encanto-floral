export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

export type ProductList = {
  products: Product[];
};
