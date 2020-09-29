const { default: ItemDTO } = require("./itemDTO");

class ItemDetailDTO extends ItemDTO {
  constructor(json) {
    super(json);
    this.description = json.description?.plain_text;
    this.sold_quantity = json.sold_quantity;
  }
}
export default ItemDetailDTO;
