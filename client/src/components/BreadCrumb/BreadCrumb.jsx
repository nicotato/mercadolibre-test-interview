import React from "react";
import "./BreadCrumb.scss";
const BreadCrumb = ({ categories = [] }) => {
  return (
    <div className="bread-crumb-componet">
      {categories.length
        ? categories.map((cat, i) => (
            <a key={i} href="/">
              <span>{cat}</span>
            </a>
          ))
        : ""}
    </div>
  );
};

export default BreadCrumb;
