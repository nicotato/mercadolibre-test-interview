import {
  GET_ITEM_ID,
  GET_SEARCH_ITEMS,
} from "../actions/actionsType";

function itemsReducer(state = {}, action) {
  switch (action.type) {
    case GET_ITEM_ID:
      return {
        ...state,
        ...action.payload,
      };
    case GET_SEARCH_ITEMS:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}
export default itemsReducer;
