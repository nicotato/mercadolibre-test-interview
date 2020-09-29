class ItemDTO {
  constructor(json) {
    this.id = json.id;
    this.title = json.title;
    this.price = json.price;
    this.picture = json.thumbnail;
    this.category = json.category_id;
    this.condition = json.condition;
    this.free_shipping = json.shipping.free_shipping;
    this.address = json.address?.state_name;
  }
}

export default ItemDTO;
