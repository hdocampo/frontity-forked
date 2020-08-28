import React from "react";
import { Container, Typography, Button } from '@material-ui/core';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import useStyles from './styles';

const Infrared = (props) => {
  const {
    subtitle, 
    title, 
    text, 
    link,
    libraries
  } = props;
  const classes = useStyles();
  const Html2React = libraries.html2react.Component;

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
            <Html2React html={subtitle} />
          </Typography>
          {title}
        </Typography>
        <Typography
          className={classes.infaredContentText}
        >
          <Html2React html={text} />
        </Typography>
        <AnchorLink href={link}>
          <Button
            className={classes.infraredButton}
            variant="contained"
            size="medium"
          >
            Consultar
          </Button>
        </AnchorLink>
      </div>
      <div className={classes.infraredImage} />
    </Container>
  )
}

export default Infrared;
