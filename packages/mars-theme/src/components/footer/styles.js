import { makeStyles } from '@material-ui/core/styles';
import {
  GREEN_SECONDARY,
  GREEN_THIRD,
  MAIN_PADDING,
  FONT_ROBOTO_CONDENSED,
  GREEN_PRIMARY,
} from '../../styles'

export default makeStyles(theme => ({
  footerContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: GREEN_THIRD,
    padding: MAIN_PADDING,
    minHeight: 160,
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      padding: 40,
    }
  },
  footerLogoContainer: {
    alignItems: 'center',
    display: 'flex',
    width: 'inherit',
    [theme.breakpoints.down('md')]: {
      marginBottom: 40,
      justifyContent: 'center',
    },
  },
  footerLogoLink: {
    [theme.breakpoints.down('xs')]: {
      maxWidth: '80vw',
      textAlign: 'center',
    },
    '& img': {
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 'inherit',
      }
    }
  },
  footerFindUs: {
    color: GREEN_PRIMARY,
    fontSize: 20,
    textTransform: 'uppercase',
    marginBottom: 14,
    ...FONT_ROBOTO_CONDENSED.REGULAR
  },
  footerSocialIcon: {
    color: GREEN_SECONDARY,
    fontSize: '32px !important'
  },
  footerSocialLink: {
    margin: '0 10px',
  },
  footerSocialLinkList: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-end',
    },
  }
}));