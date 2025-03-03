import React from 'react';
import { Container, Typography } from '@mui/material';
import '../App.css';

const Contact = () => {
  return (
    <Container maxWidth="lg" className="Contact" style={{ backgroundColor: '#f7931a' }}>
      <Typography variant="h4" component="h1" gutterBottom style={{ fontFamily: 'Roboto', fontSize: '1.5rem', color: 'white' }}>
        Contact
      </Typography>
      {/* Add your Contact content here */}
    </Container>
  );
};

export default Contact;
