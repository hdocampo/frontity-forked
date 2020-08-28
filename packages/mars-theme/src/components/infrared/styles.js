import { makeStyles } from '@material-ui/core/styles';
import {
  GREEN_SECONDARY,
  BUTTON_STYLE_LIGHT,
  FONT_ROBOTO,
  MAIN_PADDING
} from '../../styles'

export default makeStyles(theme => ({
  infraredContainer: {
    position: 'relative',
    display: 'flex',
    padding: `calc(${MAIN_PADDING} * 2)`,
    paddingBottom: 0,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: `calc(${MAIN_PADDING} / 2)`,
      paddingBottom: 0,
      order: 1,
      marginBottom: MAIN_PADDING
    },
  },
  infraredTextContainer: {
    maxWidth: '60%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'none',
      textAlign: 'center'
    },
  },
  infraredTitle: {
    color: GREEN_SECONDARY,
    fontSize: 66,
    marginBottom: 45,
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '1em',
    '&, & span': {
      fontFamily: '"Playfair Display", serif !important',
    },
    '& span': {
      fontSize: 30,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 46,
      '& span': {
        fontSize: 22,
      },
    }
  },
  infraredImage: {
    background: `url(${require('../../assets/infrared.jpg')})`,
    backgroundPosition: '-30px bottom',
    minWidth: 480,
    minHeight: 570,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      backgroundRepeat: 'no-repeat',
      height: '50vh',
      backgroundSize: 'contain',
      backgroundPositionX: 'center',
      minHeight: 'auto',
      minWidth: 'auto'
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    }
  },
  infaredContentText: {
    fontSize: 20,
    ...FONT_ROBOTO.LIGHT,
    marginBottom: 45,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    }
  },
  infraredButton: {
    ...BUTTON_STYLE_LIGHT,
    fontSize: 16
  }
}));