import React, { useState } from "react";
import "./SearchBoxHeader.scss";
import searchIcon from "../../assets/icons/ic_Search.png";
import searchIcon2x from "../../assets/icons/ic_Search@2x.png";
import { Link } from "react-router-dom";
const SearchBoxHeader = () => {
  const [state, setState] = useState({
    boxValueSearch: "",
  });
  return (
    <div className="search-box-header-component">
      <form
        className="seach-box-component"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="search-box-input"
          type="text"
          onChange={(e) =>
            setState({ boxValueSearch: e.target.value })
          }
        />
        <Link
          {...(!!state.boxValueSearch
            ? {
                to: {
                  pathname: "/items",
                  search: `?search=${state.boxValueSearch}`,
                  state: { fromDashboard: true },
                },
              }
            : { to: "/" })}
        >
          <button className="search-box-button-icon">
            <img
              src={searchIcon2x}
              alt="Buscar Producto"
              srcSet={`${searchIcon}, ${searchIcon2x} 2x`}
            />
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SearchBoxHeader;
