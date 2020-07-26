import React from "react";
import { Global, css, connect, styled, Head } from "frontity";

import Roboto from "../assets/fonts/Roboto-Regular.ttf";
import RobotoLight from "../assets/fonts/Roboto-Light.ttf";
import RobotoMedium from "../assets/fonts/Roboto-Medium.ttf";
import RobotoBold from "../assets/fonts/Roboto-Bold.ttf";
import RobotoCondensedBold from "../assets/fonts/RobotoCondensed-Bold.ttf";
import RobotoCondensed from "../assets/fonts/RobotoCondensed-Regular.ttf";

import Switch from "@frontity/components/switch";
import Header from "./header/header";
import Slider from "./slider/slider";

import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
// import useStyles from './styles'

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // const classes = useStyles();
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  var items = [
    {
      name: "Volvemos para cuidarte",
      description: "Porque tu dolor no puede esperar, te esperamos nuevamente en nuestra clínica, con todas las medidas santitarias para cuidarte y cuidarnos."
    }
  ]

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <meta name="keywords" content="curacion" />
        <html lang="es" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Slider
            items={items}
          />
          {/* <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} /> */}
        </Switch>
      </Main>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-display: fallback;
    src: url("${Roboto}") format("truetype");
  }

  @font-face {
    font-family: "Roboto-Light";
    font-style: normal;
    font-weight: normal;
    font-display: fallback;
    src: url("${RobotoLight}") format("truetype");
  }

  @font-face {
    font-family: "Roboto-Medium";
    font-style: normal;
    font-weight: normal;
    font-display: fallback;
    src: url("${RobotoMedium}") format("truetype");
  }

  @font-face {
    font-family: "Roboto-Bold";
    font-style: normal;
    font-weight: normal;
    font-display: fallback;
    src: url("${RobotoBold}") format("truetype");
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
    font-family: 'Roboto', sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;
