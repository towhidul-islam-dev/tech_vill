import Link from "next/link";
import React from "react";

import bkash from "../../public/bkash-seeklogo.svg";
import nagad from "../../public/nagad-seeklogo.svg";
import visa from "../../public/visa-seeklogo.svg";
import Image from "next/image";

function Footer() {
  return (
    <div className="px-4 space-y-4 xl:px-0">
      <div className="grid place-items-center">
        <div className="grid w-full md:py-6 sm:gap-3 sm:space-y-0 grid-cols-2 md:grid-cols-4 max-w-7xl">
          <div className="pb-2 sm:pb-0">
            <div className="pb-6">
              <h2 className="font-semibold uppercase">customer service</h2>
            </div>
            <div className="space-y-2">
              <div>
                <Link
                  className="text-sm text-gray-500 capitalize hover:text-gray-600"
                  href="#"
                >
                  help & contact us
                </Link>
              </div>
              <div>
                <Link
                  className="text-sm text-gray-500 capitalize hover:text-gray-600"
                  href="#"
                >
                  returns & refunds
                </Link>
              </div>
              <div>
                <Link
                  className="text-sm text-gray-500 capitalize hover:text-gray-600"
                  href="#"
                >
                  online stores
                </Link>
              </div>
              <div>
                <Link
                  className="text-sm text-gray-500 capitalize hover:text-gray-600"
                  href="#"
                >
                  terms & conditions
                </Link>
              </div>
            </div>
          </div>
          <div className="pb-2 sm:pb-0">
            <div className="pb-6">
              <h2 className="font-semibold uppercase">company</h2>
            </div>
            <div className="space-y-2">
              <div>
                <Link
                  className="text-sm text-gray-500 capitalize hover:text-gray-600"
                  href="#"
                >
                  about us
                </Link>
              </div>
              <div>
                <Link
                  className="text-sm text-gray-500 capitalize hover:text-gray-600"
                  href="#"
                >
                  blog
                </Link>
              </div>
              <div>
                <Link
                  className="text-sm text-gray-500 capitalize hover:text-gray-600"
                  href="#"
                >
                  order tracking
                </Link>
              </div>
              <div>
                <Link
                  className="text-sm text-gray-500 capitalize hover:text-gray-600"
                  href="#"
                >
                  contact
                </Link>
              </div>
            </div>
          </div>
          <div className="pb-2 sm:pb-0">
            <div className="pb-6">
              <h2 className="font-semibold uppercase">social media</h2>
            </div>
            <div className="space-y-2">
              <div>
                <Link
                  className="text-sm text-gray-500 capitalize hover:text-gray-600"
                  href="#"
                >
                  twitter
                </Link>
              </div>
              <div>
                <Link
                  className="text-sm text-gray-500 capitalize hover:text-gray-600"
                  href="#"
                >
                  instagram
                </Link>
              </div>
              <div>
                <Link
                  className="text-sm text-gray-500 capitalize hover:text-gray-600"
                  href="#"
                >
                  facebook
                </Link>
              </div>
            </div>
          </div>
          <div className="pb-2 sm:pb-0">
            <div className="pb-6">
              <h2 className="font-semibold uppercase">archive</h2>
            </div>
            <div className="space-y-2">
              <div>
                <Link
                  className="text-sm text-gray-500 capitalize hover:text-gray-600"
                  href="#"
                >
                  gallery
                </Link>
              </div>
              <div>
                <Link
                  className="text-sm text-gray-500 capitalize hover:text-gray-600"
                  href="#"
                >
                  help & support
                </Link>
              </div>
              <div>
                <Link
                  className="text-sm text-gray-500 capitalize hover:text-gray-600"
                  href="#"
                >
                  login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid border-t place-items-center border-violet-200">
        <div className="flex flex-col items-center justify-center w-full py-2 md:flex-row md:justify-between md:grid-cols-3 max-w-7xl">
          <p className="text-sm text-gray-500 capitalize">
            copyright@Jeasbeadsjewellry
          </p>
          <div className="flex gap-2 py-4">
            <Image
              src={bkash}
              alt="bkash logo"
              className="p-1 border rounded-md border-violet-900"
              width={50}
              height={60}
            ></Image>
            <Image
              src={nagad}
              alt="bkash logo"
              className="p-1 border rounded-md border-violet-900"
              width={50}
              height={60}
            ></Image>
            <Image
              src={visa}
              alt="bkash logo"
              className="p-1 border rounded-md border-violet-900"
              width={50}
              height={60}
            ></Image>
          </div>
          <div className="flex gap-3 text-sm font-semibold text-gray-500 capitalize ">
            <div className="hover:text-violet-700 hover:font-semibold">
              <Link href="#">instagram</Link>
            </div>
            <div className="hover:text-violet-700 hover:font-semibold">
              <Link href="#">facebook</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
