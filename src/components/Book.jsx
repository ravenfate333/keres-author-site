import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for other props

// Assuming RetailerButtons already has PropTypes defined in its file
import RetailerButtons from "../components/RetailerButtons";

function Book({ title, imageSrc, blurb, retailerButtons }) {
    return (
      <div className="book">
        <div className={title.toLowerCase().replace(' ', '-')}>
          <img className="book-cover" src={imageSrc} alt={`${title} Book Cover`} />
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
  imageSrc: PropTypes.string.isRequired,
  blurb: PropTypes.arrayOf(PropTypes.string).isRequired,
  retailerButtons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Book;
