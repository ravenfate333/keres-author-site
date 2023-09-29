import React from "react";
import PropTypes from 'prop-types';
import Button from "@mui/material/Button";

function RetailerButtons({ label, link }) {
  return (
    <Button
      variant="text"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </Button>
  );

}

RetailerButtons.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default RetailerButtons;
