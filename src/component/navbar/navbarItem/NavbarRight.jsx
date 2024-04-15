import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartTotal } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const NavbarRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { carts } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);


  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center border p-2 rounded-md bg-gray-200">
        <input
          className="outline-none bg-gray-200"
          type="text"
          placeholder="Search"
        />
        <BiSearch size={28} />
      </div>
      <FaRegHeart size={20} />
      <div onClick={()=>navigate("cart")} className="relative">
        <div  className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
          {carts.length}
        </div>
        <SlBasket size={28} />
      </div>
    </div>
  );
};

export default NavbarRight;
