import React, { PropTypes }  from 'react';

const Select = ({ value, onChange, options }) => {
  return (
    <select className="block col-12 mb1 field"
      onChange={ onChange }>
      {/* Finish the implementation of select */}
    </select>
  );
};

Select.defaultProps = {
  type: 'text',
  disabled: false,
  style: {},
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Select;
