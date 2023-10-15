import React from "react";
import Carousel from "../components/Carousel";
import "../styles/app.scss";
import Review1 from "../assets/images/Review1.webp";
import Review2 from "../assets/images/Review2.webp";
import Review3 from "../assets/images/Review3.webp";

function App() {
  return (
    <>
      <div>
        <div className="carousel-container">
          <Carousel />
        </div>
        <div className="reviews-container">
          <h1>WHAT READERS ARE SAYING ABOUT CRACKED COFFINS</h1>
          <div className="reviews">
            <img
              src={Review1}
              alt="Image of Cracked Coffins review."
            />
            <img
              src={Review2}
              alt="Image of Cracked Coffins review."
            />
            <img
              src={Review3}
              alt="Image of Cracked Coffins review."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
