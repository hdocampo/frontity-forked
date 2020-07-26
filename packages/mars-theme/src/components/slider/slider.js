import React from "react";
import Carousel from 'react-material-ui-carousel'
import { Button, Typography, Box } from '@material-ui/core';
import useStyles from './styles'

const Slider = (props) => {
  const classes = useStyles();
  const { items } = props;

  const Item = (props) => {
    const { item } = props;

    return (
      <div className={classes.slider}>
        <Typography variant="h2" component="h2" gutterBottom>
          {item.name}
        </Typography>
        <Typography component="p" className={classes.sliderText}>{item.description}</Typography>

        <Button variant="contained" className={classes.sliderButton}>
          Agendar Consulta
              </Button>
      </div>
    )
  }

  return (
    <Carousel
      className={classes.sliderContainer}
      indicators={false}
      navButtonsAlwaysVisible={true}
      fullHeightHover={true}
    >
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  )
}

export default Slider;