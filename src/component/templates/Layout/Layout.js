import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// importing Pages
import Login from '../Login';
import SearchPlanet from '../SearchPlanet';
import Home from '../Home';

class Layout extends Component {
  render() {
    const { login } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/search" component={SearchPlanet} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = () => ({});

const mapStateToProps = state => ({
  ...state,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout);
