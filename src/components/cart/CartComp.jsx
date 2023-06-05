import React from "react";

const CartComp = ({ cart }) => {
  return (
    <div className="my-10 flex items-center justify-between">
      <img
        className="w-[150px] h-[150px] object-cover"
        src={cart?.image}
        alt=""
      />
      <div>
        <div className="text-2xl font-bold">{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div>
        {cart?.price} TL ({cart?.quantity})
      </div>
      <div className="bg-red-500 cursor-pointer rounded-md text-white w-[150px] text-1xl h-[16px] justify-center flex items-center">
        Ürünü Sil
      </div>
    </div>
  );
};

export default CartComp;
