import { makeStyles } from '@material-ui/core/styles';
import {
  WHITE,
  FONT_ROBOTO,
  BUTTON_STYLE_LIGHT
} from '../../styles'

export default makeStyles(theme => ({
  sliderContainer: {
    width: '100%',
    height: '60vh',
    '& > div, & > div > div': {
      height: '100%'
    }
  },
  slider: {
    background: `url(${require("../../assets/fisioespalda-slide-home-1.jpg")})`,
    backgroundSize: 'cover',
    color: WHITE,
    width: '100%',
    height: '100%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    '& h2': {
      fontFamily: '"Playfair Display", serif',
      padding: '0 40px',
      [theme.breakpoints.down('sm')]: {
        fontSize: 38
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 32,
        maxWidth: '60vw'
      },
    }
  },
  sliderButton: {
    ...BUTTON_STYLE_LIGHT,
  },
  sliderText: {
    maxWidth: '40%',
    fontSize: 24,
    marginBottom: 51,
    ...FONT_ROBOTO.LIGHT,
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      maxWidth: '60%',
      marginBottom: 20
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
      maxWidth: '60%'
    },
  },
}));