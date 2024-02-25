"use cleint";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const sortProductData = (arr, property) => {
  let data = [];

  if (property === "price" || property === "rating") {
    data = arr?.sort((a, b) => a[property] - b[property]);
  }

  if (property === "brand" || property === "category") {
    data = arr?.sort((a, b) => a[property].localeCompare(b[property]));
  }

  return data;
};

function Product({
  data,
  ctry,
  sortData,
  setSortData,
  cart,
  setCart,
  setUnFilteredCart,
  addToCart,
}) {
  const route = useRouter();
  const [category, setCategory] = useState([]);
  const [sortedData, setSortedData] = useState([]);

  const categoryData = (arr) => {
    if (sortData === "default") {
      const categoryDatas = arr?.products?.filter(
        (product) => product.category === ctry
      );
      setCategory(categoryDatas);
    } else {
      const categoryDatas = sortedData?.filter(
        (product) => product.category === ctry
      );
      setCategory(categoryDatas);
    }
  };

  // Add to Cart functionality...
  const addToCartProduct = (id) => {
    const addIntendentproduct = data?.products?.find(
      (product) => product.id === id
    );
    setUnFilteredCart((prevItem) => [...prevItem, addIntendentproduct]);
    addToCart(addIntendentproduct);
  };

  useEffect(() => {
    const x = sortProductData(data?.products, sortData);
    setSortedData(x);
  }, [sortData]);

  useEffect(() => {
    categoryData(data);
  }, [ctry]);

  return (
    <div className="grid gap-3 md:gap-6 min-h-[600px] grid-cols-productLayout lg:grid-cols-1">
      {ctry === "default"
        ? sortData === "default"
          ? data?.products?.map((product) => {
              return (
                <div
                  className="p-4 space-y-3 border rounded-lg border-violet-200 hover:gray-300 hover:shadow-md lg:flex lg:items-center lg:justify-between lg:gap-3"
                  key={product.id}
                >
                  <Link
                    href={`/product/${product.id}?category=${product.category}`}
                    className="z-10 space-y-4 lg:flex lg:justify-between lg:gap-4"
                  >
                    <div className="lg:max-w-32">
                      <Image
                        className="w-full aspect-square"
                        src={`${product.images[0]}`}
                        alt={product.title}
                        width={300}
                        height={200}
                      />
                    </div>
                    <div className="flex flex-col lg:w-full lg:max-w-xl xl:max-w-4xl lg:justify-start">
                      <div>
                        <h2 className="text-xl font-semibold line-clamp-1">
                          {product.title}
                        </h2>
                        <p className="text-sm line-clamp-1">
                          {product.description}
                        </p>
                      </div>
                      <div className="pt-4">
                        <button className="px-4 py-1 text-sm font-medium capitalize border border-gray-200 rounded-full">
                          {product.category}
                        </button>
                      </div>
                    </div>
                  </Link>
                  <div className="flex items-center justify-between gap-4 lg:gap-2 lg:min-w-48">
                    <div>
                      <h4 className="capitalize text-small">price</h4>
                      <h2 className="text-xl font-semibold text-violet-900">
                        ${product.price}
                      </h2>
                    </div>
                    <div className="z-20">
                      <button
                        className="px-4 py-2 font-bold capitalize rounded-md hover:bg-violet-600 text-small text-gray-50 bg-violet-800"
                        onClick={() => addToCartProduct(product.id)}
                      >
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          : sortedData.map((product) => {
              return (
                <div
                  className="p-4 space-y-3 border rounded-lg border-violet-200 hover:gray-300 hover:shadow-md lg:flex lg:items-center lg:justify-between lg:gap-3"
                  key={product.id}
                >
                  <Link
                    href={`/product/${product.id}?category=${product.category}`}
                    className="z-10 space-y-4 rounded-lg lg:flex lg:justify-between lg:gap-4"
                  >
                    <div className="lg:max-w-32">
                      <Image
                        className="w-full rounded-lg aspect-square"
                        src={`${product.images[0]}`}
                        alt={product.title}
                        width={300}
                        height={200}
                      />
                    </div>
                    <div className="flex flex-col lg:w-full lg:max-w-xl xl:max-w-4xl lg:justify-start">
                      <div>
                        <h2 className="text-xl font-semibold line-clamp-1">
                          {product.title}
                        </h2>
                        <p className="text-sm line-clamp-1">
                          {product.description}
                        </p>
                      </div>
                      <div className="pt-4">
                        <button className="px-6 py-2 text-sm font-medium capitalize border border-gray-200 rounded-full">
                          {product.category}
                        </button>
                      </div>
                    </div>
                  </Link>
                  <div className="flex items-center justify-between gap-4 lg:gap-2 lg:min-w-48">
                    <div>
                      <h4 className="capitalize text-small">price</h4>
                      <h2 className="text-xl font-semibold text-violet-900">
                        ${product.price}
                      </h2>
                    </div>
                    <div className="z-20">
                      <button
                        className="px-4 py-2 font-bold capitalize rounded-md hover:bg-violet-600 text-small text-gray-50 bg-violet-800"
                        onClick={() => addToCartProduct(product.id)}
                      >
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
        : category?.map((product) => {
            return (
              <div
                className="p-4 space-y-3 border rounded-lg border-violet-200 hover:gray-300 hover:shadow-md lg:flex lg:items-center lg:justify-between lg:gap-3"
                key={product.id}
              >
                <Link
                  href={`/product/${product.id}?category=${product.category}`}
                  className="z-10 space-y-4 lg:flex lg:justify-between lg:gap-4"
                >
                  <div className="lg:max-w-32">
                    <Image
                      className="w-full aspect-square"
                      src={`${product.images[0]}`}
                      alt={product.title}
                      width={300}
                      height={200}
                    />
                  </div>
                  <div className="flex flex-col lg:w-full lg:max-w-xl xl:max-w-4xl lg:justify-start">
                    <div>
                      <h2 className="text-xl font-semibold line-clamp-1">
                        {product.title}
                      </h2>
                      <p className="text-sm line-clamp-1">
                        {product.description}
                      </p>
                    </div>
                    <div className="pt-4">
                      <button className="px-6 py-2 text-sm font-medium capitalize border border-gray-200 rounded-full">
                        {product.category}
                      </button>
                    </div>
                  </div>
                </Link>
                <div className="flex items-center justify-between gap-4 lg:gap-2 lg:min-w-48">
                  <div>
                    <h4 className="capitalize text-small">price</h4>
                    <h2 className="text-xl font-semibold text-violet-900">
                      ${product.price}
                    </h2>
                  </div>
                  <div className="z-20">
                    <button
                      className="px-4 py-2 font-bold capitalize rounded-md hover:bg-violet-600 text-small text-gray-50 bg-violet-800"
                      onClick={() => addToCartProduct(product.id)}
                    >
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
}

export default Product;
