import AuthorDTO from "../models/authorDTO";

class ItemDescriptionDTO {
  constructor({ author, categories, item }) {
    this.author = author;
    this.categories = categories;
    this.item = item;
  }
}
export default ItemDescriptionDTO;
