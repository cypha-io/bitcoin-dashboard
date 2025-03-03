import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Button, Card, CardContent, CardHeader, Avatar } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import RefreshIcon from '@mui/icons-material/Refresh';
import LiveBTCPrice from './LiveBTCPrice';
import '../App.css';

const UserDashboard = () => {
  const [totalInvested, setTotalInvested] = useState(0);
  const [totalBTC, setTotalBTC] = useState(0);
  const [totalMoneyMade, setTotalMoneyMade] = useState(0);
  const [error, setError] = useState(null);
  const userName = "User Name"; // Replace with dynamic user name if available

  useEffect(() => {
    // Fetch real-time data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch('/api/user-dashboard-data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTotalInvested(data.totalInvested);
        setTotalBTC(data.totalBTC);
        setTotalMoneyMade(data.totalMoneyMade);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();

    // Set an interval to fetch data every 10 seconds
    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = async () => {
    // Manually refresh data
    try {
      const response = await fetch('/api/user-dashboard-data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTotalInvested(data.totalInvested);
      setTotalBTC(data.totalBTC);
      setTotalMoneyMade(data.totalMoneyMade);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container maxWidth="lg" className="User-dashboard" style={{ backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      {error && <Typography variant="body1" color="error">{error}</Typography>}
      <Typography variant="h4" component="h1" gutterBottom style={{ fontFamily: 'Roboto', fontSize: '1.0rem', color: 'orange' }}>
        Welcome, <span style={{ fontWeight: 'bold' }}>{userName}</span>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card className="stat" elevation={3}>
            <CardHeader
              avatar={<Avatar style={{ backgroundColor: '#f7931a' }}><AttachMoneyIcon /></Avatar>}
              title="Total Amount Invested"
              titleTypographyProps={{ variant: 'h6', style: { fontFamily: 'Roboto', fontSize: '1.25rem' } }}
            />
            <CardContent>
              <Typography variant="body2" style={{ fontFamily: 'Roboto', fontSize: '1rem' }}>${totalInvested}</Typography>
              <Button variant="contained" color="primary" startIcon={<RefreshIcon />} onClick={handleRefresh} style={{ backgroundColor: '#f7931a', marginTop: '10px' }}>
                Refresh
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
        <Grid item xs={12} sm={4}>
          <Card className="stat" elevation={3}>
            <CardHeader
              avatar={<Avatar style={{ backgroundColor: '#f7931a' }}><PaymentIcon /></Avatar>}
              title="Total Money Made"
              titleTypographyProps={{ variant: 'h6', style: { fontFamily: 'Roboto', fontSize: '1.25rem' } }}
            />
            <CardContent>
              <Typography variant="body2" style={{ fontFamily: 'Roboto', fontSize: '1rem' }}>${totalMoneyMade}</Typography>
              <Button variant="contained" color="primary" startIcon={<RefreshIcon />} onClick={handleRefresh} style={{ backgroundColor: '#f7931a', marginTop: '10px' }}>
                Refresh
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={12}>
          <Card className="stat" elevation={3}>
            <CardHeader
              title="BTC Live Price"
              titleTypographyProps={{ variant: 'h6', style: { fontFamily: 'Roboto', fontSize: '1.25rem' } }}
            />
            <CardContent>
              <LiveBTCPrice />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserDashboard;
