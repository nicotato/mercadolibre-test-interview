import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import DetailsProduct from "../../containers/DetailsProduct/DetailsProduct";
import { useSelector, useDispatch } from "react-redux";
import { getItem } from "../../state/actions";
const DetailProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { item, categories } = useSelector(
    ({ items: { item = undefined, categories = [] } }) => ({
      item,
      categories,
    })
  );
  useEffect(() => {
    id && dispatch(getItem(id));
  }, [dispatch, id]);
  return (
    <div className="detail-product-component">
      <BreadCrumb categories={categories} />
      <DetailsProduct item={item} />
    </div>
  );
};

export default DetailProduct;
