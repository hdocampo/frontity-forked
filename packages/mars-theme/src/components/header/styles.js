import { makeStyles } from '@material-ui/core/styles';
import { 
  MAIN_PADDING, 
  GREEN_PRIMARY, 
  GREEN_PALE,
  GREEN_LIGHT,
  WHITE,
  BUTTON_STYLE,
} from '../../styles'

export default makeStyles({
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: `${MAIN_PADDING} 0`,
    paddingBottom: 0,
    boxSizing: 'border-box',
    justifyContent: 'space-around',
    marginBottom: 25
  },
  headerImgLogo: {
    position: 'relative',
    zIndex: 2
  },
  headerSiteInfo: {
    position: 'absolute',
    zIndex: 1,
    top: '-90px'
  },
  headerContactItem: {
    display: 'flex',
    marginRight: 40
  },
  headerContactItemContent: {
    display: 'flex',
    fontSize: 12,
    '& p > span': {
      fontSize: 16,
      fontFamily: 'Roboto-Bold'
    }
  },
  headerContact: {
    display: 'flex',
    flexDirection: 'column'
  },
  headerContactItemList: {
    display: 'flex'
  },
  headerNav: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 45
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
      fontSize: 18
    },
    '& a': {
      color: GREEN_PRIMARY,
      fontFamily: 'RobotoCondensed-Regular',
      '&:hover': {
        color: GREEN_LIGHT
      }
    },
    '& button' : BUTTON_STYLE,
  },
  headerContactIcon: {
    color: GREEN_PRIMARY,
    fontSize: '32px !important',
    padding: 8,
    borderRadius: 30,
    backgroundColor: GREEN_PALE,
    marginRight: 14,
    overflow: 'visible'
  }
});