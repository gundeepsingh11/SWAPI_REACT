import React from 'react';
import withStyles from '../../../utility/withStyles';
import styles from './Input.style';

const Input = ({
  type,
  inputMode,
  onChange,
  className,
  onBlur,
  label,
  onClick,
  placeholder,
  disable,
  onFocus,
  id,
}) => {
  return (
    <div className={className} onClick={onClick} id={id}>
      <label className="label-field">{label}</label>
      <input
        onBlur={onBlur}
        className="input-field"
        type={type}
        inputMode={inputMode}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disable}
        onFocus={onFocus}
      />
      <span className="line" />
    </div>
  );
};

export default withStyles(Input, styles);
