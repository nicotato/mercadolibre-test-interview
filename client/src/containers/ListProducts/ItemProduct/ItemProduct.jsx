import React from "react";
import { Link } from "react-router-dom";
import { normalize_price_text } from "../../../utils/prices";
import "./ItemProduct.scss";
import shippingIcon from "../../../assets/icons/ic_shipping.png";
import shippingIcon2x from "../../../assets/icons/ic_shipping@2x.png";
const ItemProduct = ({ item = {} }) => {
  return (
    <li className="item-product-component">
      <Link to={`/items/${item.id}`}>
        <div className="content">
          <div className="picture">
            <img
              loading="lazy"
              src={item.picture}
              alt="imagen provisoria"
            />
          </div>
          <div className="info">
            <div className="price">
              <h2>{normalize_price_text(item.price)}</h2>
              {item.free_shipping && (
                <img
                  className="logo-shipping"
                  src={shippingIcon2x}
                  alt="logo"
                  srcSet={`${shippingIcon}, ${shippingIcon2x} 2x`}
                  height="20"
                />
              )}
            </div>

            <div className="description">
              <h3>{item.title}</h3>
            </div>
            <div className="city">
              <h5>{item.address}</h5>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ItemProduct;
