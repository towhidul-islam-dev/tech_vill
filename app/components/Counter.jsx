import React, { useContext, useState } from "react";
import CartContextProvider from "../../context/CartContext";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const Counter = ({ productId: id }) => {
  const { cart, setCart, incrementItem, decrementItem } =
    useContext(CartContextProvider);
  return (
    <div className="">
      <div className="flex items-center gap-2 justify-center">
        <button
          type="button"
          onClick={() => decrementItem(id)}
          className="text-sm bg-gray-200 p-1 rounded-md flex items-center justify-center overflow-hidden cursor-pointer -rotate-90"
        >
          <HiChevronUp className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => incrementItem(id)}
          className="text-sm -rotate-90 flex items-center bg-gray-200 p-1 rounded-md justify-center overflow-hidden cursor-pointer"
        >
          <HiChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Counter;
