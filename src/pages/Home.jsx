import React, { useState } from 'react'
import SliderComp from '../component/home/SliderComp'
import Sorting from '../component/home/Sorting'
import Category from '../component/home/Category'
import Product from '../component/home/Product'


const Home = () => {

  const [sort,setSort]=useState("");
  const [category,setCategory]=useState("");

  return (
    <div>
      <SliderComp/>
      <Sorting setSort={setSort}/>
      <div className='flex'>
        <Category setCategory={setCategory}/>
        <Product category={category} sort={sort}/>
        
      </div>
    </div>
  )
}

export default Home