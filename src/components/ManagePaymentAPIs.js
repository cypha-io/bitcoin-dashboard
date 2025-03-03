import React from 'react';
import { Container, Typography } from '@mui/material';
import AdminLayout from './AdminLayout';
import '../App.css';

const ManagePaymentAPIs = () => {
  return (
    <AdminLayout>
      <Container maxWidth="lg" className="ManagePaymentAPIs" style={{ backgroundColor: '#f7931a' }}>
        <Typography variant="h4" component="h1" gutterBottom style={{ fontFamily: 'Roboto', fontSize: '1.5rem', color: 'white' }}>
          Manage Payment APIs
        </Typography>
        {/* Add your Manage Payment APIs content here */}
      </Container>
    </AdminLayout>
  );
};

export default ManagePaymentAPIs;
