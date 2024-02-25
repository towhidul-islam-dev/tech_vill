"use client";
import React, { useEffect, useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { toast } from "react-hot-toast";

import AddToCart from "../../public/undraw_shopping_app_flsj.svg";
import CartContextProvider from "../../context/CartContext";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import Modal from "../cart/common/Modal";

const Cart = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { cart, setCart } = useContext(CartContextProvider);
  const [uniqueCart, setUniqueCart] = useState([]);

  const deleteItem = () => {
    setModalIsOpen(true);
    uniqueCart.length === 0 && toast.error("Cart is empty");
  };
  // ?? delete Individual Cart Item..
  const deleteCartItem = (id) => {
    try {
      setCart((currItem) => currItem.filter((item) => item.id !== id));
      toast.success("Product Removed");
    } catch (error) {
      toast.error("Product not found");
    }
  };
  const fetchUniqueCart = () => {
    const uniqueItem = new Set(cart?.map(JSON.stringify));
    const uniqueProduct = Array.from(uniqueItem).map(JSON.parse);
    setUniqueCart((prevItem) => [...prevItem, ...uniqueProduct]);
  };
  useEffect(() => {
    fetchUniqueCart();
  }, []);

  const total = cart
    .reduce((total, item) => total + cart.length * item.price, 0)
    .toFixed(2);

  return (
    <div className="relative py-16 cartHeight px-4 xl:px-0">
      <div className="grid place-items-center pt-8 lg:pt-28">
        <div className=" md:grid max-w-7xl w-full gap-24 md:grid-cols-productLayout ">
          <div className="pb-8 md:pb-0">
            <div className="flex flex-col items-start justify-between gap-4 mb-8 w-max">
              <h2 className="text-2xl font-bold text-left capitalize cartTitle ms:text-4xl text-violet-900">
                {uniqueCart.length < 1
                  ? "Your cart is empty"
                  : `Your Cart has ${cart.length} ${
                      cart.length <= 1 ? "product" : "products"
                    }`}
              </h2>
              <button
                type="button"
                onClick={deleteItem}
                className="flex items-center justify-between gap-2 px-0 py-2 capitalize rounded-md cursor-pointer bg-nutral3 text-denger"
              >
                Delete All{" "}
                <span className="flex items-center justify-center rounded-full bg-[#fafafa] p-1 backdrop-blur-sm">
                  <HiArchiveBoxXMark className="text-xl hover:animate-shake text-denger" />
                </span>
              </button>
            </div>
            {cart.length > 0 ? (
              <div>
                {cart.map((item) => {
                  const { id, title, price, images, category, quantity } = item;

                  return (
                    <div
                      key={id}
                      className="flex items-center justify-between gap-8 p-3 mb-2 bg-gray-50 border-b rounded-md group border-nutral1 bg-natural3 shadow-nutral2 drop-shadow-md"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 overflow-hidden rounded-md shrink-0">
                          <Image
                            className="w-full aspect-square"
                            src={images[0]}
                            alt="image"
                            width={80}
                            height={80}
                          />
                        </div>
                        <div>
                          <h2 className="text-sm font-semibold text-left capitalize text-natural2 md:text-base">
                            {title}
                          </h2>
                          <h2 className="py-1 text-small font-light text-left capitalize text-natural2 md:text-base">
                            {category}
                          </h2>
                          <h2 className="text-xl font-bold text-left capitalize text-violet-900 md:text-base">
                            ${price}
                          </h2>
                        </div>
                      </div>
                      <div>
                        <div className="grid gap-2 place-items-center">
                          <div className="">
                            <button
                              onClick={() => deleteCartItem(id)}
                              className="mb-2 cursor-pointer"
                            >
                              <HiArchiveBoxXMark className="text-xl text-denger" />
                            </button>
                          </div>
                          Qnty.
                          <div className="text-xl font-bold text-primary">
                            {quantity}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="grid w-full overflow-hidden place-items-center">
                <div className="z-10 animate-moveUp">
                  <Image
                    src={AddToCart}
                    alt="empty cart"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="z-20 grid w-full mt-6 place-items-center">
                  <Link href="/product">
                    <button
                      type="button"
                      className="py-2 px-8 capitalize font-semibold cursor-pointer w-max bg-primary text-nutral3 hover:bg-[#0c349b] rounded-md transition-all ease-in-out duration-[300ms]"
                    />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col items-start max-h-max">
            <div className="w-full pb-4 mb-2 border-b border-gray-500">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-base font-medium text-left capitalize">
                  subtotal
                </h2>
                <h2 className="text-base font-medium text-left capitalize">
                  ${total}
                </h2>
              </div>
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-base font-medium text-left capitalize">
                  shipping
                </h2>
                <h2 className="text-base font-medium text-left capitalize">
                  $<span>{cart?.length > 0 ? 3.45 : 0.0}</span>
                </h2>
              </div>
            </div>
            <div className="flex items-center justify-between w-full gap-4">
              <h2 className="text-base font-bold text-left capitalize align-baseline text-violet-900 md:text-xl">
                total
              </h2>
              <h2 className="text-base font-bold text-left capitalize text-violet-900 md:text-xl">
                {cart?.length > 0
                  ? `$ ${(+total + 3.45).toFixed(2)}`
                  : `$ ${0.0}`}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {uniqueCart.length >= 1 && (
        <div className="absolute left-2/4 top-4 z-[999] -translate-x-2/4 backdrop-blur-md">
          {modalIsOpen && (
            <Modal
              setCartValue={setCart}
              setUniqueCart={setUniqueCart}
              setModalIsOpen={setModalIsOpen}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
