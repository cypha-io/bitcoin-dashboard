import React from 'react';
import { Container, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const navigate = useNavigate();

  const handleAdminDashboard = () => {
    navigate('/admin-dashboard');
  };

  const handleUserDashboard = () => {
    navigate('/user-dashboard');
  };

  return (
    <Container maxWidth="lg" className="Home" style={{ backgroundColor: '#f7931a', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h3" component="h1" gutterBottom style={{ fontFamily: 'Roboto', fontSize: '2rem', color: 'white', textAlign: 'center' }}>
            Welcome to Bitcoin Dashboard
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleAdminDashboard} style={{ backgroundColor: '#f7931a', fontSize: '1rem', margin: '10px' }}>
            Admin Dashboard
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleUserDashboard} style={{ backgroundColor: '#f7931a', fontSize: '1rem', margin: '10px' }}>
            User Dashboard
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
