import React from 'react';
import { Container, Typography } from '@mui/material';
import '../App.css';

const Support = () => {
  return (
    <Container maxWidth="lg" className="Support" style={{ backgroundColor: '#f7931a' }}>
      <Typography variant="h4" component="h1" gutterBottom style={{ fontFamily: 'Roboto', fontSize: '1.5rem', color: 'white' }}>
        Support
      </Typography>
      {/* Add your Support content here */}
    </Container>
  );
};

export default Support;
