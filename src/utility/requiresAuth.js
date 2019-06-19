import React, { Component, PropTypes } from 'react';
import Home from '../component/templates/Home';

const HOC = WrappedComponent =>
  class extends Component {
    checkAndRedirect = () => {
      const checkCookie = localStorage.getItem('userLogIn');

      if (checkCookie) {
        return true;
      }
    };

    render() {
      if (this.checkAndRedirect()) {
        return <WrappedComponent {...this.props} />;
      }
      return <Home />;
    }
  };

export default HOC;
