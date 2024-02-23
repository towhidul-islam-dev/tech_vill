import React from "react";
import Image from "next/image";

import Image1 from "../../../public/ha-ha-6RToWEdU9s4-unsplash.jpg";
import Image2 from "../../../public/cornelia-ng-2zHQhfEpisc-unsplash.jpg";
import Image3 from "../../../public/fanqi-VLy8wPYpV9s-unsplash.jpg";
import Image4 from "../../../public/ephe-n-3CySlxSu9bo-unsplash.jpg";
import Image5 from "../../../public/daihana-monares-I2yLm45_rXk-unsplash.jpg";
import Image6 from "../../../public/birgith-roosipuu-k--InFqWwu4-unsplash.jpg";
function ExploreCategory() {
  return (
    <div>
      <h2 className="pb-4 text-3xl font-semibold text-center capitalize border-b border-violet-300 ">
        Explore by category
      </h2>

      <div className="grid grid-cols-1 gap-4 my-8 sm:grid-cols-3 md:grid-cols-5">
        <div className="sm:col-span-3 md:col-span-2 max-h-48">
          <Image
            className="w-full h-full rounded-lg object-cover"
            src={Image1}
            alt="ImageOne"
            width={700}
            height={200}
          ></Image>
        </div>
        <div className="sm:col-start-1 sm:col-end-3 sm:row-start-2 sm:row-end-3 md:col-start-3 md:row-start-1 md:row-end-2 md:col-span-2 max-h-48">
          <Image
            className="w-full h-full rounded-lg object-cover"
            src={Image2}
            alt="ImageOne"
            width={700}
            height={200}
          ></Image>
        </div>
        <div className=" sm:row-start-2 sm:row-end-4 sm:col-start-3 sm:col-end-4 md:row-start-1 md:row-end-3 md:col-start-5 md:col-end-6">
          <Image
            className="object-cover w-full h-full rounded-lg"
            src={Image3}
            alt="ImageOne"
            width={700}
            height={200}
          ></Image>
        </div>
        <div className="max-h-60">
          <Image
            className="w-full h-full rounded-lg object-cover"
            src={Image4}
            alt="Image4"
            width={700}
            height={200}
          ></Image>
        </div>
        <div className=" sm:col-span-1 md:row-start-2 md:col-start-2 md:col-span-2 max-h-60">
          <Image
            className=" h-full rounded-lg object-cover"
            src={Image5}
            alt="Image4"
            width={700}
            height={200}
          ></Image>
        </div>
        <div className="max-h-60 sm:row-start-4 sm:row-end-5 sm:col-span-3 md:row-start-2 md:col-start-4 md:col-end-5">
          <Image
            className="w-full h-full rounded-lg object-cover"
            src={Image6}
            alt="Image4"
            width={700}
            height={200}
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default ExploreCategory;
