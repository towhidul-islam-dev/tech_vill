import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Bracelet from "../../../public/CATEGORY_IMAGE/men_watch.jpg";

function CategoryProductCard() {
  const params = useRouter();
  return (
    <div className="sm:grid sm:grid-cols-6 sm:gap-4 bg-gray-100 rounded-md overflow-hidden">
      <div className="sm:col-span-3 md:col-span-4 p-12 grid place-items-center ">
        <Image
          className="rounded-md "
          src={Bracelet}
          alt="Bracelet"
          width={400}
          height={300}
        ></Image>
      </div>
      <div className="grid place-items-center sm:col-span-3 md:col-span-2 space-y-8 lg:space-y-0 bg-gray-200 p-4">
        <div className="text-center">
          <h2 className="text-xl font-bold">Phone Charm</h2>
          <p>Made with love.</p>
        </div>
        <div className="w-20 h-1 bg-violet-900"></div>
        <p className="text-center">
          Step into a world of refined beauty with Jeas Beas, where each piece
          of jewelry tells a story of timeless elegance and exquisite
          craftsmanship.
        </p>
        <div className="">
          <button onClick={() => params.push("/product?category=womens-watches")} className="py-2 text-sm uppercase border text-violet-900 font-semibold hover:text-gray-50 px-4 rounded-lg border-violet-900 hover:bg-violet-900 transition-all ease-in-out duration-200">
            view all
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryProductCard;
