import { makeStyles } from '@material-ui/core/styles';
import {
  GREEN_SECONDARY,
} from '../../constants'

export default makeStyles({
  featuredHeading: {
    color: GREEN_SECONDARY,
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 45
  },
  featuredList: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  featuredItem: {
    display: 'flex',
    maxWidth: '40%',
    marginRight: 50,
    marginBottom: 50
  },
  featuredItemTitle: {
    color: GREEN_SECONDARY,
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: 20,
    textTransform: 'uppercase'
  },
  featuredItemText: {
    fontSize: 14,
    fontFamily: 'Roboto-Light'
  },
  featuredItemTxtContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 25
  }
});