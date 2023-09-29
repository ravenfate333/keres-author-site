import React from 'react';
import PropTypes from 'prop-types';

function ContentWarning({ title, message }) {
  return (
    <div className="content-warning">
      <h3>{title}</h3>
      <div className="message">
        {message.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

ContentWarning.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ContentWarning;