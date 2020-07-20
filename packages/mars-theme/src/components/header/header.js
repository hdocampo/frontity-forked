import React from "react";
import { connect, styled } from "frontity";
import Button from '@material-ui/core/Button';
import HeaderContactItem from './header-contact-item'

import Link from "../link";
import Nav from "../nav";
import MobileMenu from "../menu";

import Logo from './../../assets/logo.png'
import useStyles from './styles'

const Header = ({ state }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.header}>
        <StyledLink link="/">
          <img src={Logo} alt={state.frontity.title}
            className={classes.headerImgLogo}
          />
          <div className={classes.headerSiteInfo}>
            <Title>{state.frontity.title}</Title>
            <Description>{state.frontity.description}</Description>
          </div>
        </StyledLink>
        <div className={classes.headerContact}>
          <div className={classes.headerContactItemList}>
            <HeaderContactItem
              message="Llamanos al"
              number="2203 15 15"
              icon="phone"
            />
            <HeaderContactItem
              message="Encontranos en"
              number="Martín C. Martínez 3114"
              icon="location"
            />
            <HeaderContactItem
              message="Horario: Lunes a Viernes"
              number="13:30 a 19:30"
              icon="time"
            />
          </div>
          <div className={classes.headerNav}>
            <ul className={classes.headerNavList}>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Servicios</a></li>
              <li><Button>Consultar</Button></li>
            </ul>
          </div>
        </div>
        <MobileMenu />
      </div>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  max-height: 110px;
`;
