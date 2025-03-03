import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography, Button, Card, CardContent, CardHeader, Avatar, TextField } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import RefreshIcon from '@mui/icons-material/Refresh';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const AdminDashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [totalBTC, setTotalBTC] = useState(0);
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [recentUsers, setRecentUsers] = useState([]);
  const [userId, setUserId] = useState('');
  const userName = "User Name"; // Replace with dynamic user name if available
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch real-time data from the backend
    const fetchData = async () => {
      // Replace with your API endpoint
      const response = await fetch('/api/dashboard-data');
      const data = await response.json();
      setTotalUsers(data.totalUsers);
      setTotalTransactions(data.totalTransactions);
      setTotalBTC(data.totalBTC);
      setRecentTransactions(data.recentTransactions);
      setRecentUsers(data.recentUsers);
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
    setRecentTransactions(data.recentTransactions);
    setRecentUsers(data.recentUsers);
  };

  const handleUserDashboard = () => {
    navigate(`/user-dashboard/${userId}`);
  };

  return (
    <Container maxWidth="lg" className="Admin-dashboard" style={{ backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Typography variant="h4" component="h1" gutterBottom style={{ fontFamily: 'Roboto', fontSize: '1.0rem', color: 'orange' }}>
        Good day, <span style={{  fontWeight: 'bold' }}>{userName}</span>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card className="stat" elevation={3}>
            <CardHeader
              avatar={<Avatar style={{ backgroundColor: '#f7931a' }}><PeopleIcon /></Avatar>}
              title="Total Users"
              titleTypographyProps={{ variant: 'h6', style: { fontFamily: 'Roboto', fontSize: '1.25rem' } }}
            />
            <CardContent>
              <Typography variant="body2" style={{ fontFamily: 'Roboto', fontSize: '1rem' }}>{totalUsers}</Typography>
              <Button variant="contained" color="primary" startIcon={<PersonAddIcon />} style={{ backgroundColor: '#f7931a', marginTop: '10px' }}>
                Add User
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className="stat" elevation={3}>
            <CardHeader
              avatar={<Avatar style={{ backgroundColor: '#f7931a' }}><PaymentIcon /></Avatar>}
              title="Total Transactions"
              titleTypographyProps={{ variant: 'h6', style: { fontFamily: 'Roboto', fontSize: '1.25rem' } }}
            />
            <CardContent>
              <Typography variant="body2" style={{ fontFamily: 'Roboto', fontSize: '1rem' }}>GH₵ {totalTransactions}</Typography>
              <Button variant="contained" color="primary" startIcon={<AddShoppingCartIcon />} style={{ backgroundColor: '#f7931a', marginTop: '10px' }}>
                Add Transaction
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className="stat" elevation={3}>
            <CardHeader
              avatar={<Avatar style={{ backgroundColor: '#f7931a' }}><AccountBalanceWalletIcon /></Avatar>}
              title="Total BTC Managed"
              titleTypographyProps={{ variant: 'h6', style: { fontFamily: 'Roboto', fontSize: '1.25rem' } }}
            />
            <CardContent>
              <Typography variant="body2" style={{ fontFamily: 'Roboto', fontSize: '1rem' }}>{totalBTC} BTC</Typography>
              <Button variant="contained" color="primary" startIcon={<RefreshIcon />} onClick={handleRefresh} style={{ backgroundColor: '#f7931a', marginTop: '10px' }}>
                Refresh
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6}>
          <Card className="stat" elevation={3}>
            <CardHeader
              title="Recent Transactions"
              titleTypographyProps={{ variant: 'h6', style: { fontFamily: 'Roboto', fontSize: '1.25rem' } }}
            />
            <CardContent>
              <ul>
                {recentTransactions.map((transaction, index) => (
                  <li key={index} style={{ fontFamily: 'Roboto', fontSize: '1rem' }}>{transaction}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className="stat" elevation={3}>
            <CardHeader
              title="Recent Users"
              titleTypographyProps={{ variant: 'h6', style: { fontFamily: 'Roboto', fontSize: '1.25rem' } }}
            />
            <CardContent>
              <ul>
                {recentUsers.map((user, index) => (
                  <li key={index} style={{ fontFamily: 'Roboto', fontSize: '1rem' }}>{user}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={12}>
          <Card className="stat" elevation={3}>
            <CardHeader
              title="Open User Dashboard"
              titleTypographyProps={{ variant: 'h6', style: { fontFamily: 'Roboto', fontSize: '1.25rem' } }}
            />
            <CardContent>
              <TextField
                label="User ID"
                variant="outlined"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                style={{ marginBottom: '10px' }}
              />
              <Button variant="contained" color="primary" startIcon={<SearchIcon />} onClick={handleUserDashboard} style={{ backgroundColor: '#f7931a' }}>
                Open Dashboard
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboard;