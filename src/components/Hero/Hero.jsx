import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">

        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <h1 style={{fontSize:42}}>
              Discover
              <br />
             Our Stunning
              <br />
              Jewelry Collection
              </h1>
  
          </div>
          <div className="flexColStart hero-des">
          
            <span className="secondaryText">Elevate your style with our exquisite handcrafted jewelry,</span> 
            <span className="secondaryText">a fusion of elegance and craftsmanship.</span>
            <span className="secondaryText"> Discover timeless beauty today!</span>
            <div className="flexCenter search-bar">
              <HiLocationMarker color="var(--blue)" size={25} />
              <input type="text" placeholder="Search Here" />
              <button className="button">Search</button>
            </div>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={6} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={6} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Cutomer</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award winning</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-container1">
            <img src="./heart.png" alt="not load" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
