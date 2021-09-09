import React, { useEffect, useState } from 'react';
import {
  Global, css, connect, styled, Head
} from 'frontity';
import { Container, CircularProgress } from '@material-ui/core';

import Switch from '@frontity/components/switch';
import Script from "@frontity/components/script";

import Header from './header/header';
import FeaturedItems from './featured-items/featured-items';
import Infrared from './infrared/infrared';
import Slider from './slider/slider';
import ContactForm from './contact-form/contact-form';

import Post from './post';
import Loading from './loading';
import Title from './title';
import Footer from './footer/footer';
import PageError from './page-error';
// import useStyles from './styles'

const globalStyles = css`
  html, body {
    height: 100%;
  }
  body {
    margin: 0;
    font-family: 'Roboto-Light', sans-serif;
  }
  #root {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  a,
  a:visited {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif,
  }
`;

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state, libraries }) => {
  // const classes = useStyles();
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const [authOK, setAuth] = useState(false);

  const infraredContent = {
    subtitle: 'Pioneros <br /> en Uruguay',
    title: 'Infrared',
    text: `INFRARED es la última tecnología en sensores infrarrojos
    y nos permite generar imágenes térmicas 3D de alta resolución
    en tiempo real.`,
    buttonLink: '#contact-form-section',
  }

  const items = [
    {
      name: 'Nos encanta cuidarte',
      description: 'Porque tu dolor no puede esperar, te esperamos en la clínica con todas las medidas de seguridad sanitaria para cuidarte y cuidarnos.',
      buttonLink: '#contact-form-section',
      buttonText: 'Agendar Consulta',
      image: 'fisioespalda-slide-home-1.jpg'
    },
    {
      name: 'Pagá online',
      description: 'Ahora podés abonar tu cuota mensual con tu medio de pago preferido, de manera rápida, ágil y segura.',
      buttonLink: 'https://mpago.la/1Fkc7dB',
      buttonText: 'Pagar cuota',
      image: 'fisioespalda-slide-home-2.jpg'
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

  const handleAssetsLoaded = () => {
    setAuth(true);
  }

  const ScriptExecute = () => (
    <Script code={`
        window.addEventListener('load', () => {
          ${handleAssetsLoaded()} 
          console.log('all assets loaded')
        })
      `}
    />
  )

  if (!authOK) {
    return (
      <>
        <Title />
        <Head>
          <html lang="es" />
          <meta name="description" content={state.frontity.description} />
          <meta name="keywords" content={state.frontity.keywords} />
        </Head>
        <Container maxWidth="lg">
          <div style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          >
            <p>Loading elements...</p>
          </div>
        </Container>
        <ScriptExecute />
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
          <meta name="keywords" content={state.frontity.keywords} />
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&family=Roboto:wght@300;500;700&display=swap" rel="stylesheet" />
        </Head>

        {/* Add some global styles for the whole site, like body or a's.
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
        <Global styles={globalStyles} />

        {/* Add the header of the site. */}
        <Container maxWidth="lg">
          <HeadContainer>
            <Header
              libraries={libraries}
              isHome={data.isHome}
            />
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
              <Container maxWidth="lg" disableGutters>
                <HomeContainer>
                  <FeaturedItems
                    items={featuredList}
                  />
                  <ContactForm
                    libraries={libraries}
                  />
                  <Infrared
                    title={infraredContent.title}
                    subtitle={infraredContent.subtitle}
                    text={infraredContent.text}
                    link={infraredContent.buttonLink}
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
          <Footer />
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
  flex-wrap: wrap;

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
  flex-direction: column;
`;
