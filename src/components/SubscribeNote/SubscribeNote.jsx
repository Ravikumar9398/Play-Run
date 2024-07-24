import React from "react";

const SubscribeNote = () => {
  return (
    <div
      id="subscribe"
      className="w-full border-2 border-green-500
     p-4 flex items-center rounded-xl gap-2 mt-10
     "
    >
      <input
        type="email"
        placeholder="please enter your Email"
        className="w-full bg-gray-100 text-black  font-semibold pl-2 font-poppins
         p-3 outline-none
        "
      />
      <button
        type="button"
        className="bg-green-500 p-2 text-white  font-poppins font-semibold"
      >
        Subscribe
      </button>
    </div>
  );
};

export default SubscribeNote;
