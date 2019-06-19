import React from 'react';
import Input from '../../atom/Input';

const Form = ({ className, error, updateUser, logInUser }) => {
  return (
    <form className={`container ${className}`}>
      {error && <p>Invalid User</p>}
      <div>
        <label>User Name</label>
        <Input
          onBlur={e => {
            updateUser('username', e);
          }}
          type="text"
        />
      </div>
      <div>
        <label>PassWord</label>
        <Input
          type="password"
          onBlur={e => {
            updateUser('password', e);
          }}
        />
      </div>
      <button type="submit" name="submit" onClick={e => logInUser(e)}>
        Login In
      </button>
    </form>
  );
};

export default Form;
