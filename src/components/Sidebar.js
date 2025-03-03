import React from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ReceiptIcon from '@mui/icons-material/Receipt';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <List>
        <ListItem button component={NavLink} to="/" exact>
          <ListItemIcon>
            <DashboardIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={NavLink} to="/users">
          <ListItemIcon>
            <PeopleIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component={NavLink} to="/transactions">
          <ListItemIcon>
            <ReceiptIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Transactions" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;