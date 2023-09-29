import React from "react";
import PropTypes from "prop-types";
import RetailerButtons from "./RetailerButtons";

function Book({ title, coverImage, blurb, retailerButtons }) {
    console.log("Image source:", coverImage);
    return (
      <div className="book">
        <div className={title.toLowerCase().replace(' ', '-')}>
          <img className="book-cover" src={coverImage} alt={`${title} Book Cover`} />
          <div className="info-container">
            <h2>{title}</h2>
            <div className="blurb">
              {blurb.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="buy-buttons">
              {retailerButtons.map((button, index) => (
                <RetailerButtons key={index} label={button.label} link={button.link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

Book.propTypes = {
  title: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  blurb: PropTypes.arrayOf(PropTypes.string).isRequired,
  retailerButtons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Book;
