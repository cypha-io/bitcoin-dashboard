import React from 'react';
import { AppBar, Toolbar } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" className="Navbar" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        {/* Navbar content */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;