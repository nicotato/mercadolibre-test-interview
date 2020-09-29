import React from "react";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import "./DetailsProduct.scss";
const DetailsProduct = ({ item }) => {
  console.log(item);
  return (
    <div className="product-detail-component">
      {!!item && (
        <>
          <div className="product-detail-image">
            <img
              src={item.picture}
              alt={item.title}
              loading="eager"
            />
          </div>
          <div className="product-detail-info">
            <ProductInfo item={item} />
          </div>
          <div className="product-detail-description">
            <h2>Descripción del producto</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: item.description,
              }}
            ></div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailsProduct;
