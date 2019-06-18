import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// importing Pages
import Login from '../Login';
import SearchPlanet from '../SearchPlanet';

const ProtectedRoute = ({ component: Comp, loggedIn, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={props => {
        return loggedIn ? (
          <Comp {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        );
      }}
    />
  );
};

class Layout extends Component {
  render() {
    const { login } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <ProtectedRoute
            path="/search"
            loggedIn={login.loggedIn}
            component={SearchPlanet}
          />
          <Route path="/" component={Login} />
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
