"use client"
import React, { useEffect, useState } from "react";
import Error from "next/error";

import { useQuery } from "@tanstack/react-query";
import Product from "./components/Product";
import Category from "./components/Category";
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

  const categories = getUniqueObjects(categoryProduct, "category");
  const [selectedOption, setSelectedOption] = useState(null);
  const [sortData, setSortData] = useState(null);

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


  return (
    <div className="py-20 px-6 grid place-items-center space-y-7">
      <div className="w-full flex justify-end gap-4 max-w-7xl">
        <div>
          <h4 className="pb-1 text-sm font-semibold text-gray-500 text-right">
            Filter
          </h4>
          <Category
            options={categories}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
        <div>
          <h4 className="pb-1 text-right text-sm font-semibold text-gray-500">
            Sort
          </h4>
          <SortProduct
            sortOptions={sortOptions}
            sortData={sortData}
            setSortData={setSortData}
          />
        </div>
      </div>

      <Product ctry={selectedOption} data={data} sortData={sortData} setSortData={setSortData} />
    </div>
  );
}

export default ProductPage;
