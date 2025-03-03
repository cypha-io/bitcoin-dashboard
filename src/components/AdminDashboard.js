import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../App.css';

const AdminDashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [totalBTC, setTotalBTC] = useState(0);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetch real-time data from the backend
    const fetchData = async () => {
      // Replace with your API endpoint
      const response = await fetch('/api/dashboard-data');
      const data = await response.json();
      setTotalUsers(data.totalUsers);
      setTotalTransactions(data.totalTransactions);
      setTotalBTC(data.totalBTC);
      setChartData(data.chartData); // Assuming chartData is part of the response
    };

    fetchData();

    // Set an interval to fetch data every 10 seconds
    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = async () => {
    // Manually refresh data
    const response = await fetch('/api/dashboard-data');
    const data = await response.json();
    setTotalUsers(data.totalUsers);
    setTotalTransactions(data.totalTransactions);
    setTotalBTC(data.totalBTC);
    setChartData(data.chartData); // Assuming chartData is part of the response
  };

  return (
    <Container maxWidth="lg" className="Admin-dashboard">
      <Typography variant="h3" component="h1" gutterBottom>
        Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className="stat" elevation={3}>
            <Typography variant="h5" component="h2">
              Total Users
            </Typography>
            <Typography variant="body1">{totalUsers}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className="stat" elevation={3}>
            <Typography variant="h5" component="h2">
              Total Transactions
            </Typography>
            <Typography variant="body1">{totalTransactions}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className="stat" elevation={3}>
            <Typography variant="h5" component="h2">
              Total BTC Managed
            </Typography>
            <Typography variant="body1">{totalBTC} BTC</Typography>
          </Paper>
        </Grid>
      </Grid>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
      <Grid container spacing={3} className="actions" justifyContent="center" style={{ marginTop: '20px' }}>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleRefresh}>
            Refresh
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" onClick={() => alert('Add User')}>
            Add User
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" onClick={() => alert('Add Transaction')}>
            Add Transaction
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboard;