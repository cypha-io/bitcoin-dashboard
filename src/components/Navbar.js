import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Menu, MenuItem, IconButton, InputBase, Badge } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className="Navbar">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>
        <div className="search-bar">
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <SearchIcon />
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              style={{ marginLeft: 8, color: 'inherit' }}
            />
          </div>
        </div>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <div className="user-info">
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;