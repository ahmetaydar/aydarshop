import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className="">
            <div className="text-6xl font-bold">
              Yere Sağlam Basman İçin Yeni Metcon Serisi
            </div>
            <div className="text-lg my-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi,
              obcaecati!
            </div>
            <div className="border rounded-full cursor-pointer text-3xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/94981386-b918-4bd1-94f8-d951fff65eb0/metcon-8-amp-antrenman-ayakkab%C4%B1s%C4%B1-Xwjw0D.png"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className="">
            <div className="text-6xl font-bold">
              Yere Sağlam Basman İçin Yeni Metcon Serisi
            </div>
            <div className="text-lg my-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi,
              obcaecati!
            </div>
            <div className="border rounded-full cursor-pointer text-3xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6ac68777-2865-4cf5-a25f-5ba26c7aa602/metcon-8-antrenman-ayakkab%C4%B1s%C4%B1-QHTl15.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
