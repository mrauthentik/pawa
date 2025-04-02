import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from "react-router-dom";
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination,  } from "swiper/modules";
import img1 from '../assets/images/slide1.png'
import img2 from '../assets/images/slide4.png'
import img3 from '../assets/images/slide3.png'

const slides = [
  {
    image: img1,
    title: "Power Up Your Control",
    description: "Easily track, manage, and pay for your electricity in one place. Say goodbye to unexpected blackouts!",
    buttonText: "Next",
  },
  {
    image: img2,
    title: "Stay in Charge of Your Meter",
    description: "Add and manage multiple prepaid meters, track consumption, and never lose power unexpectedly.",
    buttonText: "Next",
  },
  {
    image: img3,
    title: "Fast & Secure Payments",
    description: "Top up your meter, monitor expenses, and access your transaction history—all in a few taps.",
    buttonText: "Get Started",
  },
];

const OnboardingSlider = () => {
    const navigate = useNavigate()
  return (
    <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper">
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="flex flex-col items-center justify-center">
          <img src={slide.image} alt={slide.title} className="w-full h-60 object-cover" />
          <div className="p-4 bg-black-500 text-white text-center rounded-t-2xl text-box">
            <h2 className="text-xl font-bold">{slide.title}</h2>
            <p className="text-sm mt-2">{slide.description}</p>
            <button className="mt-4 bg-yellow-500 text-black px-6 py-2 rounded-lg">{slide.buttonText}</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OnboardingSlider;
