import React, { Component } from 'react';
import { connect } from 'react-redux';
import requireAuth from '../../../utility/requiresAuth';
import { api } from '../../../services';

class SearchPlanet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: [],
    };
  }

  fetchPlanet = searchValue => {
    api.searchSW(searchValue).then(resp => {
      return this.setState({ searchData: resp.data.results });
    });
  };

  render() {
    const { searchData } = this.state;

    return (
      <>
        <input
          type="text"
          inputMode="text"
          onChange={e => this.fetchPlanet(e.target.value)}
        />
        {searchData.map(data => (
          <h1 key={data.created}>{data.name}</h1>
        ))}
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

export default requireAuth(
  connect(
    mapStateToProps,
    {},
  )(SearchPlanet),
);
