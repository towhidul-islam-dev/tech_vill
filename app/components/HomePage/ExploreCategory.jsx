import React from "react";
import Image from "next/image";

import Image1 from "../../../public/CATEGORY_IMAGE/fregrance.jpg";
import Image2 from "../../../public/CATEGORY_IMAGE/groceries.jpg";
import Image3 from "../../../public/CATEGORY_IMAGE/automotives.jpg";
import Image4 from "../../../public/CATEGORY_IMAGE/home_decoration.jpg";
import Image5 from "../../../public/CATEGORY_IMAGE/jewelry.jpg";
import Image6 from "../../../public/CATEGORY_IMAGE/jewelry1.jpg";
import Image7 from "../../../public/CATEGORY_IMAGE/laptop.jpg";
import Image8 from "../../../public/CATEGORY_IMAGE/medicine.jpg";
import Image9 from "../../../public/CATEGORY_IMAGE/men_watch.jpg";
import Image10 from "../../../public/CATEGORY_IMAGE/mens_bags.jpg";
import Image11 from "../../../public/CATEGORY_IMAGE/mens_fashion.jpg";
import Image12 from "../../../public/CATEGORY_IMAGE/mens_shoes.jpg";
import Image13 from "../../../public/CATEGORY_IMAGE/mens_watch.jpg";
import Image14 from "../../../public/CATEGORY_IMAGE/Phone.jpg";
import Image15 from "../../../public/CATEGORY_IMAGE/sunglass.jpg";
import Image16 from "../../../public/CATEGORY_IMAGE/women_bags.jpg";
import Image17 from "../../../public/CATEGORY_IMAGE/women_bags1.jpg";
import Image18 from "../../../public/CATEGORY_IMAGE/women_glasses.jpg";
import Image19 from "../../../public/CATEGORY_IMAGE/women_jewelry.jpg";
import Image20 from "../../../public/CATEGORY_IMAGE/women_ring1.jpg";
import Image21 from "../../../public/CATEGORY_IMAGE/women_shoes.jpg";
import Image22 from "../../../public/CATEGORY_IMAGE/women_skincare.jpg";
import Image23 from "../../../public/CATEGORY_IMAGE/women_watch.jpg";
import Image24 from "../../../public/CATEGORY_IMAGE/tops.jpg";

function ExploreCategory() {
  return (
    <div>
      <h2 className="pb-4 text-3xl font-semibold text-center capitalize border-b border-violet-300 ">
        Explore by category
      </h2>

      <div className="grid grid-cols-2 gap-2 my-8 sm:grid-cols-8">
        {/* $1 */}
        <div className="max-h-[300px] sm:col-span-3 relative group">
          <Image
            className="w-full h-full rounded-lg object-cover"
            src={Image1}
            alt="ImageOne"
            width={700}
            height={200}
          ></Image>
          <div className="hidden group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
            <div className="absolute rounded-md inset-1/2 w-full backdrop-blur-md backdrop-brightness-90 backdrop-contrast-125 -translate-x-1/2 bg-gray-300/30  h-full grid place-content-center -translate-y-1/2">
              <p className="pb-4 capitalize font-bold text-xl text-center">
                perfume
              </p>
              <button className="py-2 uppercase border text-violet-900 font-semibold hover:text-gray-50 px-4 rounded-lg border-violet-900 hover:bg-violet-900 transition-all ease-in-out duration-200">
                view all
              </button>
            </div>
          </div>
        </div>
        {/* $2 */}
        <div
          type="button"
          className="relative group max-h-[300px] sm:col-span-2"
        >
          <Image
            className="w-full h-full rounded-lg object-cover"
            src={Image2}
            alt="ImageOne"
            width={700}
            height={200}
          ></Image>
          <div className="hidden group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
            <div className="absolute rounded-md inset-1/2 w-full backdrop-blur-md backdrop-brightness-90 backdrop-contrast-125 -translate-x-1/2 bg-gray-300/30  h-full grid place-content-center -translate-y-1/2">
              <p className="pb-4 capitalize font-bold text-xl text-center">
                Groceries
              </p>
              <button className="py-2 uppercase border text-violet-900 font-semibold hover:text-gray-50 px-4 rounded-lg border-violet-900 hover:bg-violet-900 transition-all ease-in-out duration-200">
                view all
              </button>
            </div>
          </div>
        </div>
        {/* $3 */}
        <div type="button" className="relative group max-h-[300px] ">
          <Image
            className="object-cover w-full h-full rounded-lg"
            src={Image3}
            alt="ImageOne"
            width={700}
            height={200}
          ></Image>
          <div className="hidden group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
            <div className="absolute rounded-md inset-1/2 w-full backdrop-blur-md backdrop-brightness-90 backdrop-contrast-125 -translate-x-1/2 bg-gray-300/30  h-full grid place-content-center -translate-y-1/2">
              <p className="pb-4 capitalize font-bold text-xl text-center">
                automotive
              </p>
              <button className="py-2 uppercase border text-violet-900 font-semibold hover:text-gray-50 px-4 rounded-lg border-violet-900 hover:bg-violet-900 transition-all ease-in-out duration-200">
                view all
              </button>
            </div>
          </div>
        </div>
        {/* $4 */}
        <div
          type="button"
          className="relative group max-h-[300px] sm:col-span-2"
        >
          <Image
            className="w-full h-full rounded-lg object-cover"
            src={Image4}
            alt="Image4"
            width={700}
            height={200}
          ></Image>
          <div className="hidden group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
            <div className="absolute rounded-md inset-1/2 w-full backdrop-blur-md backdrop-brightness-90 backdrop-contrast-125 -translate-x-1/2 bg-gray-300/30  h-full grid place-content-center -translate-y-1/2">
              <p className="pb-4 capitalize font-bold text-xl text-center">
                furniture
              </p>
              <button className="py-2 uppercase border text-violet-900 font-semibold hover:text-gray-50 px-4 rounded-lg border-violet-900 hover:bg-violet-900 transition-all ease-in-out duration-200">
                view all
              </button>
            </div>
          </div>
        </div>
        {/* $5 */}
        <div
          type="button"
          className="relative group max-h-[300px] sm:col-span-3 "
        >
          <Image
            className=" h-full rounded-lg object-cover"
            src={Image5}
            alt="Image4"
            width={700}
            height={200}
          ></Image>
          <div className="hidden group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
            <div className="absolute rounded-md inset-1/2 w-full backdrop-blur-md backdrop-brightness-90 backdrop-contrast-125 -translate-x-1/2 bg-gray-300/30  h-full grid place-content-center -translate-y-1/2">
              <p className="pb-4 capitalize font-bold text-xl text-center">
                jewellry
              </p>
              <button className="py-2 uppercase border text-violet-900 font-semibold hover:text-gray-50 px-4 rounded-lg border-violet-900 hover:bg-violet-900 transition-all ease-in-out duration-200">
                view all
              </button>
            </div>
          </div>
        </div>
        {/* $6 */}
        <div type="button" className="max-h-[300px] sm:col-span-2 relative group">
          <Image
            className="w-full h-full rounded-lg object-cover"
            src={Image6}
            alt="Image4"
            width={700}
            height={200}
          ></Image>
          <div className="hidden group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
            <div className="absolute rounded-md inset-1/2 w-full backdrop-blur-md backdrop-brightness-90 backdrop-contrast-125 -translate-x-1/2 bg-gray-300/30  h-full grid place-content-center -translate-y-1/2">
              <p className="pb-4 capitalize font-bold text-xl text-center">
                women jewellry
              </p>
              <button className="py-2 uppercase border text-violet-900 font-semibold hover:text-gray-50 px-4 rounded-lg border-violet-900 hover:bg-violet-900 transition-all ease-in-out duration-200">
                view all
              </button>
            </div>
          </div>
        </div>
        {/* $7 */}
        <div className="relative group max-h-[300px] sm:col-span-2">
          <Image
            className="w-full h-full rounded-lg object-cover"
            src={Image7}
            alt="Image7"
            width={700}
            height={200}
          ></Image>
          <div className="hidden group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
            <div className="absolute rounded-md inset-1/2 w-full backdrop-blur-md backdrop-brightness-90 backdrop-contrast-125 -translate-x-1/2 bg-gray-300/30  h-full grid place-content-center -translate-y-1/2">
              <p className="pb-4 capitalize font-bold text-xl text-center">
                men's watch
              </p>
              <button className="py-2 uppercase border text-violet-900 font-semibold hover:text-gray-50 px-4 rounded-lg border-violet-900 hover:bg-violet-900 transition-all ease-in-out duration-200">
                view all
              </button>
            </div>
          </div>
        </div>
        {/* $8 */}
        <div className="relative group max-h-[300px] sm:col-span-2  ">
          <Image
            className="w-full h-full rounded-lg object-cover"
            src={Image8}
            alt="Image8"
            width={700}
            height={200}
          ></Image>
          <div className="hidden group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
            <div className="absolute rounded-md inset-1/2 w-full backdrop-blur-md backdrop-brightness-90 backdrop-contrast-125 -translate-x-1/2 bg-gray-300/30  h-full grid place-content-center -translate-y-1/2">
              <p className="pb-4 capitalize font-bold text-xl text-center">
                men's bags
              </p>
              <button className="py-2 uppercase border text-violet-900 font-semibold hover:text-gray-50 px-4 rounded-lg border-violet-900 hover:bg-violet-900 transition-all ease-in-out duration-200">
                view all
              </button>
            </div>
          </div>
        </div>
        {/* $9 */}
        <div className="max-h-[300px] sm:row-start-2 sm:col-start-6 sm:col-end-9 relative group">
          <Image
            className="w-full h-full rounded-lg object-cover"
            src={Image9}
            alt="Image9"
            width={700}
            height={200}
          ></Image>
          <div className="hidden group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
            <div className="absolute rounded-md inset-1/2 w-full backdrop-blur-md backdrop-brightness-90 backdrop-contrast-125 -translate-x-1/2 bg-gray-300/30  h-full grid place-content-center -translate-y-1/2">
              <p className="pb-4 capitalize font-bold text-xl text-center">
                men's cloth
              </p>
              <button className="py-2 uppercase border text-violet-900 font-semibold hover:text-gray-50 px-4 rounded-lg border-violet-900 hover:bg-violet-900 transition-all ease-in-out duration-200">
                view all
              </button>
            </div>
          </div>
        </div>
        {/* $10 */}
        <div className="relative group max-h-[300px]  sm:row-start-3 sm:col-span-3 ">
          <Image
            className="w-full h-full rounded-lg object-cover"
            src={Image10}
            alt="Image10"
            width={700}
            height={200}
          ></Image>
          <div className="hidden group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
            <div className="absolute rounded-md inset-1/2 w-full backdrop-blur-md backdrop-brightness-90 backdrop-contrast-125 -translate-x-1/2 bg-gray-300/30  h-full grid place-content-center -translate-y-1/2">
              <p className="pb-4 capitalize font-bold text-xl text-center">
                men's shoes
              </p>
              <button className="py-2 uppercase border text-violet-900 font-semibold hover:text-gray-50 px-4 rounded-lg border-violet-900 hover:bg-violet-900 transition-all ease-in-out duration-200">
                view all
              </button>
            </div>
          </div>
        </div>
        {/* $11 */}
        <div className="relative group max-h-[300px]  sm:row-start-3">
          <Image
            className="w-full h-full rounded-lg object-cover"
            src={Image11}
            alt="Image11"
            width={700}
            height={200}
          ></Image>
          <div className="hidden group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
            <div className="absolute rounded-md inset-1/2 w-full backdrop-blur-md backdrop-brightness-90 backdrop-contrast-125 -translate-x-1/2 bg-gray-300/30  h-full grid place-content-center -translate-y-1/2">
              <p className="pb-4 capitalize font-bold text-xl text-center">
                computer
              </p>
              <button className="py-2 uppercase border text-violet-900 font-semibold hover:text-gray-50 px-4 rounded-lg border-violet-900 hover:bg-violet-900 transition-all ease-in-out duration-200">
                view all
              </button>
            </div>
          </div>
        </div>
        {/* $12 */}
        <div className="relative group max-h-[300px]  sm:col-span-2 sm:row-start-3">
          <Image
            className="w-full h-full rounded-lg object-cover"
            src={Image12}
            alt="Image12"
            width={700}
            height={200}
          ></Image>
          <div className="hidden group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
            <div className="absolute rounded-md inset-1/2 w-full backdrop-blur-md backdrop-brightness-90 backdrop-contrast-125 -translate-x-1/2 bg-gray-300/30  h-full grid place-content-center -translate-y-1/2">
              <p className="pb-4 capitalize font-bold text-xl text-center">
                medicine
              </p>
              <button className="py-2 uppercase border text-violet-900 font-semibold hover:text-gray-50 px-4 rounded-lg border-violet-900 hover:bg-violet-900 transition-all ease-in-out duration-200">
                view all
              </button>
            </div>
          </div>
        </div>
        {/* $13 */}
        <div className="relative group max-h-[300px] ">
          <Image
            className="w-full h-full rounded-lg object-cover"
            src={Image13}
            alt="Image13"
            width={700}
            height={200}
          ></Image>
          <div className="hidden group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
            <div className="absolute rounded-md inset-1/2 w-full backdrop-blur-md backdrop-brightness-90 backdrop-contrast-125 -translate-x-1/2 bg-gray-300/30  h-full grid place-content-center -translate-y-1/2">
              <p className="pb-4 capitalize font-bold text-xl text-center">
                perfume
              </p>
              <button className="py-2 uppercase border text-violet-900 font-semibold hover:text-gray-50 px-4 rounded-lg border-violet-900 hover:bg-violet-900 transition-all ease-in-out duration-200">
                view all
              </button>
            </div>
          </div>
        </div>
        {/* $14 */}
        <div className="relative group max-h-[300px]  sm:col-span-2">
          <Image
            className="w-full h-full rounded-lg object-cover"
            src={Image14}
            alt="Image14"
            width={700}
            height={200}
          ></Image>
          <div className="hidden group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
            <div className="absolute rounded-md inset-1/2 w-full backdrop-blur-md backdrop-brightness-90 backdrop-contrast-125 -translate-x-1/2 bg-gray-300/30  h-full grid place-content-center -translate-y-1/2">
              <p className="pb-4 capitalize font-bold text-xl text-center">
                perfume
              </p>
              <button className="py-2 uppercase border text-violet-900 font-semibold hover:text-gray-50 px-4 rounded-lg border-violet-900 hover:bg-violet-900 transition-all ease-in-out duration-200">
                view all
              </button>
            </div>
          </div>
        </div>
        {/* $15 */}
        <div className="relative group max-h-[300px]  sm:col-span-3  ">
          <Image
            className="w-full h-full rounded-lg object-cover"
            src={Image15}
            alt="Image15"
            width={700}
            height={200}
          ></Image>
          <div className="hidden group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
            <div className="absolute rounded-md inset-1/2 w-full backdrop-blur-md backdrop-brightness-90 backdrop-contrast-125 -translate-x-1/2 bg-gray-300/30  h-full grid place-content-center -translate-y-1/2">
              <p className="pb-4 capitalize font-bold text-xl text-center">
                perfume
              </p>
              <button className="py-2 uppercase border text-violet-900 font-semibold hover:text-gray-50 px-4 rounded-lg border-violet-900 hover:bg-violet-900 transition-all ease-in-out duration-200">
                view all
              </button>
            </div>
          </div>
        </div>
        {/* $16 */}
        <div className="relative group max-h-[300px] sm:col-span-2">
          <Image
            className="w-full h-full rounded-lg object-cover"
            src={Image16}
            alt="Image16"
            width={700}
            height={200}
          ></Image>
          <div className="hidden group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
            <div className="absolute rounded-md inset-1/2 w-full backdrop-blur-md backdrop-brightness-90 backdrop-contrast-125 -translate-x-1/2 bg-gray-300/30  h-full grid place-content-center -translate-y-1/2">
              <p className="pb-4 capitalize font-bold text-xl text-center">
                perfume
              </p>
              <button className="py-2 uppercase border text-violet-900 font-semibold hover:text-gray-50 px-4 rounded-lg border-violet-900 hover:bg-violet-900 transition-all ease-in-out duration-200">
                view all
              </button>
            </div>
          </div>
        </div>
        {/* $17 */}
        <div className="relative group max-h-[300px] sm:col-start-3 sm:col-end-6 sm:row-start-5 sm:row-end-6">
          <Image
            className="w-full h-full rounded-lg object-cover"
            src={Image17}
            alt="Image17"
            width={700}
            height={200}
          ></Image>
          <div className="hidden group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
            <div className="absolute rounded-md inset-1/2 w-full backdrop-blur-md backdrop-brightness-90 backdrop-contrast-125 -translate-x-1/2 bg-gray-300/30  h-full grid place-content-center -translate-y-1/2">
              <p className="pb-4 capitalize font-bold text-xl text-center">
                perfume
              </p>
              <button className="py-2 uppercase border text-violet-900 font-semibold hover:text-gray-50 px-4 rounded-lg border-violet-900 hover:bg-violet-900 transition-all ease-in-out duration-200">
                view all
              </button>
            </div>
          </div>
        </div>
        {/* $18 */}
        <div className="max-h-[300px]  sm:col-span-2 relative group">
          <Image
            className="w-full h-full rounded-lg object-cover"
            src={Image18}
            alt="Image18"
            width={700}
            height={200}
          ></Image>
          <div className="hidden group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
            <div className="absolute rounded-md inset-1/2 w-full backdrop-blur-md backdrop-brightness-90 backdrop-contrast-125 -translate-x-1/2 bg-gray-300/30  h-full grid place-content-center -translate-y-1/2">
              <p className="pb-4 capitalize font-bold text-xl text-center">
                perfume
              </p>
              <button className="py-2 uppercase border text-violet-900 font-semibold hover:text-gray-50 px-4 rounded-lg border-violet-900 hover:bg-violet-900 transition-all ease-in-out duration-200">
                view all
              </button>
            </div>
          </div>
        </div>
        {/* $19 */}
        <div className="relative group max-h-[300px] ">
          <Image
            className="w-full h-full rounded-lg object-cover"
            src={Image19}
            alt="Image19"
            width={700}
            height={200}
          ></Image>
          <div className="hidden group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
            <div className="absolute rounded-md inset-1/2 w-full backdrop-blur-md backdrop-brightness-90 backdrop-contrast-125 -translate-x-1/2 bg-gray-300/30  h-full grid place-content-center -translate-y-1/2">
              <p className="pb-4 capitalize font-bold text-xl text-center">
                perfume
              </p>
              <button className="py-2 uppercase border text-violet-900 font-semibold hover:text-gray-50 px-4 rounded-lg border-violet-900 hover:bg-violet-900 transition-all ease-in-out duration-200">
                view all
              </button>
            </div>
          </div>
        </div>
        {/* $20 */}
        <div className="relative group max-h-[300px] sm:col-span-3 ">
          <Image
            className="w-full h-full rounded-lg object-cover"
            src={Image20}
            alt="Image20"
            width={700}
            height={200}
          ></Image>
          <div className="hidden group-hover:block group-hover:transition-all group-hover:ease-in-out group-hover:duration-300">
            <div className="absolute rounded-md inset-1/2 w-full backdrop-blur-md backdrop-brightness-90 backdrop-contrast-125 -translate-x-1/2 bg-gray-300/30  h-full grid place-content-center -translate-y-1/2">
              <p className="pb-4 capitalize font-bold text-xl text-center">
                perfume
              </p>
              <button className="py-2 uppercase border text-violet-900 font-semibold hover:text-gray-50 px-4 rounded-lg border-violet-900 hover:bg-violet-900 transition-all ease-in-out duration-200">
                view all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreCategory;
