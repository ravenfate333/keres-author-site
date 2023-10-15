import React, { useEffect, useState } from "react";
import "../styles/carousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import SeriesFeature from "../assets/images/SeriesFeature.webp";
import HarrowedHeartsFeature from "../assets/images/HarrowedHeartsFeature.webp";

function Carousel2() {
  // setting a state for when the user clicks the dots
  const [clicked, setClicked] = useState(false);
  // setting a state for default animation when not interacted by user
  const [show, setShow] = useState(0);

  const dot = <FontAwesomeIcon icon={faCircle} />;

  // setting up useEffect to change the image every 5 seconds
  useEffect(() => {
    let timedChange;
    // having it run only if the user has not interacted with the dots
    if (!clicked) {
      timedChange = setInterval(() => {
        setShow((prevShow) => (prevShow === 0 ? 1 : 0));
      }, 5000);
    }
    // clearing the interval so that it doesn't overlap once the user clicks
    return () => clearInterval(timedChange);
  }, [clicked]);

  // setting a function to turn off useEffect and implement user selection
  const userChange = () => {
    setClicked(true);
    if (show === 0) {
      setShow(1);
    } else {
      setShow(0);
    }
  };

  return (
    <>
    {/* if show is 0 show the first setup, if it's 1 show the second */}
      {show === 0 ? (
        <>
          <img className="hero-image" src={SeriesFeature} alt="book series" />
          <p className="dots-box">
            <span className="dots" style={{ color: "rgb(85, 96, 107" }}>
              {dot}
            </span>{" "}
            <span
              onClick={userChange}
              className="dots"
              style={{ color: "rgb(151, 162, 174)" }}
            >
              {dot}
            </span>
          </p>
        </>
      ) : (
        <>
          <img
            className="hero-image"
            src={HarrowedHeartsFeature}
            alt="book preorder announcement"
          />
          <p className="dots-box">
            <span
              onClick={userChange}
              className="dots"
              style={{ color: "rgb(151, 162, 174)" }}
            >
              {dot}
            </span>{" "}
            <span className="dots" style={{ color: "rgb(85, 96, 107" }}>
              {dot}
            </span>
          </p>
        </>
      )}
    </>
  );
}

export default Carousel2;
