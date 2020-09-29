import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import ListProducts from "../../containers/ListProducts/ListProducts";
import { useDispatch, useSelector } from "react-redux";
import { getSearchItems } from "../../state/actions";

const SearchResult = () => {
  const query = useQuery();
  const attSearch = query.get("search");
  const dispatch = useDispatch();
  const state = useSelector(
    ({ items: { items = [], categories = [] } }) => ({
      items,
      categories,
    })
  );
  useEffect(() => {
    attSearch &&
      dispatch(
        getSearchItems({
          search: attSearch,
          limit: 4,
        })
      );
  }, [dispatch, attSearch]);

  return (
    <div className="search-result-container">
      <BreadCrumb categories={state.categories} />
      <ListProducts items={state.items} />
    </div>
  );
};
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default SearchResult;
