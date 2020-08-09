import React, { useEffect, useState } from 'react';
import {
  Global, css, connect, styled, Head
} from 'frontity';
import { Container, Typography } from '@material-ui/core';

// import Roboto from "../assets/fonts/Roboto-Regular.ttf";
import Switch from '@frontity/components/switch';
import RobotoLight from '../assets/fonts/Roboto-Light.ttf';
import RobotoMedium from '../assets/fonts/Roboto-Medium.ttf';
// import RobotoBold from "../assets/fonts/Roboto-Bold.ttf";
import RobotoCondensedBold from '../assets/fonts/RobotoCondensed-Bold.ttf';
import RobotoCondensed from '../assets/fonts/RobotoCondensed-Regular.ttf';

import Header from './header/header';
import FeaturedItems from './featured-items/featured-items';
import Slider from './slider/slider';
import ContactForm from './contact-form/contact-form';

import Post from './post';
import Loading from './loading';
import Title from './title';
import List from './list';
import PageError from './page-error';
// import useStyles from './styles'

const globalStyles = css`

  @font-face {
    font-family: "Roboto-Light";
    font-style: normal;
    font-weight: normal;
    font-display: fallback;
    src: url("${RobotoLight}") format("truetype");
  }

  @font-face {
    font-family: "Roboto-Bold";
    font-style: normal;
    font-weight: normal;
    font-display: fallback;
    src: url("${RobotoMedium}") format("truetype");
  }

  @font-face {
    font-family: "RobotoCondensed-Bold";
    font-style: normal;
    font-weight: normal;
    font-display: fallback;
    src: url("${RobotoCondensedBold}") format("truetype");
  }

  @font-face {
    font-family: "RobotoCondensed-Regular";
    font-style: normal;
    font-weight: normal;
    font-display: fallback;
    src: url("${RobotoCondensed}") format("truetype");
  }

  body {
    margin: 0;
    font-family: 'Roboto-Light', sans-serif;
  }
  a,
  a:visited {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: serif;
  }
`;

const passwordAuth = 'LetiJuli';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state, libraries }) => {
  // const classes = useStyles();
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const [authOK, setAuth] = useState(false);
  const [userInput, setInput] = useState(undefined);
  const authPrompt = () => {
    if (userInput === undefined) {
      setInput(window.prompt('Por favor ingrese la clave para ver el sitio:'))
    }
  }

  useEffect(() => {
    window.addEventListener('load', () => {
      // authPrompt();
      setAuth(true)
    })
  });

  useEffect(() => {
    userInput === passwordAuth ? setAuth(true) : null;
  }, [userInput]);

  const items = [
    {
      name: 'Volvemos para cuidarte',
      description: 'Porque tu dolor no puede esperar, te esperamos nuevamente en nuestra clínica, con todas las medidas santitarias para cuidarte y cuidarnos.'
    }
  ]

  const featuredList = [
    {
      title: 'Especialistas',
      description: 'Una larga trayectoria nos avala en el tratamiento de afecciones de columna.',
      icon: 'medical'
    },
    {
      title: 'Infrared',
      description: 'Somos pioneros en Uruguay en su uso para diagnóstico.',
      icon: 'infrared'
    },
    {
      title: 'Consulta Integral',
      description: 'Nuestro enfoque comprende la totalidad del paciente.',
      icon: 'approach'
    },

    {
      title: 'Puntualidad',
      description: 'Tu tiempo importa, agendás, llegás y te atendés!',
      icon: 'time'
    },
  ]

  if (!authOK) {
    return (
      <>
        <div style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        >
          <h2>
            Cargando elementos de pagina
          </h2>
        </div>
      </>
    )
  }

  if (authOK) {
    return (
      <>
        {/* Add some metatags to the <head> of the HTML. */}
        <Title />
        <Head>
          <html lang="es" />
          <meta name="description" content={state.frontity.description} />
          <meta name="keywords" content="curacion" />
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" />
        </Head>

        {/* Add some global styles for the whole site, like body or a's.
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
        <Global styles={globalStyles} />

        {/* Add the header of the site. */}
        <Container maxWidth="lg">
          <HeadContainer>
            <Header />
          </HeadContainer>
        </Container>

        {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
        <Main>
          <Switch>
            <HomeContent when={data.isHome}>
              <Slider
                items={items}
              />
              <Container maxWidth="lg">
                <HomeContainer>
                  <FeaturedItems
                    items={featuredList}
                  />
                  <ContactForm
                    libraries={libraries}
                  />
                </HomeContainer>
              </Container>
            </HomeContent>
            <Loading when={data.isFetching} />
            {/* <List when={data.isArchive} /> */}
            <Post when={data.isPostType} />
            <PageError when={data.isError} />
          </Switch>
        </Main>
      </>
    );
  }
};

export default connect(Theme);

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;

  @media(max-width: 960px) {
    flex-direction: column;
  }
`;

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;
