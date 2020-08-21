import { makeStyles } from '@material-ui/core/styles';
import {
  GREEN_SECONDARY,
  GREEN_PRIMARY,
  FONT_ROBOTO,
  FONT_ROBOTO_CONDENSED
} from '../../styles'

export default makeStyles(theme => ({
  featuredItemsContainer:{
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    paddingTop: 40,
    [theme.breakpoints.up('md')]: {
      maxWidth: '60%',
      padding: 40,
    }
  },
  featuredHeading: {
    color: GREEN_SECONDARY,
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 45,
    fontFamily: '"Playfair Display", serif',
  },
  featuredList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  featuredItem: {
    display: 'flex',
    maxWidth: '90%',
    flexBasis: 280,
    flexGrow: 1,
    marginBottom: 50, 
    [theme.breakpoints.up('sm')]: {
      marginRight: 45,
      flexGrow: 0
    },
  },
  featuredItemIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 93,
    height: 93,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: GREEN_PRIMARY,
    borderRadius: '50%'
  },
  featuredItemIcon: {
    maxHeight: '50%'
  },
  featuredItemTitle: {
    color: GREEN_SECONDARY,
    ...FONT_ROBOTO_CONDENSED.REGULAR,
    fontSize: 20,
    textTransform: 'uppercase'
  },
  featuredItemText: {
    fontSize: 14,
    ...FONT_ROBOTO.LIGHT
  },
  featuredItemTxtContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 25
  }
}));