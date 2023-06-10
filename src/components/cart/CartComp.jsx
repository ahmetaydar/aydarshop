import React from "react";
import { removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="my-10 flex items-center justify-between">
      <img
        className="w-[150px] h-[150px] object-cover"
        src={cart?.image}
        alt=""
      />
      <div className="w-[610px]">
        <div className="text-2xl font-bold">{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className="font-bold text-2xl">
        {cart?.price} TL ({cart?.quantity})
      </div>
      <div
        onClick={() => dispatch(removeFromCart(cart.id))}
        className="bg-red-500 cursor-pointer rounded-md text-white w-[150px] text-1xl h-[16px] justify-center flex items-center"
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default CartComp;
