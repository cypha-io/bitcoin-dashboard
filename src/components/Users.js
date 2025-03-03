import React from 'react';
import { Container, Typography } from '@mui/material';
import AdminLayout from './AdminLayout';
import '../App.css';

const Users = () => {
  return (
    <AdminLayout>
      <Container maxWidth="lg" className="Users" style={{ backgroundColor: '#f7931a' }}>
        <Typography variant="h4" component="h1" gutterBottom style={{ fontFamily: 'Roboto', fontSize: '1.5rem', color: 'white' }}>
          Users
        </Typography>
        {/* Add your Users content here */}
      </Container>
    </AdminLayout>
  );
};

export default Users;
