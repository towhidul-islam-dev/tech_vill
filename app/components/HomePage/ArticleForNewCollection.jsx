import React from "react";

function ArticleForNewCollection() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="md:grid md:grid-cols-8 md:place-items-center md:space-x-12 lg:space-x-6">
      <div className="relative md:col-span-2 w-full">
        <h2 className="text-7xl font-bold text-violet-900/20 ">
          {currentYear}{" "}
        </h2>
        <p className="absolute text-nowrap text-violet-900 left-20 lg:left-32 -translate-y-2/4 top-2/4 capitalize font-serif font-semilight text-xl">
          new collection
        </p>
      </div>
      <div className="md:col-span-6 first-letter:font-bold first-letter:text-xl text-sm">
        Step into a world of refined beauty with Jeas Beas, where each piece of
        jewelry tells a story of timeless elegance and exquisite craftsmanship.
        From delicate necklaces to statement rings, our curated collection is
        designed to elevate your style and capture the essence of
        sophistication. Whether you're seeking a gift for a loved one or
        treating yourself to something special, Jeas Beas invites you to indulge
        in the artistry of fine jewelry and embrace the extraordinary.
      </div>
    </div>
  );
}

export default ArticleForNewCollection;
