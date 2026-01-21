"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Testimonials({ testimonials = [] }) {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section
      id="testimonials"
      className="testimonials section light-background"
    >
      <div className="container section-title" data-aos="fade-up">
        <h2>Recommendations</h2>
        <p>See what people are saying about me!</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView={1}
          spaceBetween={40}
          pagination={{ clickable: true }}
          breakpoints={{
            1200: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="swiper-container"
        >
          {testimonials?.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>{testimonial?.quote}</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                {/* <Image
                  src={testimonial?.image}
                  alt={testimonial?.name}
                  width={80}
                  height={80}
                  className="testimonial-img"
                /> */}
                <h3>{testimonial?.name}</h3>
                <h4>{testimonial?.position}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
