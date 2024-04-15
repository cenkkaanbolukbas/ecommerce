import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart,removeFromCart } from "../../redux/cartSlice";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    if (quantity < productDetail.rating.count) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const addBasket = () => {
    dispatch(addToCart({ id: productDetail?.id, title: productDetail?.title, price: productDetail?.price, image: productDetail?.image, quantity:quantity }));
  };
  const clearBasket = () => {
    dispatch(clearCart());
  };
  const removeBasket = () => {
    dispatch(removeFromCart({id: productDetail?.id}));
  };
  return (
    <div className="flex my-20">
      <img
        className="w-[700px] h-[700px] object-contain"
        src={productDetail.image}
        alt=""
      />
      <div className="my-16 ml-10">
        <div className="text-4xl font-bold">{productDetail.title}</div>
        <div className="mt-3 text-lg">{productDetail.description}</div>
        <div className="text-lg text-red-500">
          Rating: {productDetail?.rating?.rate}
        </div>
        <div className="text-lg text-red-500">
          Count: {productDetail?.rating?.count}
        </div>
        <div className="mt-3 font-bold text-7xl">
          {productDetail.price}
          <span className="text-sm">₺</span>
        </div>
        <div className="mt-3 flex gap-2 items-center ">
          <div onClick={decrement} className="text-4xl cursor-pointer">
            -
          </div>
          <input
            className="w-16 text-center text-4xl"
            type="text"
            value={quantity}
          />
          <div onClick={increment} className="text-4xl cursor-pointer">
            +
          </div>
        </div>
        <button
          onClick={addBasket}
          className="border w-[200px] bg-slate-600 h-14 rounded-md mt-3 text-red-400  text-xl"
        >
          Sepete Ekle
        </button>
        <button
          onClick={clearBasket}
          className="border w-[200px] bg-slate-600 h-14 rounded-md mt-3 text-red-400  text-xl"
        >
          Temizle
        </button>
        <button
          onClick={removeBasket}
          className="border w-[200px] bg-slate-600 h-14 rounded-md mt-3 text-red-400  text-xl"
        >
          RemoveItem
        </button>
      </div>
    </div>
  );
};

export default DetailComp;
