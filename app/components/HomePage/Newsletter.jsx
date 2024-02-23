import React from "react";

function Newsletter() {
  return (
    <div>
      <h2 className="pb-4 font-serif text-xl font-semibold text-center capitalize">subscribe to newletter</h2>
      <div>
        <input
         
          type="email"
          placeholder="email address"
          className="px-2 py-2 border outline-none placeholder:capitalize"
        />
        <button className="px-4 py-2 font-semibold text-gray-200 capitalize transition-colors duration-300 ease-in-out border cursor-pointer bg-violet-900 border-violet-900 hover:bg-violet-700 hover:border-violet-700">
          subscribe
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
