import React from 'react';
import { AccessTime, LocationOnOutlined, Phone } from '@material-ui/icons';

import useStyles from './styles'

const HeaderContactItem = (props) => {
  const { 
    message, 
    number, 
    handleClick, 
    isActive 
  } = props;
  const classes = useStyles();

  const buildIcon = () => {
    const { icon } = props;
    const isActiveClass = isActive ? 'active' : '';
    if (icon === 'time') {
      return <AccessTime className={`${classes.headerContactIcon} ${isActiveClass}`} />
    }
    if (icon === 'location') {
      return <LocationOnOutlined className={`${classes.headerContactIcon} ${isActiveClass}`} />
    }
    if (icon === 'phone') {
      return <Phone className={`${classes.headerContactIcon} ${isActiveClass}`} />
    }
    return null;
  }

  return (
    <div
      className={classes.headerContactItem}
      role="button"
      onClick={handleClick}
      onKeyPress={handleClick}
      tabIndex={0}
    >
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