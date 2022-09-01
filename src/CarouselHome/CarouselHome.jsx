import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/css/effect-fade";

import "./CarouselHome.scss";

const CarouselHome = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay, EffectFade]}
      autoHeight={true}
      navigation={true}
      effect="fade"
      loop={true}
      className="mySwiper"
    >
      <SwiperSlide className="w-full h-full ">
        <img 
          src="https://picsum.photos/1500/800?random=1"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full">
        <img
          src="https://picsum.photos/1500/800?random=2"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img 
          src="https://picsum.photos/1500/800?random=3"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img 
          src="https://picsum.photos/1500/800?random=4"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default CarouselHome;
