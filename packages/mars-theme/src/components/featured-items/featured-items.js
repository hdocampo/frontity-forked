import React from 'react';
import { styled } from 'frontity';
import { Typography } from '@material-ui/core';
import useStyles from './styles'

const FeaturedItems = (props) => {
  const classes = useStyles();
  const { items } = props;

  return (
    <Container>
      <Typography
        component="h4"
        className={classes.featuredHeading}
      >
        Parte de lo que brindamos:
      </Typography>
      <div className={classes.featuredList}>
        {
          items.map((item, index) => (
            <div
              className={classes.featuredItem}
              key={index}
            >
              <img
                alt={item.description}
                src={require(`./../../assets/${item.icon}.svg`)}
              />
              <div className={classes.featuredItemTxtContainer}>
                <Typography
                  component="h6"
                  className={classes.featuredItemTitle}
                >
                  {item.title}
                </Typography>
                <Typography
                  component="p"
                  className={classes.featuredItemText}
                >
                  {item.description}
                </Typography>
              </div>
            </div>
          ))
        }
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  box-sizing: border-box;

  @media(min-width: 960px) {
    max-width: 60%;
  }
`;

export default FeaturedItems;