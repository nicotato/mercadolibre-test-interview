import React from "react";
import "./Container.scss";
const Container = ({ children }) => {
  return (
    <div className="container-component">
      <div className="box-container-component">
        {children}
      </div>
    </div>
  );
};

export default Container;
