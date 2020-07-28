import React from "react";
import useStyles from './styles'

const ContactForm = props => {
  const classes = useStyles();
  return (
    <div className={classes.contactForm}>
      <form action="">
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" required/>
        <label htmlFor="phone">E-mail</label>
        <input type="number" name="phone" id="phone" required/>
      </form>
    </div>
  )
}

export default ContactForm;