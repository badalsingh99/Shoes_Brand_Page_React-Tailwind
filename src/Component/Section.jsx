import React from "react";
import { SiFlipkart } from "react-icons/si";
import { BsAmazon } from "react-icons/bs";

const Section = () => {
  return (
    <main className="Main container">
      <div className="content-1">
        <h1>Your Feet Deserve The Best</h1>
        <p>
          "Discover unparalleled style and comfort in our footwear collection.
          From timeless classics to contemporary designs, each pair is a
          testament to quality and craftsmanship. Elevate your stride with shoes
          that seamlessly blend fashion and function. Step into a world of
          unparalleled elegance – where every step is a statement."
        </p>
        <div className="hero-btn">
          <button className="button">ShopNow</button>
          <button className="btn-2">Category</button>
        </div>
        <div className="shopping">
          <h3>Also Available On</h3>
          <div className="brand-image">
            <SiFlipkart className="icon" />
            <h4 className="text-content">Flipkart</h4>
            <BsAmazon className="icons" />
            <h4 className="text-content">Amazon</h4>
          </div>
        </div>
      </div>
      <div className="content-2">
        <img
          src="../public\images\shoes-png-45072 (1).png"
          alt="shoes"
          style={{ width: "500px", height: "500px" }}
        />
      </div>
    </main>
  );
};

export default Section;
