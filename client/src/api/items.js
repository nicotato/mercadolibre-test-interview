import { instanceApiML } from "../axios.config";

export async function getSearchItems(_params) {
  const queryString = new URLSearchParams(
    _params
  ).toString();

  return await instanceApiML.get(`items?${queryString}`);
}
export async function getItem(id) {
  return await instanceApiML.get(`items/${id}`);
}
