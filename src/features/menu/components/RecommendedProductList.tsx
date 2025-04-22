import { ProductList } from "../../../types/product";
import { RecommendedProduct } from "./RecommendedProduct";

export function RecommendedProductList({products}: ProductList) {
  return (
    <article className="main-products">
      {
        products.map(({name, price, imageUrl, id}) => (
          <RecommendedProduct name={name} price={price} imageUrl={imageUrl} key={id} id={id} />
        ))
      } 
    </article>
  );
}
