import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import SearchResult from "../../pages/SearchResult/SearchResult";
import DetailProduct from "../../pages/DetailProduct/DetailProduct";
import Header from "../../containers/Header/Header";
import Container from "../../containers/Container/Container";
import { getSearchItems } from "../../api/items";

function Home() {
  const [state, setState] = useState({
    searchResult: undefined,
  });
  const handle_searchItems = async (value) => {
    const result = await getSearchItems({
      search: value,
    });
    console.log("result", result);
    setState({
      ...state,
      searchResult: result,
    });
  };

  return (
    <div className="home-container">
      <Header searchValueClick={handle_searchItems} />
      <Container>
        <Switch>
          <Route exact path="/" children={<div />} />
          <Route exact path="/items">
            <SearchResult data={state.searchResult} />
          </Route>
          <Route
            path="/items/:id"
            component={DetailProduct}
          />
        </Switch>
      </Container>
    </div>
  );
}

export default Home;
