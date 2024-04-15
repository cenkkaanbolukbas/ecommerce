import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    // dots: true, //slider altındaki noktalar
    infinite: true,
    speed: 500,
    // autoplay: true, //otomatik geçiş için
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 ">
          <div className="">
            <div className="text-5xl font-bold px-5 ">En Kaliteli Ayakkabılar Burada!</div>
            <div className="py-2 px-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab eum officia facere provident quia adipisci voluptates totam dolorem repudiandae esse, consequatur, hic odio ipsum expedita maxime nam vero accusantium soluta.</div>
            <div className="px-4"><button className="border rounded-full cursor-pointer  h-10 w-20">İncele</button></div>
          </div>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/745aee22-e411-4aa8-970d-4037b9a42fb3/air-max-dn-ayakkab%C4%B1s%C4%B1-hZC5QK.png" alt=""/>
        </div>
        <div className="!flex items-center bg-gray-100 ">
          <div className="">
            <div className="text-5xl font-bold px-5">En Kaliteli Ayakkabılar Burada!</div>
            <div className="py-2 px-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab eum officia facere provident quia adipisci voluptates totam dolorem repudiandae esse, consequatur, hic odio ipsum expedita maxime nam vero accusantium soluta.</div>
            <div className="px-5"><button className="border rounded-full cursor-pointer p-2">İncele</button></div>
          </div>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1419ed34-7762-420a-9f2a-2e2a65d5aba9/dunk-low-ayakkab%C4%B1s%C4%B1-92qkmK.png" alt=""/>
        </div>
        
      </Slider>
    </div>
  );
};
export default SliderComp;

{
  /* BÜYÜK RESİM ÜZERİNE YAZI GETİRMEK İSTEDİĞİMİZDE * <div className="absolute top-56 md:left-[10%] md:right-[10%]">/}

      {/* <div className="absolute top-56 md:left-[10%] md:right-[10%]">
        <h1 className="font-bold text-5xl">En Kaliteli Ayakkabılar Burada!</h1>
        <p className="py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae aspernatur praesentium qui natus eum explicabo optio veritatis dolore blanditiis! Minima doloremque quisquam dignissimos repellendus asperiores aliquid, a quaerat aperiam deserunt.</p>
        <button className="border rounded-full cursor-pointer w-16 flex items-center justify-center bg-gray-200 ">İncele</button>
      </div> */
}
