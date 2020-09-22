import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ id, label, value, onChange, error }) => (
  <div className={`form-group${error ? ' has-error' : ''}`}>
    <label htmlFor={id}>{label}</label>
    <div className="field">
      <input type="text" className="form-control" id={id} name={id} value={value} onChange={onChange} />
    </div>
    {error && <div className="alert alert-danger">{error}</div>}
  </div>
);

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  value: undefined,
  error: undefined,
};

export default TextInput;
