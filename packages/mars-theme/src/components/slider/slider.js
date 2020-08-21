import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Carousel from 'react-material-ui-carousel'
import { Button, Typography } from '@material-ui/core';
import useStyles from './styles'

const Slider = (props) => {
  const classes = useStyles();
  const { items } = props;

  const Item = (item) => {
    return (
      <div className={classes.slider}>
        <Typography variant="h2" component="h2" gutterBottom>
          {item.name}
        </Typography>
        <Typography component="p" className={classes.sliderText}>{item.description}</Typography>

        <AnchorLink href={item.buttonLink}>
          <Button
            variant="contained"
            className={classes.sliderButton}
          >
            {item.buttonText}
          </Button>
        </AnchorLink>
      </div>
    )
  }

  return (
    <Carousel
      className={classes.sliderContainer}
      indicators={false}
      navButtonsAlwaysVisible
      fullHeightHover
    >
      {
        items.map((item, i) => <Item key={i} {...item} />)
      }
    </Carousel>
  )
}

export default Slider;