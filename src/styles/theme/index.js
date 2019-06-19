import colors from './colors';
import fonts from './fonts';
import zIndex from './zIndex';
import dimension from './dimensions';

const theme = {
  brandPrimaryColor: colors.BRAND_PRIMARY,
  textColorPrimary: colors.TEXT_PRIMARY,
  textColorSecondary: colors.BRAND_SECONDARY,
  textColorSecondaryLight: colors.TEXT_ALTERNATE,
  textColorWhite: colors.WHITE,
  textColorOrange: colors.ORANGE,
  textColorBlack: colors.BLACK,
  borderColor: colors.BORDER_LINE,
  textColorGrey: colors.GREY,
  textColorDarkGrey: colors.GREY1,
  textColorMildGrey: colors.GREY2,
  errorColor: colors.ERROR,
  headerBorder: colors.TEXT_LIGHT,

  backgroundColorPrimary: colors.WHITE,
  backgroundColorSecondary: colors.WHITE,
  backgroundColorQuote: colors.SILVER,
  backgroundColorLightGrey: colors.LIGHT_GREY,

  borderColorSecondary: colors.BORDER_SECONDARY,

  linkColorPrimary: colors.LINK_PRIMARY,
  linkColorSecondary: colors.BG_SECONDARY_BUTTON,

  buttonBackgroundColorPrimary: colors.BG_PRIMARY_BUTTON,
  buttonBackgroundColorSecondary: colors.BG_SECONDARY_BUTTON,
  buttonColorPrimary: colors.WHITE,
  buttonColorSecondary: colors.WHITE,
  buttonHoverColor: colors.BUTTON_HOVER,

  tickColor: colors.YELLOW,

  colorOutline: colors.OUTLINE,

  fontFamilyDefault: fonts.PRIMARY_FONT_LIGHT,
  fontFamilyPrimaryLight: fonts.PRIMARY_FONT_LIGHT,
  fontFamilyPrimaryBold: fonts.PRIMARY_FONT_BOLD,
  fontFamilySecondaryLight: fonts.SECONDARY_FONT_LIGTH,
  fontFamilySecondaryBold: fonts.SECONDARY_FONT_BOLD,
  fontFamilyTertiaryLight: fonts.TERTIARY_FONT_LIGHT,
  fontFamilyTertiaryBold: fonts.TERTIARY_FONT_BOLD,

  fontExtraSmall: fonts.FONT_XS,
  fontLarge: fonts.FONT_L,
  fontXL: fonts.FONT_XL,
  fontXXL: fonts.FONT_XXL,
  fontXXXL: fonts.FONT_XXXL,
  fontXXXXL: fonts.FONT_XXXXL,
  fontXXXXXL: fonts.FONT_XXXXXL,
  fontSmall: fonts.FONT_S,

  fontNormal: fonts.FONT_NORMAL,
  fontBook: fonts.FONT_BOOK,
  fontMedium: fonts.FONT_MEDIUM,
  fontSemiBold: fonts.FONT_SEMI_BOLD,
  fontBold: fonts.FONT_BOLD,

  letterSpacing: fonts.LETTER_SPACING,
  lineHeightBase: fonts.BASE_LINE_HEIGHT,

  minHeightHeaderMobile: dimension.dimensionConst.HEADER_MIN_HEIGHT_MOBILE,
  minHeightHeaderDesktop: dimension.dimensionConst.HEADER_MIN_HEIGHT_DESKTOP,
  maxWidthPageContent: dimension.dimensionConst.PAGE_CONTENT_MAX_WIDTH,
  largeMediaQuery: dimension.mediaQuery.large,
  tabletMediaQuery: dimension.mediaQuery.tablet,
};

const themes = { dimension, zIndex, ...theme };
export default themes;
