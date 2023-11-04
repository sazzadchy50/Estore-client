import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import axios from "axios";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { useLoaderData } from "react-router-dom";
import BrandDetailsCard from "./BrandDetailsCard";
import NotAvailable from "./NotAvailable";


const BrandDetails = () => {
  const brandData = useLoaderData();
  console.log(brandData);

  return (
    <div>
      {/* advertising slider */}
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="w-full h-[60vh]"
              src="https://i.ibb.co/QDSGhB4/product-advertising-hero-image-header-layout-1302-21013.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[60vh]"
              src="https://i.ibb.co/BKJ1vD7/9-D15-F7-E4-DE63-420-C-B341-75068-C8997-F7.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[60vh]"
              src="https://i.ibb.co/RcRKJw9/1-FCA9597-5960-47-D6-92-A8-92-F156-F32193.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* card data */}
    <div className="grid lg:grid-cols-3 gap-5  container mx-auto mt-32 p-5">
       
        {
          brandData.length !== 0 ? brandData.map((item) => <BrandDetailsCard item={item} key={item.id}></BrandDetailsCard> ) :
          <NotAvailable></NotAvailable>
        }
    </div>

    </div>
  )
};

export default BrandDetails;
