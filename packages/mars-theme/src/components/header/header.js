import React, { useState } from 'react';
import { connect, styled } from 'frontity';
import Button from '@material-ui/core/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import HeaderContactItem from './header-contact-item';

import Link from '../link';

import Logo from '../../assets/logo.png'
import useStyles from './styles'

const Header = ({ state, libraries, isHome }) => {
  const classes = useStyles();
  const Html2React = libraries.html2react.Component;

  const contactInfo = {
    phone: 'Llamanos <span>al 2203 15 15</span>',
    location: 'Encontranos en <span>Martín C. Martínez 3114</span>',
    time: 'Horario: Lun. a Vie. <span>13:30 a 19:30</span>'
  }

  const [activeInfo, setActiveInfo] = useState(contactInfo.phone);
  const [activeSection, setActiveSection] = useState('phone');

  const changeActiveInfo = (contactInfoToShow) => {
    setActiveInfo(contactInfo[contactInfoToShow])
    setActiveSection(contactInfoToShow);
  }

  return (
    <>
      <div className={classes.header}>
        <StyledLink link="/">
          <img
            src={Logo}
            alt={state.frontity.title}
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
              handleClick={() => changeActiveInfo('phone')}
              isActive={activeSection === 'phone'}
            />
            <HeaderContactItem
              message="Encontranos en"
              number="Martín C. Martínez 3114"
              icon="location"
              handleClick={() => changeActiveInfo('location')}
              isActive={activeSection === 'location'}
            />
            <HeaderContactItem
              message="Horario: Lunes a Viernes"
              number="13:30 a 19:30"
              icon="time"
              handleClick={() => changeActiveInfo('time')}
              isActive={activeSection === 'time'}
            />
          </div>
          <div className={classes.headerNav}>
            <ul className={classes.headerNavList}>
              {/* 
              <li>
                <Link
                  link="/sobre-nosotros/"
                  aria-current="page"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <AnchorLink href="#featured-items-section">Servicios</AnchorLink>
                <a href="#">Servicios</a> 
              </li> 
                */}
              <li>
                {
                  isHome
                    ? <AnchorLink href="#contact-form-section"><Button>Consultar</Button></AnchorLink>
                    : (
                      <Link
                        link="/contactanos/"
                        aria-current="page"
                      >
                        <Button>Consultar</Button>
                      </Link>
                    )
                }
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.headerContactMobileInfo}>
          <Html2React html={activeInfo} />
        </div>
        {/* <MobileMenu /> */}
      </div>
      {/* <Nav /> */}
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
