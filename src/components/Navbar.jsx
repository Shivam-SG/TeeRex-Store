import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = ({ cartCount }) => (
  <AppBar position="fixed">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        TeeRex Store
      </Typography>
      <Button color="inherit" component={Link} to="/">
        Products
      </Button>
      <IconButton color="inherit" component={Link} to="/cart">
        <Badge badgeContent={cartCount} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Navbar;
