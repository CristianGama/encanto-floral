import React from "react";
import { Product } from "../../../types/product";

export function RecommendedProduct({
  id,
  name,
  price,
  imageUrl,
}: Product) {
  return (
    <div className="main-product">
      <img src={imageUrl} alt="" />
      <p>{name}</p>
      <div className="main-product-details">
        <p className="main-product-price">{`$ ${price} MXN`}</p>
        <p className="main-product-add">Agregar</p>
      </div>
    </div>
  );
}
