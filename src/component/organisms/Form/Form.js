import React from 'react';
import withStyles from '../../../utility/withStyles';
import styles from './Form.style';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

const Form = ({ className, error, updateUser, logInUser }) => {
  return (
    <form className={`container ${className}`}>
      {error && <p>Invalid User</p>}
      <Input
        onBlur={e => {
          updateUser('username', e);
        }}
        type="text"
        placeholder="User Name"
      />
      <Input
        type="password"
        onBlur={e => {
          updateUser('password', e);
        }}
        placeholder="Password"
      />
      <Button type="submit" name="submit" onClick={e => logInUser(e)}>
        Login In
      </Button>
    </form>
  );
};

export default withStyles(Form, styles);
