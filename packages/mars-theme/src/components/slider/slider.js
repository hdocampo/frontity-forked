import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Carousel from 'react-material-ui-carousel';
import { Button, Typography } from '@material-ui/core';

import useStyles from './styles'

const Slider = (props) => {
  const classes = useStyles();
  const { items } = props;

  const Item = (item) => {
    const buildSlideLink = () => {
      return item.buttonLink.indexOf('http') !== -1 ? (
        <Button
          variant="contained"
          className={classes.sliderButton}
        >
          <a
            href={item.buttonLink}
            target="_blank"
            rel="noreferrer"
            title={item.buttonText}
          >
            {item.buttonText}
          </a>
        </Button>
      ) : (
        <AnchorLink href={item.buttonLink}>
          <Button
            variant="contained"
            className={classes.sliderButton}
          >
            {item.buttonText}
          </Button>
        </AnchorLink>
      )
    }
    return (
      <div
        className={classes.slider}
        style={
          {
            background: `url(${require(`../../assets/${item.image}`)})`,
            backgroundSize: 'cover',
            backgroundPositionX: 'center'
          }
        }
      >
        <Typography variant="h2" component="h2" gutterBottom>
          {item.name}
        </Typography>
        <Typography component="p" className={classes.sliderText}>
          {item.description}
        </Typography>
        {buildSlideLink()}
      </div>
    )
  }

  return (
    <Carousel
      className={classes.sliderContainer}
      indicators={false}
      navButtonsAlwaysVisible
      fullHeightHover
      swipe
    >
      {
        items.map((item, i) => <Item key={i} {...item} />)
      }
    </Carousel>
  )
}

export default Slider;