import { makeStyles } from '@material-ui/core/styles';
import { 
  MAIN_PADDING, 
  GREEN_PRIMARY, 
  GREEN_PALE,
  GREEN_LIGHT,
  WHITE,
  BLACK
} from '../../constants'

export default makeStyles({
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: MAIN_PADDING,
    paddingBottom: 0,
    boxSizing: 'border-box',
    justifyContent: 'space-around',
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
    marginRight: '40px'
  },
  headerContactItemContent: {
    display: 'flex',
    fontSize: '12px',
    '& p > span': {
      fontSize: '16px',
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
    marginTop: '45px'
  },
  headerNavList: {
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    '&, & > li' : {
      listStyle: 'none'
    },
    '& > li' : {
      marginRight: '45px',
      textTransform: 'uppercase',
      fontSize: '18px'
    },
    '& a': {
      color: GREEN_PRIMARY,
      fontFamily: 'RobotoCondensed-Regular',
      '&:hover' : {
        color: GREEN_LIGHT
      }
    },
    '& button' : {
      fontFamily: 'RobotoCondensed-Bold',
      backgroundColor: GREEN_LIGHT,
      color: WHITE,
      padding: '13px 29px 12px',
      fontSize: 'inherit',
      borderRadius: '10px',
      lineHeight: '1em',
      '&:hover' : {
        backgroundColor: GREEN_PRIMARY
      }
    },
  },
  headerContactIcon: {
    color: GREEN_PRIMARY,
    fontSize: '32px !important',
    padding: '8px',
    borderRadius: '30px',
    backgroundColor: GREEN_PALE,
    marginRight: '14px'
  }
});