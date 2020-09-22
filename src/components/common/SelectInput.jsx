import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({ id, label, options, value, onChange, error }) => (
  <div className={`form-group${error ? ' has-error' : ''}`}>
    <label htmlFor={id}>{label}</label>
    <div className="field">
      <select id={id} name={id} value={value} className="form-control" onChange={onChange}>
        <option value="">-</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
    {error && <div className="alert alert-danger">{error}</div>}
  </div>
);

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

SelectInput.defaultProps = {
  value: undefined,
  error: undefined,
};

export default SelectInput;
