import React from 'react'
import { useNavigate } from "react-router-dom"

const Products = ({item}) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`item/${item.id}`)} className="w-[298px] p-0  ml-11 mb-5 mx-0 my-0 border rounded-md relative cursor-pointer">
    <div className="font-bold text-2xl absolute top-0 right-0 bg-black text-white p-1 m-1 rounded-md">
      {item.price} <span className="text-sm">TL</span>
    </div>
    <img
      className="w-[200px] h-[200px] mt-10 object-scale-down m-auto"
      src={item.image}
      alt=""
    />
    <div className="text-center mt-1">{item.title}</div>
  </div>
  )
}

export default Products