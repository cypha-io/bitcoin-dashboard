import React from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemIcon, Divider, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SupportIcon from '@mui/icons-material/Support';

const HomeSidebar = () => {
  return (
    <div className="Sidebar">
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt="Bitcoin Logo" style={{ width: '50px', margin: '20px 0' }} />
      <Divider style={{ width: '100%', backgroundColor: 'white', margin: '10px 0' }} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="body1" style={{ color: 'white' }}>Welcome</Typography>
      </div>
      <List style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ListItem button component={NavLink} to="/" exact style={{ justifyContent: 'center', width: '100%' }}>
          <ListItemIcon style={{ minWidth: 'auto' }}>
            <HomeIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Home" primaryTypographyProps={{ style: { fontFamily: 'Arial', marginLeft: '10px' } }} />
        </ListItem>
        <ListItem button component={NavLink} to="/contact" style={{ justifyContent: 'center', width: '100%' }}>
          <ListItemIcon style={{ minWidth: 'auto' }}>
            <ContactMailIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Contact" primaryTypographyProps={{ style: { fontFamily: 'Arial', marginLeft: '10px' } }} />
        </ListItem>
        <ListItem button component={NavLink} to="/support" style={{ justifyContent: 'center', width: '100%' }}>
          <ListItemIcon style={{ minWidth: 'auto' }}>
            <SupportIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Support" primaryTypographyProps={{ style: { fontFamily: 'Arial', marginLeft: '10px' } }} />
        </ListItem>
      </List>
    </div>
  );
};

export default HomeSidebar;
