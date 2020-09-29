import { items } from "../services";
import AuthorDTO from "../models/authorDTO";
import ItemDTO from "../models/itemDTO";
import PriceDTO from "../models/priceDTO";
import ItemDetailDTO from "../models/ItemDetailDTO";
import SearchItemsDTO from "../dto/searchItemsDTO";
import ItemDescriptionDTO from "../dto/itemDescriptionDTO";

export async function getSearch(
  query = { search: "casa", limit: 4 }
) {
  console.log(query);
  const arrPromise = await Promise.all([
    items.getCurrencies(),
    items.getSearchItems({
      q: query.search,
      ...(query.limit && { limit: query.limit }),
    }),
  ]);
  const currencies = arrPromise[0];
  const data = arrPromise[1];

  const author = new AuthorDTO({
    name: "Nicolás",
    lastname: "Tato",
  });
  const categories = _getCategories(data.filters);
  const _items = _buildItemsArray(data.results, currencies);
  const dto = new SearchItemsDTO(
    author,
    categories,
    _items
  );
  return dto;
}
export async function getItem(id = "MLA771861154") {
  try {
    const arrResponse = await Promise.all([
      items.getItem(id),
      items.getItemDescription(id),
      items.getCurrencies(),
    ]);
    const item = arrResponse[0];
    const description = arrResponse[1];
    const currencies = arrResponse[2];
    const categories = await items.getCategories(
      item.category_id
    );
    console.log(categories);
    const author = new AuthorDTO({
      name: "Nicolás",
      lastname: "Tato",
    });
    const itemResponse = new ItemDescriptionDTO({
      author,
      categories: categories.path_from_root.map(
        (path) => path.name
      ),
      item: _buildItemDescription(
        item,
        currencies,
        description
      ),
    });
    return itemResponse;
  } catch (error) {
    console.log(error);
  }
}
function _buildItemsArray(results, currencies) {
  const _currencies = currencies.reduce(
    (acc, ac) => ({ [ac.id]: ac, ...acc }),
    {}
  );
  return results.map(
    (item) =>
      new ItemDTO({
        ...item,
        price: new PriceDTO(
          _currencies[item.currency_id].symbol,
          item.price,
          _currencies[item.currency_id].decimal_places
        ),
      })
  );
}
function _buildItemDescription(
  item,
  currencies,
  description
) {
  const _currencies = currencies.reduce(
    (acc, ac) => ({ [ac.id]: ac, ...acc }),
    {}
  );
  return new ItemDetailDTO({
    ...item,
    price: new PriceDTO(
      _currencies[item.currency_id].symbol,
      item.price,
      _currencies[item.currency_id].decimal_places
    ),
    description,
  });
}
function _getCategories(filters) {
  try {
    const categoryFilter = filters.find(
        (filter) => filter.id === "category"
      ),
      value = categoryFilter.values[0];
    return value.path_from_root.map((path) => path.name);
  } catch (e) {
    return [];
  }
}
