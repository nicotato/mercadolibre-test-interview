import { instanceApiML } from "../axios.config";

export async function getSearchItems(_params) {
  const queryString = new URLSearchParams(
    _params
  ).toString();

  return await instanceApiML.get(
    `sites/MLA/search?${queryString}`
  );
}

export async function getItem(id) {
  // return await instanceApiML.get("items/".concat(id));
  return await instanceApiML.get(`items/${id}`);
}

export async function getItemDescription(id) {
  return await instanceApiML.get(`items/${id}/description`);
}
export async function getCurrencies() {
  return await instanceApiML.get(`/currencies`);
}
export async function getCategories(id) {
  return await instanceApiML.get(`categories/${id}`);
}
