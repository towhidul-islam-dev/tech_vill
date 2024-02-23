import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function IdenticalProduct({ categoryData }) {
  const [catData, setCatData] = useState([]);

  return (
    <div className="my-28 w-full grid place-items-center">
      <h2 className="text-4xl font-bold pb-1 border-b w-full max-w-7xl border-violet-300 mb-12 text-center">
        Related Product
      </h2>
      <div className="w-full max-w-7xl">
          <div className="grid gap-4 grid-cols-relatedProductLayout">
            {categoryData.map((product) => {
              return (
                <Link href={`/product/${product.id}?category=${product.category}`}
                key={product.id}>
                  <div className=" p-4 border border-violet-200 hover:border-gray-300 hover:shadow-md rounded-lg space-y-4">
                    <div className="">
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
                    <div className="flex items-center justify-between gap-2 lg:gap-2 ">
                      <div>
                        <h4 className="capitalize text-small">price</h4>
                        <h2 className="text-xl font-semibold text-violet-900">
                          ${product.price}
                        </h2>
                      </div>
                      <div>
                        <button className="text-small font-bold capitalize text-gray-100 rounded-md bg-violet-800 px-2 py-2">
                          add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
      </div>
    </div>
  );
}

export default IdenticalProduct;
