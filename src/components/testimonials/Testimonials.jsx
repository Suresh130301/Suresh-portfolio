import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
/*-------npm install swiper or npm i swiper for cursal effect-------*/
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Gowtham",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusamus illum illo architecto doloremque doloribus nihil ipsam in optio saepe, unde commodi voluptate obcaecati dolores consectetur error enim nam mollitia.",
  },
  {
    avatar: AVTR2,
    name: "Durai Samy",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusamus illum illo architecto doloremque doloribus nihil ipsam in optio saepe, unde commodi voluptate obcaecati dolores consectetur error enim nam mollitia.",
  },
  {
    avatar: AVTR3,
    name: "Durai Samy",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusamus illum illo architecto doloremque doloribus nihil ipsam in optio saepe, unde commodi voluptate obcaecati dolores consectetur error enim nam mollitia.",
  },
  {
    avatar: AVTR4,
    name: "Durai Samy",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusamus illum illo architecto doloremque doloribus nihil ipsam in optio saepe, unde commodi voluptate obcaecati dolores consectetur error enim nam mollitia.",
  },
];

const testimonials = () => {
  return (
    <section id="Testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonial__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Clint img" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default testimonials;
