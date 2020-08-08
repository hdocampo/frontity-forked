import { makeStyles } from '@material-ui/core/styles';
import {
  GREEN_PALE,
  GREEN_SECONDARY,
  GREEN_PRIMARY,
  BUTTON_STYLE
} from '../../styles'

export default makeStyles({
  contactFormContainer: {
    width: 50
  },
  contactForm: {
    backgroundColor: GREEN_PALE,
    padding: 50,
    '& > *': {
      display: 'none'
    },
    '& h2, h3, h4': {
      fontFamily: '"Playfair Display", serif',
    },
    '& .wpcf7': {
      display: 'block',
      '& p': {
        display: 'flex',
        justifyContent: 'center',
        '&:last-of-type': {
          justifyContent: 'flex-end'
        }
      },
      '& label': {
        fontFamily: 'Roboto-Light',
        fontSize: 16,
        color: GREEN_PRIMARY,
        marginBottom: 12,
        width: '100%'
      },
      '& span': {
        marginTop: 10,
        display: 'flex',
        width: '100%'
      },
      '& input, & textarea': {
        minHeight: 40,
        border: `${1}px solid ${GREEN_PRIMARY}`,
        width: '100%',
        '&[type=submit]': {
          ...BUTTON_STYLE,
          width: 'auto'
        }
      }
    }
  },
  contactFormTitle: {
    display: 'block',
    color: GREEN_SECONDARY,
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 45
  }
});