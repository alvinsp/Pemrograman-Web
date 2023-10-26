import React from "react";
import { HeroSection } from "./HeroElements";

const Hero = () => {
  return (
    <>
      <HeroSection className="light hero">
        <div className="heroInner">
          <span>
            <h1>Tomorrow Land</h1>
            <a href="#" className="btn btn-light">
              Explore Now
            </a>
          </span>
        </div>
      </HeroSection>
    </>
  );
};

export default Hero;
