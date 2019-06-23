import React from 'react';
import withStyles from '../../../utility/withStyles';
import styles from './Button.style';

const Button = ({ children, type, name, onClick, className }) => {
  return (
    <div className={className}>
      <button
        className="button-field"
        onClick={onClick}
        type={type}
        name={name}>
        {children}
      </button>
    </div>
  );
};

export default withStyles(Button, styles);
