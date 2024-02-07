import React from 'react'
import {
    cat1,
    cat2,
    cat3,
    cat4,
    cat5,
    cat9,
    cat11,
    cat12,
    cat13,
   
  } from "../assets";

const Categories = () => {
  return (
    <div>
      <Categories img={cat1} Name={"Peach"} items={14} />
        <Categories img={cat2} Name={"Cake and Milk"} items={12} />
        <Categories img={cat3} Name={"organic kiwi"} items={41} />
        <Categories img={cat4} Name={"Red Apple"} items={6} />
        <Categories img={cat5} Name={"Snack"} items={21} />
        <Categories img={cat9} Name={"Vegetables"} items={15} />
        <Categories img={cat11} Name={"Strawberry"} items={17} />
        <Categories img={cat12} Name={"Black Plum"} items={19} />
        <Categories img={cat13} Name={"Custard apple"} items={18} />
    </div>
  )
}

export default Categories
