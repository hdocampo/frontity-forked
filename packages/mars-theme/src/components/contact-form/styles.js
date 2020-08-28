import { makeStyles } from '@material-ui/core/styles';
import {
  GREEN_PALE,
  GREEN_SECONDARY,
  GREEN_PRIMARY,
  BUTTON_STYLE,
  FONT_ROBOTO
} from '../../styles'

export default makeStyles(theme => ({
  contactFormContainer: {
    width: 50
  },
  contactForm: {
    backgroundColor: GREEN_PALE,
    padding: 50,
    [theme.breakpoints.down('sm')]: {
      order: 2,
    },
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
        },
        '&:nth-child(5)': {
          display: 'none'
        }
      },
      '& label': {
        ...FONT_ROBOTO.LIGHT,
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
}));
