import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';

import 'swiper/css/bundle';
import './slide.css';

SwiperCore.use([Autoplay]);

function Slide(props) {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {props.RestaurantsDataList.map((food, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={food.img} alt='' />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slide;
