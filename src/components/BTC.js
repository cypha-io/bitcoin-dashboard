import React from 'react';
import { Container, Typography } from '@mui/material';
import AdminLayout from './AdminLayout';
import '../App.css';

const BTC = () => {
  return (
    <AdminLayout>
      <Container maxWidth="lg" className="BTC" style={{ backgroundColor: '#f7931a' }}>
        <Typography variant="h4" component="h1" gutterBottom style={{ fontFamily: 'Roboto', fontSize: '1.5rem', color: 'white' }}>
          BTC
        </Typography>
        {/* Add your BTC content here */}
      </Container>
    </AdminLayout>
  );
};

export default BTC;
