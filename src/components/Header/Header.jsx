// src/components/Header/Header.jsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  CardMedia,
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
  { "button_name": "Home", "to": "/TC/", "aria_label": "Navigate to Home page." },
  { "button_name": "Activities", "to": "/TC/activities", "aria_label": "Navigate to Activities and Initiatives page." },
  { "button_name": "Membership", "to": "/TC/membership", "aria_label": "Navigate to Membership page." },
  { "button_name": "Contact", "to": "/TC/contact", "aria_label": "Navigate to Contact page." },
  { "button_name": "Activities Calendar", "to": "/TC/Activities_Calendar", "aria_label": "Activities Calendar Page." }
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', p: 2 }}> {/* Adjusted to flex-start for close icon on the left */}
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
    <AppBar
      position="static"

      sx={{
        backgroundColor: 'white', // White background
        color: 'black', // Black text for the AppBar itself (e.g., icons)
        borderTop: '20px solid black', // Thick black top border
        borderRadius: 0, // No rounded corners
        boxShadow: 'none', // Remove default AppBar shadow if desired
        '& .MuiButton-root': { // Target navigation buttons
          color: 'black', // Black text for buttons
        },
        '& .MuiTypography-root': { // Target Typography (for the logo text if enabled)
          color: 'black', // Black text for logo/title
        },
        '& .MuiIconButton-root': { // Target icon buttons (MenuIcon, CloseIcon)
          color: 'black', // Black color for icons
        }
      }}
    >
      <Toolbar sx={{ flexDirection: 'row-reverse' }}> {/* Changed to row-reverse for RTL layout */}
        {/* Mobile menu icon - now on the right */}
        <IconButton
          color="inherit" // Will inherit from AppBar's color (black)
          aria-label="Open navigation menu"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: 'block', md: 'none' }, ml: 'auto' }}
        >
          <MenuIcon />
        </IconButton>

        {/* Navigation buttons for desktop - now aligned to the right */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, ml: 'auto' }}>
          {navLinks.map((link) => (
            <Button
              key={link.to}
              color="inherit" // Will inherit from AppBar's color (black)
              component={RouterLink}
              to={link.to}
              aria-label={link.aria_label}
            >
              {link.button_name}
            </Button>
          ))}
        </Box>

        {/* Logo or organization name - now on the left */}
        {/* If you want the "Grant Organization" text next to the logo: */}
        <Link
          component={RouterLink}
          to="/TC/"
          color="inherit"
          underline="none"
          aria-label="Organization home page"
          sx={{ display: 'flex', alignItems: 'center', mr: 'auto', color: 'black' }} // Ensure link text is black too
        >
          <CardMedia component="img" image="../TC/src/assets/images/icesLogo.png" alt="Organization Logo" sx={{ height: 40, width: 'auto', maxWidth: '100%', mr: 1 }} />

        </Link>
      </Toolbar>

      {/* Mobile Drawer menu */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true, }} // Better open performance on mobile.
          anchor="right" // Opens the drawer from the right
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, backgroundColor: 'white', color: 'black', },
            '& .MuiListItemText-primary': { color: 'black' },// Ensure drawer list items and text are black
            '& .MuiIconButton-root': { color: 'black', }// Close icon inside drawer
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </AppBar>
  );
};

export default Header;