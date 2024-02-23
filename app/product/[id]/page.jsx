"use client";
import React, { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";

import { useQuery } from "@tanstack/react-query";

import {
  ShareIcon,
  HeartIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";

import IdenticalProduct from "./IdenticalProduct";
// import { HeartIcon } from "@heroicons/react/24/solid";

function ProductPage() {
  const params = +useParams().id;
  const categoryParams = useSearchParams().get("category");
  const [relatedProduct, setRelatedProduct] = useState([]);

  const fetchingSpecificData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=90");
    const data = await res.json();

    if (!res.ok) throw Error("Something wrong with the response");

    // localStorage.setItem("data", JSON.stringify(data.products));
    const specificProduct = data?.products?.find(
      (product) => product.id === params
    );

    const categoryProduct = data?.products?.filter(
      (product) => product.category === categoryParams
    );

    setRelatedProduct(categoryProduct);

    return specificProduct;
  };
  const { data } = useQuery({
    queryKey: ["specific Data"],
    queryFn: fetchingSpecificData,
  });

  return (
    <div className="flex sm:items-center sm:justify-center flex-col px-6">
      <div className="grid place-items-start w-full max-w-7xl">
        <Link
          href="/product"
          className="flex justify-start text-sm hover:animate-pulse py-8 hover:text-blue-400 transition-colors ease-in-out duration-300"
        >
          <ChevronLeftIcon class="h-5 w-5 text-gray-500 " />
          Back to Product page
        </Link>
      </div>
      <div
        key={data?.id}
        className="sm:grid sm:grid-cols-3 bg-gray-100 rounded-md sm:place-items-center max-w-7xl w-full"
      >
        <div className="sm:col-span-2 p-6">
          <img
            className="aspect-square rounded-lg w-full"
            src={`${data?.images[0]}`}
            alt={data?.title}
            // width={300}
            // height={200}
          />
        </div>
        <div className="sm:col-span-1 space-y-4 w-full bg-gray-50 sm:h-full flex flex-col px-6 py-12 rounded-md ">
          <div className="space-y-3">
            <div className="">
              <p className="capitalize text-sm">{data?.category}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">{data?.title}</h2>
              <p className="text-sm mt-6">{data?.description}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="capitalize">price</h4>
              <h2 className="text-xl font-semibold">${data?.price}</h2>
            </div>
            <div>
              <button className="text-sm capitalize text-gray-100 rounded-md bg-violet-800 px-4 py-2">
                add to cart
              </button>
            </div>
          </div>

          <div>
            <p className="font-bold mb-4 border-b border-gray-50 pb-1">
              Product Details
            </p>
            <div>
              <h4>Brand : {data?.brand}</h4>
              <h4>
                Rating : {data?.rating}{" "}
                <span className="font-semibold text-sm">Out of 5</span>
              </h4>
              <h4>
                Stock : {data?.stock} <span>Available</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <IdenticalProduct categoryData={relatedProduct} />
    </div>
  );
}

export default ProductPage;
