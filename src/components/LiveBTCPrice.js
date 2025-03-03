import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const LiveBTCPrice = () => {
  const [btcPrice, setBtcPrice] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch live BTC data
    const fetchBtcData = async () => {
      try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Received non-JSON response');
        }
        const data = await response.json();
        const price = data.bpi.USD.rate_float;
        setBtcPrice(price);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBtcData();

    // Set an interval to fetch live BTC data every 10 seconds
    const interval = setInterval(fetchBtcData, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {error && <Typography variant="body1" color="error">{error}</Typography>}
      <Typography variant="h6" component="p" style={{ fontFamily: 'Roboto', fontSize: '1.25rem', color: 'orange' }}>
        Live BTC Price: {btcPrice ? `$${btcPrice.toFixed(2)}` : 'Loading...'}
      </Typography>
    </div>
  );
};

export default LiveBTCPrice;
