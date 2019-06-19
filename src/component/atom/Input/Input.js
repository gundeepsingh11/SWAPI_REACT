import React from 'react';
import withStyles from '../../../utility/withStyles';
import styles from './Input.style';

const Input = ({ type, inputMode, onChange, className, onBlur }) => {
  return (
    <div className={className}>
      <input
        onBlur={onBlur}
        className="input-field"
        type={type}
        inputMode={inputMode}
        onChange={onChange}
      />
    </div>
  );
};

export default withStyles(Input, styles);
