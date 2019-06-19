import React, { Component } from 'react';
import Home from '../component/templates/Home';
import Login from '../component/templates/Login';
import { Redirect } from 'react-router-dom';
// import SearchPlanet from '../component/templates/SearchPlanet';

const HOC = WrappedComponent =>
  class extends Component {
    checkAndRedirect = () => {
      const checkCookie = localStorage.getItem('userLogIn');

      if (window.location.pathname === '/login' && !checkCookie) {
        return <Redirect to="/" />;
        // return <Home />;
      } else {
        if (checkCookie) {
          return true;
        } else {
          return false;
        }
      }
    };

    render() {
      if (this.checkAndRedirect()) {
        return <WrappedComponent {...this.props} />;
      }
      return <Login />;
    }
  };

export default HOC;
