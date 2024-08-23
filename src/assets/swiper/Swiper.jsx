import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import Swiper navigation styles (optional)
import "swiper/css/pagination"; // Import Swiper pagination styles (optional)
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import firstbook from "./english-for-everyone-english-grammar-guide.pdf";
import secondbook from "./English-Grammar-in-Use.-Murphy-R.pdf";
import thirdbook from "./oxford-word-skills-basic.pdf";

import imagen from "../images/book.png";
import second from "../images/secondbook.png";
import third from "../images/thirdbook.png";

const MySwiper = () => {
  const imgs = [
    { id: 1, img: imagen, book: firstbook },
    { id: 2, img: second, book: secondbook },
    { id: 3, img: third, book: thirdbook },
    { id: 4, img: imagen, book: firstbook },
  ];
  return (
    <Swiper
      spaceBetween={40}
      centeredSlides={true}
      slidesPerView={3}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper "
    >
      {imgs.map((value) => (
        <SwiperSlide key={value.id}>
          <br />
          <a href={value.book} download>
          <img
            className="bg-auto rounded-lg hover:bg-contain cursor-pointer "
            src={value.img}
            alt="img"
          /></a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiper;
