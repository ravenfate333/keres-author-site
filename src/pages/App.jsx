import React from "react";
import SeriesFeature from "../assets/SeriesFeature.png";
import HarrowedHeartsFeature from "../assets/HarrowedHeartsFeature.png";
import Carousel2 from "../components/carousel/Carousel2";

const items = [
  {
    image: HarrowedHeartsFeature,
  },
  {
    image: SeriesFeature,
  },
];

function App() {
  return (
    <>
      <div>
        <div>
          <Carousel2 />
        </div>
      </div>
      <div>put more here</div>
    </>
  );
}

export default App;
