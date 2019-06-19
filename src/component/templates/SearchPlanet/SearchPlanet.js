import React, { Component } from 'react';
import { connect } from 'react-redux';
import requireAuth from '../../../utility/requiresAuth';
import { api } from '../../../services';
import withStyles from '../../../utility/withStyles';
import styles from './SearchPlanet.style';
import axios from 'axios';
import Input from '../../atom/Input';

class SearchPlanet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planetList: [],
      pageNumber: 1,
      searchedValue: '',
      next: '',
      prev: '',
    };
  }

  fetchPlanet = searchValue => {
    this.setState({ searchedValue: searchValue }, () => {
      api
        .searchSW(this.state.searchedValue, this.state.pageNumber)
        .then(resp => {
          return this.setState({
            planetList: resp.data.results,
            next: resp.data.next,
            prev: resp.data.previous,
          });
        });
    });
  };

  loadMore = () => {
    return axios.get(this.nextURL).then(resp => {
      return this.setState({
        planetList: resp.data.results,
        next: resp.data.next,
        prev: resp.data.previous,
      });
    });
  };

  render() {
    const { planetList, searchedValue } = this.state;
    const { className } = this.props;

    return (
      <div className={`container ${className}`}>
        <Input
          type="text"
          inputMode="text"
          onChange={e => this.fetchPlanet(e.target.value)}
          value={searchedValue}
        />
        <ul className="card-wrapper row">
          {planetList.map(data => (
            <li className="col-md-3" key={data.created}>
              {data.name}
            </li>
          ))}
        </ul>
        {this.state.next && <div onClick={this.loadMore}>Load More</div>}
        {this.state.prev && <div onClick={this.loadPrev}>Load Previous</div>}
      </div>
    );
  }
}

const mapDispatchToProps = () => ({});

const mapStateToProps = state => ({
  ...state,
});
// console.log(requireAuth(SearchPlanet));

export default requireAuth(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(withStyles(SearchPlanet, styles)),
);
