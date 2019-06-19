import React, { Component } from 'react';
import './App.css';
import { SET_CHARACTERS, SET_LOGIN } from '../../../modules/action';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import requireAuth from '../../../utility/requiresAuth';
import withStyles from '../../../utility/withStyles';
import styles from './Login.style';
import Form from '../../organisms/Form';
import Search from '../SearchPlanet';

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

  componentDidMount() {
    this.checkCookie();
  }

  checkCookie = () => {
    const checkCookie = localStorage.getItem('userLogIn');
    if (checkCookie) {
      this.props.history.push('/search');
    }
  };

  updateUser = (attr, event) => {
    const { user } = this.state;
    const updateUser = { ...user };
    updateUser[attr] = event.target.value;

    this.setState({
      user: updateUser,
    });
  };

  logInUser = e => {
    e.preventDefault();
    const { setLogin, characters } = this.props;
    const checkCookie = localStorage.getItem('userLogIn');

    if (checkCookie) {
      return this.props.history.push('/search');
    } else {
      if (characters.results) {
        if (this.checkUser(characters.results)) {
          setLogin(true);
          return this.props.history.push('/search');
        } else {
          this.setState({
            error: true,
          });
        }
      } else {
        this.setState({
          error: true,
        });
      }
    }
  };

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
    const { className } = this.props;

    return (
      <section className={className}>
        <Form
          error={error}
          logInUser={this.logInUser}
          updateUser={this.updateUser}
        />
      </section>
      // <form className={`container ${className}`}>
      //   {error && <p>Invalid User</p>}
      //   <div>
      //     <label>User Name</label>
      //     <Input
      //       onBlur={e => {
      //         this.updateUser('username', e);
      //       }}
      //       type="text"
      //     />
      //   </div>
      //   <div>
      //     <label>PassWord</label>
      //     <Input
      //       type="password"
      //       onBlur={e => {
      //         this.updateUser('password', e);
      //       }}
      //     />
      //   </div>
      //   <button type="submit" name="submit" onClick={e => this.logInUser(e)}>
      //     Login In
      //   </button>
      // </form>
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
)(withStyles(Login, styles));
