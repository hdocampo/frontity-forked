import React from "react";
import { Container, Typography, Button } from '@material-ui/core';
import useStyles from './styles';

const Infrared = (props) => {
  const classes = useStyles();
  return (
    <Container
      className={classes.infraredContainer}
    >
      <div className={classes.infraredTextContainer}>
        <Typography
          component="h4"
          className={classes.infraredTitle}
        >
          <Typography component="span">
            Pioneros
            <br />
            en Uruguay
          </Typography>
          Infrared
        </Typography>
        <Typography
          className={classes.infaredContentText}
        >
          INFRARED es la última tecnología en sensores infrarrojos
          y nos permite generar imágenes térmicas 3D de alta resolución
          en tiempo real.
        </Typography>
        <Button
          className={classes.infraredButton}
          variant="contained"
          size="medium"
        >
          Consultar
        </Button>
      </div>
      <div className={classes.infraredImage} />
    </Container>
  )
}

export default Infrared;
