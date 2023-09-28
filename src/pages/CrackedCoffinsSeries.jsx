import React from "react";
import "../styles/crackedcoffins.scss";
import CrackedCoffins from "../assets/CrackedCoffinsCover.jpg";
import BindingBlood from "../assets/BindingBloodCover.jpg";
import HarrowedHearts from "../assets/HarrowedHeartsCover.jpeg";

function CrackedCoffinsSeries() {
  return (
    <>
      <h1>Cracked Coffin Books Go Here</h1>
      <div className="book">
        <div className="cracked-coffins">
          <img className="book-cover" src={CrackedCoffins} alt="Cracked Coffins Book Cover" />
        </div>
      </div>
      <div className="book">
        <div className="binding-blood">
        <img className="book-cover" src={BindingBlood} alt="Binding Blood Book Cover" />
        </div>
      </div>
      <div className="book">
        <div className="harrowed hearts">
        <img className="book-cover" src={HarrowedHearts} alt="Harrowed Hearts Book Cover" />
        </div>
      </div>
    </>
  );
}

export default CrackedCoffinsSeries;
