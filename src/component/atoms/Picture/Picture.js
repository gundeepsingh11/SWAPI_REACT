import React from 'react';
import withStyles from '../../../utility/withStyles';
import styles from './Picture.style';

const Picture = ({ alt, largeImage, smallIamge, className }) => {
  return (
    <picture className={className}>
      <source media="(min-width: 650px)" srcSet={largeImage} />
      <source media="(min-width: 465px)" srcSet={smallIamge} />
      <img
        src={smallIamge}
        title={alt ? alt : 'image'}
        alt={alt ? alt : 'image'}
      />
    </picture>
  );
};

export default withStyles(Picture, styles);
