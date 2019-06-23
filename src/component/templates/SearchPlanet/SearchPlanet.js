import React, { Component } from 'react';
import { connect } from 'react-redux';
import requireAuth from '../../../utility/requiresAuth';
import { api } from '../../../services';
import Modal from 'react-modal';
import withStyles from '../../../utility/withStyles';
import styles from './SearchPlanet.style';
import axios from 'axios';
import Input from '../../atoms/Input';
import PlanetCard from '../../molecules/PlanetCard';
import Header from '../../organisms/Header';

const customStyles = {
  content: {
    top: '50%',
    left: 'auto',
    right: '50%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-20%, -50%)',
    transition: 'all 2s',
  },
};

Modal.setAppElement('#root');

class SearchPlanet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planetList: [],
      pageNumber: 1,
      searchedValue: '',
      next: '',
      prev: '',
      modalIsOpen: false,
      selectedPlanet: {},
      numberSearched: 0,
      errorMessage: '',
      completeOneMin: false,
    };
  }

  openModal = planetData => {
    document.getElementById(planetData.idx).classList.add('zoom-card');
    this.setState({ modalIsOpen: true, selectedPlanet: planetData });
  };

  closeModal = () => {
    document
      .getElementById(this.state.selectedPlanet.idx)
      .classList.remove('zoom-card');
    this.setState({ modalIsOpen: false });
  };

  onSearchFocus = e => {
    const searchField = document.getElementById('input-search');
    searchField.classList.remove('input-search');
  };

  fetchPlanet = searchValue => {
    this.setState(
      {
        searchedValue: searchValue,
        numberSearched: this.state.numberSearched + 1,
      },
      () => {
        api
          .searchSW(this.state.searchedValue, this.state.pageNumber)
          .then(resp => {
            return this.setState({
              planetList: resp.data.results,
              next: resp.data.next,
              prev: resp.data.previous,
              errorMessage:
                this.state.numberSearched === 15
                  ? 'sorry you can do 15 search in 1 min'
                  : '',
            });
          });
      },
    );
  };

  countdown = () => {
    console.log('in interva;');
    clearInterval();
    setInterval(() => {
      console.log('in interva;');
      this.setState({ completeOneMin: true });
      this.checkTimer();
    }, 5000);
  };
  // 60000

  checkTimer = () => {
    if (this.state.completeOneMin && this.state.numberSearched === 15) {
      console.log('in if');
      return true;
    } else {
      console.log('in else');
      this.setState({ completeOneMin: false });
      return false;
    }
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
    const {
      planetList,
      searchedValue,
      modalIsOpen,
      selectedPlanet,
      // numberSearched,
      // completeOneMin,
      errorMessage,
    } = this.state;
    const { className } = this.props;
    let populationArray = [];
    let largest = 0;

    return (
      <div className={`container ${className}`}>
        <Header logOut />
        <Input
          type="text"
          inputMode="text"
          onChange={e => this.fetchPlanet(e.target.value)}
          onClick={this.onSearchFocus}
          // onFocus={() => this.countdown()}
          value={searchedValue}
          placeholder="Search"
          id="input-search"
          className="input-search"
          // disable={() => this.checkTimer()}
        />
        <ul className="card-wrapper row">
          {planetList.map((data, idx) => {
            populationArray.push(data.population);
            largest =
              Math.round(
                (populationArray.sort((a, b) => a - b).reverse()[0] /
                  data.population) *
                  100,
              ) / 100;

            const newData = {
              ...data,
              idx,
            };
            return (
              <li
                className="col-md-3"
                id={idx}
                key={data.created}
                style={{ flexBasis: `${largest}px` }}>
                <PlanetCard
                  planetData={newData}
                  openModal={this.openModal}
                  largestPopulation={largest}
                />
              </li>
            );
          })}
        </ul>
        <div id="counter" />
        {errorMessage && <span>{errorMessage}</span>}
        {this.state.next && <div onClick={this.loadMore}>Load More</div>}
        {this.state.prev && <div onClick={this.loadPrev}>Load Previous</div>}
        {modalIsOpen && (
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Modal">
            <p>
              Rotation Period:
              <span>{selectedPlanet.rotation_period}</span>
            </p>
            <p>
              Diameter:
              <span>{selectedPlanet.diameter}</span>
            </p>
            <p>
              Climate:
              <span>{selectedPlanet.climate}</span>
            </p>
            <p>
              Gravity:
              <span>{selectedPlanet.gravity}</span>
            </p>
            <p>
              Terrain:
              <span>{selectedPlanet.terrain}</span>
            </p>
            <p>
              Surface_water:
              <span>{selectedPlanet.surface_water}</span>
            </p>
            <p>
              Population:
              <span>{selectedPlanet.population}</span>
            </p>
            <p>
              Created:
              <span>{selectedPlanet.created}</span>
            </p>
            <p>
              Edited:
              <span>{selectedPlanet.edited}</span>
            </p>
            <a href={selectedPlanet.url}>Planet Url</a>
          </Modal>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = () => ({});

const mapStateToProps = state => ({
  ...state,
});

export default requireAuth(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(withStyles(SearchPlanet, styles)),
);
