import React, { Component } from 'react';
import './App.css';
import { setLogin, SET_CHARACTERS, SET_LOGIN } from '../../../modules/action';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        password: '',
      },
      error: false,
    };
  }

  updateUser(attr, event) {
    const { user } = this.state;
    const updateUser = { ...user };
    updateUser[attr] = event.target.value;

    this.setState({
      user: updateUser,
    });
  }

  logInUser(e) {
    e.preventDefault();
    const { setLogin, history } = this.props;
    const { characters } = this.props;

    if (characters.results) {
      if (this.checkUser(characters.results)) {
        setLogin(true);
        history.push('/search');
      } else {
        this.setState({
          error: true,
        });
      }
    }
  }

  checkUser = data => {
    const { user } = this.state;
    for (let element of data) {
      if ('Luke Skywalker' === element.name && '19BBY' === element.birth_year) {
        localStorage.setItem('userLogIn', element.name);
        return true;
      }
      return false;
    }
  };

  render() {
    const { error } = this.state;

    return (
      <form>
        {error && <p>Invalid User</p>}
        <div>
          <label>User Name</label>
          <input
            onBlur={e => {
              this.updateUser('username', e);
            }}
            type="text"
          />
        </div>
        <div>
          <label>PassWord</label>
          <input
            type="password"
            onBlur={e => {
              this.updateUser('password', e);
            }}
          />
        </div>
        <button type="submit" name="submit" onClick={e => this.logInUser(e)}>
          Login In
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  getCharacters: () => dispatch({ type: SET_CHARACTERS }),
  setLogin: isLogedIn => dispatch({ type: SET_LOGIN, isLogedIn }),
});

const mapStateToProps = state => ({
  ...state,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
