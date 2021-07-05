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
    minWidth: 'calc(45% - 2%)',
    paddingLeft: '3%',
    marginBottom: 10,
    '&:nth-child(2n)': {
      marginLeft: 40,
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
      },
    },
    [theme.breakpoints.down('sm')]: {
      '&:last-of-type': {
        marginRight: 0
      }
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: 10,
      outline: 'none',
      minWidth: 'auto',
    },
  },
  headerContactItemContent: {
    display: 'flex',
    fontSize: 12,
    width: '100%',
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
    },
  },
  headerItemTriangleWsp: {
    position: 'absolute',
    maxWidth: 15,
    height: 'auto',
    left: 1,
    bottom: 3,
    [theme.breakpoints.down('sm')]: {
      bottom: '-1px',
      left: '-1px',
    },
    [theme.breakpoints.down('xs')]: {
      bottom: '-1px',
      left: 2,
    }
  },
  headerContactMobileInfo: {
    display: 'block',
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
    marginBottom: 25,
    marginTop: 10,
    '& span': {
      ...FONT_ROBOTO.BOLD
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
  },
  headerContact: {
    display: 'flex',
    width: '90%',
    paddingLeft: '90px',
    [theme.breakpoints.down('md')]: {
      margin: '20px 0',
      paddingLeft: 0,
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      flexDirection: 'column',
    },
    [theme.breakpoints.down('xs')]: {
      // flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
      marginBottom: 0,
    }
  },
  headerContactItemList: {
    display: 'flex',
    maxWidth: '70%',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      maxWidth: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: 0,
    },
  },
  joinLink: {
    display: 'flex',
    justifyContent: 'center',
    // marginTop: 45,
    alignItems: 'center',
    textTransform: 'uppercase',
    fontSize: 18,
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      marginTop: 0,
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
  headerNavList: {
    display: 'flex',
    margin: 0,
    padding: 0,
    '&, & > li': {
      listStyle: 'none'
    },
    '& > li': {
      // marginRight: 45,
      [theme.breakpoints.down('xs')]: {
        display: 'none',
        '&:last-of-type': {
          display: 'flex',
          marginRight: 0,
          marginLeft: 10,
        }
      },
    },
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
      marginRight: 0,
      transform: 'scale(0.9)',
      '&.active': {
        backgroundColor: GREEN_LIGHT,
        color: WHITE
      }
    },
  }
}));