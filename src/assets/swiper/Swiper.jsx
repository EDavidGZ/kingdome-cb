import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import Swiper navigation styles (optional)
import "swiper/css/pagination"; // Import Swiper pagination styles (optional)
import {Autoplay, Pagination, Navigation } from "swiper/modules"


import imagen from "../../assets/images/at.png"



const MySwiper = () => {
    const imgs = [
        { id: 1, img: imagen },
        { id: 2, img: imagen },
        { id: 3, img: imagen },
        { id: 4, img: imagen },
    ]
  return (

      <Swiper
        spaceBetween={40}
        centeredSlides={true}
        slidesPerView={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        {imgs.map((value) => (
          <SwiperSlide key={value.id}><br />
              <img className="bg-auto rounded-lg hover:bg-contain cursor-help" src={value.img} alt="img" />
          </SwiperSlide>
        ))}
      </Swiper>

  );
};

export default MySwiper;
