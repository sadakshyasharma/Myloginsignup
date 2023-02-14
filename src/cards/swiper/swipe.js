import React from "react";

// import Swiper core and required modules
import { Navigation, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Swipe = () => {
  return (
    <Swiper
      className="swipe"
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={70}
      slidesPerView={10}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      <div>
        <SwiperSlide className="swipertext">Dementia</SwiperSlide>
      </div>
      <div>
        <SwiperSlide className="swipertext">Depression</SwiperSlide>
      </div>
      <div>
        <SwiperSlide className="swipertext">Diabetes</SwiperSlide>
      </div>
      <div><SwiperSlide className="swipertext">Diphtheria</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Dyslexia</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Obesity</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Vertigo</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Vaginitis</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Ulcers</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Typhoid</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Alcoholism</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Anaemia</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Arthritis</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Asthma</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Autism</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Bird flu</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Chlamydia</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Cholera</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Tetanus</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Cancer</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Acne</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Dengue</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Edema</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Dementia</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Depression</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Diabetes</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Diphtheria</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Dyslexia</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Obesity</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Vertigo</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Vaginitis</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Ulcers</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Typhoid</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Alcoholism</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Anaemia</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Arthritis</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Asthma</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Autism</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Bird flu</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Chlamydia</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Cholera</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Tetanus</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Cancer</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Acne</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Dengue</SwiperSlide></div>
      <div><SwiperSlide className="swipertext">Edema</SwiperSlide></div>
    </Swiper>
  );
};
export default Swipe;
