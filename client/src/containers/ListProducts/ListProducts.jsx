import React from "react";
import "./ListProducts.scss";
import ItemProduct from "./ItemProduct/ItemProduct";

const ListProducts = ({ items = [] }) => {
  return (
    <div className="list-products-component">
      <ul>
        {items.slice(0, 4).map((item, i) => (
          <ItemProduct key={i} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ListProducts;
