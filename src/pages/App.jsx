import React from "react";
import Carousel from "../components/Carousel";
import SeriesFeature from "../assets/SeriesFeature.png";
import HarrowedHeartsFeature from "../assets/HarrowedHeartsFeature.png";

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
          <Carousel items={items} />
        </div>
      </div>
    </>
  );
}

export default App;
