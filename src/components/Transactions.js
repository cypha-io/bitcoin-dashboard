import React from 'react';
import { Container, Typography } from '@mui/material';
import AdminLayout from './AdminLayout';
import '../App.css';

const Transactions = () => {
  return (
    <AdminLayout>
      <Container maxWidth="lg" className="Transactions" style={{ backgroundColor: '#f7931a' }}>
        <Typography variant="h4" component="h1" gutterBottom style={{ fontFamily: 'Roboto', fontSize: '1.5rem', color: 'white' }}>
          Transactions
        </Typography>
        {/* Add your Transactions content here */}
      </Container>
    </AdminLayout>
  );
};

export default Transactions;
