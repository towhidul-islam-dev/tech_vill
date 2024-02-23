import React from "react";
import Image from "next/image";

import ImageOne from "../../../public/alexey-demidov-md87xXz3le4-unsplash.jpg"
import ImageTwo from "../../../public/birgith-roosipuu-k--InFqWwu4-unsplash.jpg"
import ImageThree from "../../../public/cornelia-ng-2zHQhfEpisc-unsplash.jpg"
import ImageFour from "../../../public/daihana-monares-I2yLm45_rXk-unsplash.jpg"
import ImageFive from "../../../public/ephe-n-3CySlxSu9bo-unsplash.jpg"
function Header() {
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 px-4 xl:px-0 pt-12">
        <div className="md:col-span-2 md:row-span-2  bg-blue-400">
          <div className="relative">
            <h2 className="absolute top-5 left-4">box1</h2>
            <Image
              width={700}
              height={700}
              src={ImageOne}
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>
        <div className="bg-blue-500">
          <div className="relative">
            <h2 className="absolute top-5 left-5">box2</h2>
            <Image
              width={500}
              height={500}
              src={ImageFive}
              className="w-full object-cover aspect-square"
            />
          </div>
        </div>
        <div className="bg-blue-600 col-span-2 md:col-span-1">
          <div className="relative">
            <h2 className="absolute top-5 left-5">box3</h2>
            <Image
              width={500}
              height={500}
              src={ImageTwo}
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>
        <div className="bg-blue-700">
          <div className="relative">
            <h2 className="absolute top-5 left-5">box4</h2>
            <Image
              width={500}
              height={500}
              src={ImageThree}
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>
        <div className="bg-blue-800">
          <div className="relative">
            <h2 className="absolute top-5 left-5">box5</h2>
            <Image
              src={ImageFour}
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
