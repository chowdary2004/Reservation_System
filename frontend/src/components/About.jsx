import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";


const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we are serious about is food.</p>
            </div>
            <p className="mid">
            we're passionate about bringing the joy of fresh, flavorful ingredients straight to your kitchen. Founded with a vision to revolutionize the way people experience cooking at home, we're committed to sourcing the finest produce, meats, and artisanal products to elevate your culinary adventures. Our journey began with a simple belief: that everyone deserves access to high-quality, delicious ingredients that inspire creativity and delight the senses. Whether you're a seasoned chef or just starting out on your culinary exploration, we're here to support you every step of the way.
            </p>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
