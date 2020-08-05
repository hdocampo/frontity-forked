import React from 'react';
import { AccessTime, LocationOnOutlined, Phone } from '@material-ui/icons';

import useStyles from './styles'

const HeaderContactItem = (props) => {
  const { message, number } = props;
  const classes = useStyles();

  const buildIcon = () => {
    const { icon } = props;
    if (icon === 'time') {
      return <AccessTime className={classes.headerContactIcon} />
    }
    if (icon === 'location') {
      return <LocationOnOutlined className={classes.headerContactIcon} />
    }
    if (icon === 'phone') {
      return <Phone className={classes.headerContactIcon} />
    }
  }

  return (
    <div className={classes.headerContactItem}>
      <div className={classes.headerContactItemContent}>
        {buildIcon()}
        <div>
          <p>
            {message}
            <br />
            <span>{number}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeaderContactItem;