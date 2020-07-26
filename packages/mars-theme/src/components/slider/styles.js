import { makeStyles } from '@material-ui/core/styles';
import { 
  MAIN_PADDING, 
  GREEN_PRIMARY, 
  GREEN_PALE,
  GREEN_LIGHT,
  WHITE,
  BLACK,
  GREEN_SECONDARY
} from '../../constants'

export default makeStyles({
  sliderContainer: {
    width: '100vw',
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
  },
  sliderButton: {
    color: GREEN_SECONDARY,
    backgroundColor: GREEN_PALE,
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: 18
  },
  sliderText: {
    maxWidth: '40%',
    fontSize: 24,
    fontFamily: 'Roboto-Light',
    marginBottom: 51
  }
});