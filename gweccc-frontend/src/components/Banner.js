import React, { useState, useEffect } from "react";
import "./Banner.css";
import sliderImg from "../assets/slider.png";
import secondSlide from "../assets/slider1.png";

function Banner() {
  const [slide, setSlide] = useState(1);
  const [imageSrc, setImageSrc] = useState("/assets/slider.png");
  const [heading1, setHeading1] = useState(
    "Water Sustainability & Energy Transition"
  );
  const [heading2, setHeading2] = useState("Implications on GCC & the World");

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prevSlide) => (prevSlide === 1 ? 2 : 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (slide === 1) {
      setImageSrc(sliderImg);
      setHeading1("Water Sustainability & Energy Transition");
      setHeading2("Implications on GCC & the World");
    } else {
      setImageSrc(secondSlide);
      setHeading1("2nd Edition of the");
      setHeading2(
        "Kingdom of Bahrain's Initiative for Water, Energy & Climate Security and Sustainability"
      );
    }
  }, [slide]);

  return (
    <div className="banner">
      <div className="banner-image">
        <img src={imageSrc} alt="Banner" className="banner-img" />
      </div>

      <div className="banner-content">
        <h1 className="animate-heading">{heading1}</h1>

        <h2 className="animate-heading">{heading2}</h2>
      </div>
      <div className="line-animation line1"></div>
    </div>
  );
}

export default Banner;
