// @flow
// eslint-disable-next-line no-unused-vars
type dimension = {
  [key: string]: number | Object,
};

// Component dimension
const dimensionConst = {
  MIN_WIDTH_DESKTOP: 1023,
  MIN_WIDTH_TABLET: 48,
};

const mediaQuery = {
  large: `(min-width: ${dimensionConst.MIN_WIDTH_DESKTOP}px)`,
  tablet: `(min-width: ${dimensionConst.MIN_WIDTH_TABLET}rem)`,
};

export default { dimensionConst, mediaQuery };
