import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core'
import { getPage } from '../../services/services'
import useStyles from './styles';

const ContactForm = ({ libraries }) => {
  const Html2React = libraries.html2react.Component;
  const classes = useStyles();
  const [formHTML, setFormHTML] = useState(undefined);

  useEffect(() => {
    getPage(8).then(response => setFormHTML(response.content.rendered))
  });

  return (
    <div
      className={classes.contactForm}
      id="contact-form-section"
    >
      <Typography variant="h4" className={classes.contactFormTitle}>Coordina tu consulta</Typography>
      {formHTML ? <Html2React html={formHTML} /> : 'cargando formulario...'}
    </div>
  )
}

export default ContactForm;