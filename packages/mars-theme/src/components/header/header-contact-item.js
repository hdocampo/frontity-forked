import React from 'react';
import {
  PhoneIphone,
  AccessTime,
  LocationOnOutlined,
  Phone
} from '@material-ui/icons';

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
      return <PhoneIphone className={`${classes.headerContactIcon} ${isActiveClass}`} />
    }
    if (icon === 'whatsapp') {
      return (
        <div style={{ position: 'relative', display: 'block' }}>
          <Phone className={`${classes.headerContactIcon} ${isActiveClass}`} />
          <span className={`${classes.headerItemTriangleWsp}`}>
            <svg width="15" height="15" viewBox="0 0 121 117" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 117L38.5 0L121 77.5L0 117Z" fill={isActive ? '#00BA9E' : '#F7F8E4'} />
            </svg>
          </span>
        </div>
      )
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