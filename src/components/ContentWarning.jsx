import React from 'react';

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

export default ContentWarning;