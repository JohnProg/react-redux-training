import React, { PropTypes } from 'react';

const Card = ({ content, meta }) => {
  return (
    <div className="p2 bg-white border rounded">
      <h1 className="h2 mt0 muted">{ meta }</h1>
      <p className="mb0">{ content }</p>
    </div>
  );
};

Card.propTypes = {
  content: PropTypes.string.isRequired,
  meta: PropTypes.string.isRequired,
};

Card.defaultProps = {};

const styles = {
  inner: {
    width: 300,
    height: 300,
  },
};

export default Card;
