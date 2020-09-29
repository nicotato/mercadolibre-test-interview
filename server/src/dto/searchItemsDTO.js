import AuthorDTO from "../models/authorDTO";
import ItemDTO from "../models/itemDTO";

class SearchItemsDTO {
  constructor(author, categories, items) {
    this.author = author;
    this.categories = categories;
    this.items = items;
  }
}
export default SearchItemsDTO;
