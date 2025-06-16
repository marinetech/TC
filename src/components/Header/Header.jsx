// src/components/Header/Header.jsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer, // for mobile Drawer
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Link
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navLinks = [
  { "button_name": "Home", "to": "/", "aria_label": "Navigate to Home page." },
  { "button_name": "Activities", "to": "/activities", "aria_label": "Navigate to Activities and Initiatives page." },
  { "button_name": "Membership", "to": "/membership", "aria_label": "Navigate to Membership page." },
  { "button_name": "Contact", "to": "/contact", "aria_label": "Navigate to Contact page." },
  { "button_name": "Activities Calendar", "to": "/Activities_Calendar", "aria_label": "Activities Calendar Page." }
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton color="inherit" aria-label="Close navigation menu" onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.to} disablePadding>
            <ListItemButton component={RouterLink} to={link.to} aria-label={link.aria_label} sx={{ textAlign: 'center' }}>
              <ListItemText primary={link.button_name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo or organization name */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
          <Link component={RouterLink} to="/" color="inherit" underline="none" aria-label="Organization home page"> {/* Translated */}
            Grant Organization
          </Link>
        </Typography>

        {/* Navigation buttons for desktop */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          {navLinks.map((link) => (
            <Button key={link.to} color="inherit" component={RouterLink} to={link.to} aria-label={link.aria_label}>
              {link.button_name}
            </Button>
          ))}
        </Box>

        {/* Mobile menu icon */}
        <IconButton color="inherit" aria-label="Open navigation menu" onClick={handleDrawerToggle} sx={{ display: { xs: 'block', md: 'none' } }}>
          <MenuIcon />
        </IconButton>

      </Toolbar>

      {/* Mobile Drawer menu */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true, }} // Better open performance on mobile.
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </AppBar>
  );
};

export default Header;