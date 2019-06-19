// @flow

type zIndex = {
  [key: string]: number | Object,
};

// z-index
export default ({
  zLoader: 1000,
  zOverlay: 900,
  zSticky: 100,
  ZHeader: 99,
  zArrows: 10,
  zFilterActions: 1,
}: zIndex);
