import Link from "next/link";
import React, { useState } from "react";
import {
  SwatchIcon,
  XMarkIcon,
  BarsArrowDownIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      route: "/",
    },
    {
      id: 2,
      link: "product",
      route: "/product",
    },
    { id: 3, link: "sign up", route: "/sign_up" },
  ];

  return (
    
    <div className="flex justify-center">
      <div className="flex max-w-7xl justify-between items-center w-full h-20 px-4 xl:px-0 text-white nav">
        <div>
          <Link className="text-3xl text-gray-200 z-50" href="/" rel="noreferrer">
            <SwatchIcon className="h-8 w-8 text-violet-800" />
          </Link>
        </div>
        <ul className="hidden md:flex">
          {links.map(({ id, link, route }) => (
            <li
              key={id}
              className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-gray-600 duration-200 link-underline"
            >
              <Link href={route}>{link}</Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-30 text-gray-500 md:hidden"
        >
          {nav ? (
            <XMarkIcon className="w-7 h-7 text-gray-700" />
          ) : (
            <BarsArrowDownIcon className="w-7 h-7 text-gray-700" />
          )}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 z-20 left-0 w-full h-screen bg-gradient-to-b from-white to-gray-100 text-gray-500">
            {links.map(({ id, link, route }) => (
              <li
                key={id}
                className="px-4 w-full max-w-sm cursor-pointer capitalize py-6 text-xl"
              >
                <Link onClick={() => setNav(!nav)} href={route}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;