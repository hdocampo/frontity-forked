// import { makeStyles } from '@material-ui/core/styles';

export const BLACK = '#000';
export const WHITE = '#fff';
export const GREEN_PRIMARY = '#6BB42E';
export const GREEN_SECONDARY = '#056734';
export const GREEN_PALE = '#F7F8E4';
export const GREEN_LIGHT = '#00BA9E';
export const GREEN_THIRD = '#358A33';
export const YELLOW_PALE = '#E1E289'

export const MAIN_PADDING = '40px';

const ROBOTO_FAMILY = '"Roboto", sans-serif';
const ROBOTO_CONDENSED = '"Roboto Condensed", sans-serif';

export const FONT_ROBOTO = {
  LIGHT: {
    fontFamily: ROBOTO_FAMILY,
    fontWeight: 300
  },
  REGULAR: {
    fontFamily: ROBOTO_FAMILY,
    fontWeight: 500
  },
  BOLD: {
    fontFamily: ROBOTO_FAMILY,
    fontWeight: 700
  }
}

export const FONT_ROBOTO_CONDENSED = {
  LIGHT: {
    fontFamily: ROBOTO_CONDENSED,
    fontWeight: 300
  },
  REGULAR: {
    fontFamily: ROBOTO_CONDENSED,
    fontWeight: 400
  },
  BOLD: {
    fontFamily: ROBOTO_CONDENSED,
    fontWeight: 700
  }
}

export const BUTTON_STYLE = {
  ...FONT_ROBOTO_CONDENSED.BOLD,
  backgroundColor: GREEN_LIGHT,
  color: WHITE,
  padding: '13px 29px 12px',
  fontSize: 18,
  borderRadius: '10px',
  lineHeight: '1em',
  border: 0,
  textTransform: 'uppercase',
  textAlign: 'center',
  '&:hover': {
    backgroundColor: GREEN_PRIMARY
  }
}

export const BUTTON_STYLE_LIGHT = {
  color: GREEN_SECONDARY,
  backgroundColor: GREEN_PALE,
  fontSize: 18,
  ...FONT_ROBOTO_CONDENSED.REGULAR
}