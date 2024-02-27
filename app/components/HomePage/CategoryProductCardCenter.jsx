import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Ring from "../../../public/CATEGORY_IMAGE/automotives.jpg";
function CategoryProductCardCenter() {
  const params = useRouter();

  return (
    <div className="rounded-md sm:grid sm:grid-cols-6 sm:gap-4 bg-gray-100 overflow-hidden">
      <div className="sm:col-span-3 p-12 grid place-items-center">
        <Image
          className="rounded-md max-h-[300px] object-cover"
          src={Ring}
          alt="Ring"
          width={400}
          height={300}
        ></Image>
      </div>
      <div className="grid place-items-center sm:col-span-3 space-y-8 lg:space-y-0 bg-gray-200 p-4">
        <div className="text-center">
          <h2 className="text-xl font-bold">Earrings</h2>
          <p>Made with passion.</p>
        </div>
        <div className="w-20 h-1 bg-violet-900"></div>
        <p className="text-center">
          Step into a world of refined beauty with Jeas Beas, where each piece
          of jewelry tells a story of timeless elegance and exquisite
          craftsmanship.
        </p>
        <div className="">
          <button
          onClick={() => params.push("/product?category=automotive")}
            type="button"
            className="transition-colors duration-200 ease-in-out text-base border border-violet-900 text-violet-900 hover:bg-violet-900 hover:text-gray-50 py-1 px-2"
          >
            view all
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryProductCardCenter;
