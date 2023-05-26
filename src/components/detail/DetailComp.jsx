import React from "react";

const DetailComp = ({ productDetail }) => {
  return (
    <div className="flex gap-10 my-10">
      <img
        className="w-[700px] h-[500px] object-cover"
        src={productDetail?.image}
        alt=""
      />
      <div className="">
        <div className="text-4xl font-bold">{productDetail?.title}</div>
        <div className="my-2 text-2xl ">{productDetail?.description}</div>
        <div className="my-2 text-xl text-red-500 ">
          Rating: {productDetail?.rating?.rate}
        </div>
        <div className="my-2 text-xl text-red-500 ">
          Count: {productDetail?.rating?.count}
        </div>
        <div className="text-5xl font-bold ">
          Price: {productDetail?.price} <span className="text-sm">TL</span>{" "}
        </div>
      </div>
    </div>
  );
};
// 01:32
export default DetailComp;
