import { makeStyles } from '@material-ui/core/styles';
import {
  MAIN_PADDING,
  GREEN_PRIMARY,
  GREEN_PALE,
  GREEN_LIGHT,
  WHITE,
  BUTTON_STYLE,
  FONT_ROBOTO_CONDENSED,
  FONT_ROBOTO
} from '../../styles'

export default makeStyles(theme => ({
  header: {
    display: 'flex',
    width: '100%',
    padding: `${MAIN_PADDING} 0`,
    paddingBottom: 0,
    boxSizing: 'border-box',
    justifyContent: 'space-around',
    marginBottom: 25,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      paddingTop: 10
    },
    [theme.breakpoints.down('xs')]: {
      '& a': {
        maxWidth: '80vw'
      }
    },
  },
  headerImgLogo: {
    position: 'relative',
    zIndex: 2,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'inherit',
    }
  },
  headerSiteInfo: {
    opacity: 0,
    zIndex: '-1',
    position: 'absolute'
  },
  headerContactItem: {
    display: 'flex',
    marginRight: 40,
    [theme.breakpoints.down('sm')]: {
      '&:last-of-type': {
        marginRight: 0
      }
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: 10,
      outline: 'none'
    },
  },
  headerContactItemContent: {
    display: 'flex',
    fontSize: 12,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
    },
    '& p > span': {
      fontSize: 16,
      ...FONT_ROBOTO.BOLD
    },
    '& > div': {
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      },
    }
  },
  headerContactMobileInfo: {
    display: 'block',
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
    '& span': {
      ...FONT_ROBOTO.BOLD
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
  },
  headerContact: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      margin: '20px 0',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center'
    }
  },
  headerContactItemList: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      marginBottom: 40,
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: 0,
    },
  },
  headerNav: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 45,
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      marginTop: 0,
    },
  },
  headerNavList: {
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    '&, & > li': {
      listStyle: 'none'
    },
    '& > li': {
      marginRight: 45,
      textTransform: 'uppercase',
      fontSize: 18,
      [theme.breakpoints.down('xs')]: {
        display: 'none',
        '&:last-of-type': {
          display: 'flex',
          marginRight: 0,
          marginLeft: 10,
          justifyContent: 'center'
        }
      },
    },
    '& a': {
      color: GREEN_PRIMARY,
      ...FONT_ROBOTO_CONDENSED.REGULAR,
      '&:hover': {
        color: GREEN_LIGHT
      }
    },
    '& button': BUTTON_STYLE,
  },
  headerContactIcon: {
    color: GREEN_PRIMARY,
    fontSize: '32px !important',
    padding: 8,
    borderRadius: 30,
    backgroundColor: GREEN_PALE,
    marginRight: 14,
    overflow: 'visible',
    [theme.breakpoints.down('xs')]: {
      marginRight: 0
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
      transform: 'scale(0.9)',
      '&.active': {
        backgroundColor: GREEN_LIGHT,
        color: WHITE
      }
    }
  }
}));