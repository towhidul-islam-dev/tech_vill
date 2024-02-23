import Image from "next/image";
import React from "react";

import Bracelet from "../../../public/img15.jpg";
import Necklace from "../../../public/img14.jpg";
function CategoryProductCard2() {
  return (
    <div className="sm:grid sm:grid-cols-6 sm:gap-4 bg-gray-100">
      
      <div className="grid place-items-center sm:col-span-3 md:col-span-2 space-y-8 lg:space-y-0 bg-gray-200 p-4">
        <div className="text-center">
          <h2>Bracelet</h2>
          <p>Made with care.</p>
        </div>
        <div className="w-20 h-1 bg-violet-900"></div>
        <p className="text-center">
          Step into a world of refined beauty with Jeas Beas, where each piece
          of jewelry tells a story of timeless elegance and exquisite
          craftsmanship.
        </p>
        <div className="">
          <button
            type="button"
            className="text-base border border-violet-900 text-violet-900 hover:bg-violet-900 hover:text-gray-50 py-1 px-2"
          >
            view all
          </button>
        </div>
      </div>
      <div className="sm:col-span-3 md:col-span-4 p-12 grid place-items-center">
        <Image
          className=""
          src={Necklace}
          alt="Necklace"
          width={400}
          height={300}
        ></Image>
      </div>
    </div>
  );
}

export default CategoryProductCard2;
