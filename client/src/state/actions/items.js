import { items } from "../../api";
import {
  GET_ITEM_ID,
  GET_SEARCH_ITEMS,
} from "./actionsType";
export function getItem(id) {
  return async function (dispatch) {
    try {
      const data = await items.getItem(id);
      dispatch({ payload: data, type: GET_ITEM_ID });
    } catch (er) {
      console.log(er);
    }
  };
}
export function getSearchItems(params) {
  return async function (dispatch) {
    try {
      const data = await items.getSearchItems(params);
      dispatch({ payload: data, type: GET_SEARCH_ITEMS });
    } catch (err) {
      console.log(err);
    }
  };
}
