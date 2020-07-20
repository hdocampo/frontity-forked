import { makeStyles } from '@material-ui/core/styles';
import { 
  MAIN_PADDING, 
  GREEN_PRIMARY, 
  GREEN_PALE 
} from '../../constants'

export default makeStyles({
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: MAIN_PADDING,
    boxSizing: 'border-box',
    justifyContent: 'space-around',
  },
  headerContactItem: {
    display: 'flex',
    marginRight: '40px'
  },
  headerContactItemContent: {
    display: 'flex',
    fontSize: '12px',
    '& p > strong': {
      fontSize: '16px'
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
    display: 'flex'
  },
  headerContactIcon: {
    color: GREEN_PRIMARY,
    fontSize: '32px !important',
    padding: '10px',
    borderRadius: '30px',
    backgroundColor: GREEN_PALE,
    marginRight: '14px'
  }
});