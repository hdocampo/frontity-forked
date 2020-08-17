import React from "react";
import { connect } from 'frontity';
import {
  Container,
  Link,
  Grid,
  Typography
} from '@material-ui/core/';
import { Facebook, Twitter, Instagram } from '@material-ui/icons'
import useStyles from './styles';

import Logo from '../../assets/logo-blanco.png'

const Footer = ({ state }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.footerContainer}
    >
      <Grid
        item
        md={4}
        className={classes.footerLogoContainer}
      >
        <Link 
          href="/"
          className={classes.footerLogoLink}
        >
          <img
            src={Logo}
            alt={state.frontity.title}
          // className={classes.footerImgLogo}
          />
        </Link>
      </Grid>
      <Grid item md={2} />
      <Grid
        item
        md={6}
        className={classes.footerSocialLinkList}
      >
        <Typography className={classes.footerFindUs}>Encontranos en</Typography>
        <Grid>
          <Link
            href="https://www.facebook.com/pg/fisioespalda"
            target="_blank"
            className={classes.footerSocialLink}
          >
            <Facebook className={classes.footerSocialIcon} />
          </Link>
          <Link
            href="https://twitter.com/fisioespalda"
            target="_blank"
            className={classes.footerSocialLink}
          >
            <Twitter className={classes.footerSocialIcon} />
          </Link>
          <Link
            href="https://www.instagram.com/fisioespalda/"
            target="_blank"
            className={classes.footerSocialLink}
          >
            <Instagram className={classes.footerSocialIcon} />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default connect(Footer);