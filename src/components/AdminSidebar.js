import React from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemIcon, Divider, Avatar, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const AdminSidebar = () => {
  return (
    <div className="Sidebar">
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt="Bitcoin Logo" style={{ width: '50px', margin: '20px 0' }} />
      <Divider style={{ width: '100%', backgroundColor: 'white', margin: '10px 0' }} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
        <Avatar style={{ marginBottom: '10px' }} />
        <Typography variant="body1" style={{ color: 'white' }}>Admin</Typography>
      </div>
      <List style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ListItem button component={NavLink} to="/admin-dashboard" exact style={{ justifyContent: 'center', width: '100%' }}>
          <ListItemIcon style={{ minWidth: 'auto' }}>
            <HomeIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" primaryTypographyProps={{ style: { fontFamily: 'Arial', marginLeft: '10px' } }} />
        </ListItem>
        <ListItem button component={NavLink} to="/admin-dashboard/users" style={{ justifyContent: 'center', width: '100%' }}>
          <ListItemIcon style={{ minWidth: 'auto' }}>
            <AccountCircleIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Users" primaryTypographyProps={{ style: { fontFamily: 'Arial', marginLeft: '10px' } }} />
        </ListItem>
        <ListItem button component={NavLink} to="/admin-dashboard/transactions" style={{ justifyContent: 'center', width: '100%' }}>
          <ListItemIcon style={{ minWidth: 'auto' }}>
            <PaymentIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Transactions" primaryTypographyProps={{ style: { fontFamily: 'Arial', marginLeft: '10px' } }} />
        </ListItem>
        <ListItem button component={NavLink} to="/admin-dashboard/btc" style={{ justifyContent: 'center', width: '100%' }}>
          <ListItemIcon style={{ minWidth: 'auto' }}>
            <AccountBalanceWalletIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="BTC" primaryTypographyProps={{ style: { fontFamily: 'Arial', marginLeft: '10px' } }} />
        </ListItem>
        <ListItem button component={NavLink} to="/admin-dashboard/manage-payment-apis" style={{ justifyContent: 'center', width: '100%' }}>
          <ListItemIcon style={{ minWidth: 'auto' }}>
            <SettingsIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Manage Payment APIs" primaryTypographyProps={{ style: { fontFamily: 'Arial', marginLeft: '10px' } }} />
        </ListItem>
        <ListItem button component={NavLink} to="/logout" style={{ justifyContent: 'center', width: '100%' }}>
          <ListItemIcon style={{ minWidth: 'auto' }}>
            <ExitToAppIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Logout" primaryTypographyProps={{ style: { fontFamily: 'Arial', marginLeft: '10px' } }} />
        </ListItem>
      </List>
    </div>
  );
};

export default AdminSidebar;
