import React, { useEffect } from "react";
import { getCartTotal, removeFromCart } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts,totalAmount } = useSelector((state) => state.carts);


useEffect(()=>{
  dispatch(getCartTotal())
},[dispatch])
  
  console.log(carts);
  return (
    <div>
      {carts.map((item, i) => (
        <div className="flex items-center justify-between">
          <div className="w-[150px] my-5"><img src={item.image} alt="" /></div>
          <div className=" text-xl">{item.title}</div>
          <div className="text-3xl font-bold">{item.price}</div>
          <div><button onClick={()=>dispatch(removeFromCart({id:item.id}))}  className="border w-[150px] h-[80px] bg-red-600 text-white rounded-md items-center justify-center cursor-pointer">Ürünü Sil</button></div>
        </div>
      ))}
      <div className="justify-end flex font-bold text-4xl">Toplam : <span>{totalAmount}</span></div>
    </div>
  );
};

export default Cart;
