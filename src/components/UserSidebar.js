import React from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemIcon, Divider, Avatar, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PaymentIcon from '@mui/icons-material/Payment';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const UserSidebar = () => {
  return (
    <div className="Sidebar">
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt="Bitcoin Logo" style={{ width: '50px', margin: '20px 0' }} />
      <Divider style={{ width: '100%', backgroundColor: 'white', margin: '10px 0' }} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
        <Avatar style={{ marginBottom: '10px' }} />
        <Typography variant="body1" style={{ color: 'white' }}>User</Typography>
      </div>
      <List style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ListItem button component={NavLink} to="/user-dashboard" exact style={{ justifyContent: 'center', width: '100%' }}>
          <ListItemIcon style={{ minWidth: 'auto' }}>
            <HomeIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="User Dashboard" primaryTypographyProps={{ style: { fontFamily: 'Arial', marginLeft: '10px' } }} />
        </ListItem>
        <ListItem button component={NavLink} to="/user-dashboard/transactions" style={{ justifyContent: 'center', width: '100%' }}>
          <ListItemIcon style={{ minWidth: 'auto' }}>
            <PaymentIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Transactions" primaryTypographyProps={{ style: { fontFamily: 'Arial', marginLeft: '10px' } }} />
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

export default UserSidebar;
