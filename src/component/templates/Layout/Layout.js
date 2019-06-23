import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from '../../../styles/theme';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// importing Pages
import Login from '../Login';
import SearchPlanet from '../SearchPlanet';
import Home from '../Home';

class Layout extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Switch>
            {/* <Route path="/login" component={Login} /> */}
            <Route path="/search" component={SearchPlanet} />
            <Route path="/" component={Login} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
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
