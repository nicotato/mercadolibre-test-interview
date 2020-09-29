import React from "react";
import { normalize_price_text } from "../../../../utils/prices";
import shippingIcon from "../../../../assets/icons/ic_shipping.png";
import shippingIcon2x from "../../../../assets/icons/ic_shipping@2x.png";
import "./ProductInfo.scss";
const ProductInfo = ({ item }) => {
  return (
    <div className="product-info-component">
      <h4>
        {item.condition} - {item.sold_quantity} vendidos
      </h4>
      <h2>
        {item.title}
        {item.free_shipping && (
          <img
            className="logo-shipping"
            src={shippingIcon2x}
            alt="logo"
            srcSet={`${shippingIcon}, ${shippingIcon2x} 2x`}
            height="20"
          />
        )}
      </h2>
      <h1>{normalize_price_text(item.price)}</h1>
      <button>Comprar</button>
    </div>
  );
};

export default ProductInfo;
