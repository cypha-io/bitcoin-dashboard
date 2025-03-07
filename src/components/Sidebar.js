import React from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemIcon, Divider, Avatar, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaymentIcon from '@mui/icons-material/Payment';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt="Bitcoin Logo" style={{ width: '50px', margin: '20px 0' }} />
      <Divider style={{ width: '100%', backgroundColor: 'white', margin: '10px 0' }} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
        <Avatar style={{ marginBottom: '10px' }} />
        <Typography variant="body1" style={{ color: 'white' }}>User Name</Typography>
      </div>
      <List style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ListItem button component={NavLink} to="/" exact style={{ justifyContent: 'center', width: '100%' }}>
          <ListItemIcon style={{ minWidth: 'auto' }}>
            <HomeIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" primaryTypographyProps={{ style: { fontFamily: 'Arial', marginLeft: '10px' } }} />
        </ListItem>
        <ListItem button component={NavLink} to="/users" style={{ justifyContent: 'center', width: '100%' }}>
          <ListItemIcon style={{ minWidth: 'auto' }}>
            <AccountCircleIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Users" primaryTypographyProps={{ style: { fontFamily: 'Arial', marginLeft: '10px' } }} />
        </ListItem>
        <ListItem button component={NavLink} to="/transactions" style={{ justifyContent: 'center', width: '100%' }}>
          <ListItemIcon style={{ minWidth: 'auto' }}>
            <PaymentIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Transactions" primaryTypographyProps={{ style: { fontFamily: 'Arial', marginLeft: '10px' } }} />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;