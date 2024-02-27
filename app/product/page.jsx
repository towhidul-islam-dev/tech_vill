"use client";
import React, { useEffect, useState, useContext } from "react";
import Error from "next/error";
import { useSearchParams } from "next/navigation";

import { useQuery } from "@tanstack/react-query";

import CartContextProvider from "../../context/CartContext";
import Category from "./components/Category";
import Product from "./components/Product";
import SortProduct from "./components/SortingProduct";

const sortOptions = [
  { id: 1, name: "default", value: "default" },
  { id: 2, name: "price", value: "price" },
  { id: 3, name: "category", value: "category" },
  { id: 4, name: "brand", value: "brand" },
  { id: 5, name: "rating", value: "rating" },
];

function ProductPage() {
  const [categoryProduct, setCategoryProduct] = useState([]);
  // const params = useSearchParams().get("category");

  const categories = getUniqueObjects(categoryProduct, "category");
  const [selectedOption, setSelectedOption] = useState(null);
  const [sortData, setSortData] = useState(null);
  const { cart, setCart, setUnFilteredCart, addToCart } =
    useContext(CartContextProvider);

  function getUniqueObjects(arr, property) {
    const uniqueObjects = [];
    const uniqueValues = {};

    for (const obj of arr) {
      const value = obj[property];

      if (!uniqueValues[value]) {
        uniqueValues[value] = true;
        uniqueObjects.push(obj);
      }
    }
    const id = new Date().getTime();
    const newObj = { id, category: "default" };
    uniqueObjects.unshift(newObj);

    return uniqueObjects;
  }

  const fetchingData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=90");
    const data = await res.json();

    if (!res.ok) throw Error("Something wrong with the response");

    localStorage.setItem("data", JSON.stringify(data.products));
    return data;
  };

  const { data } = useQuery({
    queryKey: ["store data"],
    queryFn: fetchingData,
  });

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("data"));
    if (items) {
      setCategoryProduct(items);
    }
    setSelectedOption("default");
    setSortData("default");
  }, []);
  useEffect(() =>{
    params && setSelectedOption(params)
  },[params])

  return (
    <div className="grid px-6 pt-8 sm:pt-28 place-items-center space-y-7">
      <div className="flex justify-end w-full gap-4 max-w-7xl z-30">
        <div>
          <h4 className="pb-1 text-sm font-semibold text-right text-gray-500">
            Filter
          </h4>
          <Category
            options={categories}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
        <div>
          <h4 className="pb-1 text-sm font-semibold text-right text-gray-500">
            Sort
          </h4>
          <SortProduct
            sortOptions={sortOptions}
            sortData={sortData}
            setSortData={setSortData}
          />
        </div>
      </div>

      <Product
        ctry={selectedOption}
        data={data}
        sortData={sortData}
        setSortData={setSortData}
        cart={cart}
        setCart={setCart}
        addToCart={addToCart}
        setUnFilteredCart={setUnFilteredCart}
      />
    </div>
  );
}

export default ProductPage;
