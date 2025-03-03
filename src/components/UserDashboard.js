import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Card, CardContent, CardHeader, Avatar, Typography, Button } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaymentIcon from '@mui/icons-material/Payment';
import RefreshIcon from '@mui/icons-material/Refresh';
import '../App.css';

const UserDashboard = () => {
  const { userId } = useParams();
  const [totalBalance, setTotalBalance] = useState(0);
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [userName, setUserName] = useState(''); // Replace with dynamic user name if available

  useEffect(() => {
    // Fetch real-time data from the backend
    const fetchData = async () => {
      // Replace with your API endpoint
      const response = await fetch(`/api/user-dashboard-data/${userId}`);
      const data = await response.json();
      setTotalBalance(data.totalBalance);
      setRecentTransactions(data.recentTransactions);
      setUserName(data.userName);
    };

    fetchData();

    // Set an interval to fetch data every 10 seconds
    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, [userId]);

  const handleRefresh = async () => {
    // Manually refresh data
    const response = await fetch(`/api/user-dashboard-data/${userId}`);
    const data = await response.json();
    setTotalBalance(data.totalBalance);
    setRecentTransactions(data.recentTransactions);
    setUserName(data.userName);
  };

  return (
    <Container maxWidth="lg" className="User-dashboard" style={{ backgroundColor: '#f7931a' }}>
      <Typography variant="h4" component="h1" gutterBottom style={{ fontFamily: 'Roboto', fontSize: '1.5rem', color: 'white' }}>
        Welcome, <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>{userName}</span>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card className="stat" elevation={3}>
            <CardHeader
              avatar={<Avatar style={{ backgroundColor: '#f7931a' }}><AccountBalanceWalletIcon style={{ color: '#f7931a' }} /></Avatar>}
              title="Total Balance"
              titleTypographyProps={{ variant: 'h6', style: { fontFamily: 'Roboto', fontSize: '1.25rem' } }}
            />
            <CardContent>
              <Typography variant="body2" style={{ fontFamily: 'Roboto', fontSize: '1rem' }}>GH₵ {totalBalance}</Typography>
              <Button variant="contained" color="primary" startIcon={<RefreshIcon />} onClick={handleRefresh} style={{ backgroundColor: '#f7931a', marginTop: '10px' }}>
                Refresh
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className="stat" elevation={3}>
            <CardHeader
              avatar={<Avatar style={{ backgroundColor: '#f7931a' }}><PaymentIcon style={{ color: '#f7931a' }} /></Avatar>}
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
      </Grid>
    </Container>
  );
};

export default UserDashboard;
