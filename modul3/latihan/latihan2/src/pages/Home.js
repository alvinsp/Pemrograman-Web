import React from "react";
import Hero from "../components/Hero/hero";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Hero />
    </div>
  );
};

export default Home;
