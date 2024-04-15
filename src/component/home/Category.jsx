import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = ({ setCategory }) => {
  
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="w-3/12 bg-gray-100 p-4 max-h-screen">
      <div className="font-bold border-b pb-2 flex justify-center text-xl ">
        KATEGORİ
      </div>
      {categories.map((item, id) => (
        <div
          className="text-lg flex justify-center p-1 mt-3 cursor-pointer hover:bg-gray-200 "
          onClick={()=>setCategory(item)}
          key={id}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Category;
