import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct } from "../redux/productSlice";
import DetailComp from "../component/home/DetailComp";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);

  
  return(
  <div>
    <DetailComp productDetail={productDetail}/>
  </div>
  )
};

export default Detail;
