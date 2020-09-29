import React from "react";
import SearchBoxHeader from "../../components/SearchBoxHeader/SearchBoxHeader";
import logoImg from "../../assets/logos/Logo_ML.png";
import logoImg2x from "../../assets/logos/Logo_ML@2x.png";
import "./Header.scss";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header className="">
      <div className="header-component">
        <Container>
          <div className=" header-box-bound">
            <div className="header-box-logo">
              <a className="" href="/">
                <img
                  className="header-logo"
                  src={logoImg2x}
                  alt="logo"
                  srcSet={`${logoImg}, ${logoImg2x} 2x`}
                />
              </a>
            </div>
            <div className="header-search-box-header">
              <SearchBoxHeader col={10} />
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
