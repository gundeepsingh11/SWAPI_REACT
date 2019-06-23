import React from 'react';
import withStyles from '../../../utility/withStyles';
import styles from './PlanetCard.style';

const PlanetCard = ({
  planetData,
  className,
  openModal,
  // largestPopulation,
}) => {
  const { name } = planetData;

  return (
    <div className={`card-wrapper ${className}`}>
      <div className="overlay" onClick={() => openModal(planetData)}>
        <div className="items title">
          <p>{name}</p>
          <hr />
        </div>

        <div className="items see-more">
          <span>Show More</span>
        </div>
      </div>
    </div>
  );
};

export default withStyles(PlanetCard, styles);
