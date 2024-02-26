import React, { useContext, useState } from "react";
import Link from "next/link";

import CartContextProvider from "@/context/CartContext";

function IdenticalProduct({ categoryData }) {
  const { addToCart } = useContext(CartContextProvider);

  return (
    <div className="my-28 w-full grid place-items-center">
      <h2 className="text-4xl font-bold pb-1 border-b w-full max-w-7xl border-violet-100 mb-12 text-center">
        Related Product
      </h2>
      <div className="w-full max-w-7xl">
        <div className="grid gap-4 grid-cols-relatedProductLayout">
          {categoryData.map((product) => {
            return (
              <div
                key={product.id}
                className=" p-4 border border-violet-200 hover:border-gray-300 hover:shadow-md rounded-lg space-y-4 group"
              >
                <Link
                  href={`/product/${product.id}?category=${product.category}`}
                >
                  <div className="">
                    <div className="group-hover:scale-105 transition-transform ease-in-out duration-200">
                      <img
                        className="aspect-square rounded-lg w-full"
                        src={`${product.images[0]}`}
                        alt={product.title}
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
                        <button className="px-4 py-1 text-sm capitalize border border-gray-200 rounded-full font-medium">
                          {product.category}
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="flex items-center justify-between gap-2 lg:gap-2 ">
                  <div>
                    <h4 className="capitalize text-small">price</h4>
                    <h2 className="text-xl font-semibold text-violet-900">
                      ${product.price}
                    </h2>
                  </div>
                  <div>
                    <button
                      onClick={() => addToCart(product)}
                      className="text-small font-bold capitalize text-gray-100 rounded-md bg-violet-800 hover:bg-violet-600 transition-colors ease-in-out duration-200 px-2 py-2"
                    >
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default IdenticalProduct;
