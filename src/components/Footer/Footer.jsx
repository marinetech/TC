// src/components/Footer/Footer.jsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Container, Link } from '@mui/material';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      mt: 8,
      py: 3,
      backgroundColor: (theme) =>
        theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      textAlign: 'center',
      color: (theme) => theme.palette.text.secondary,
    }}
  >
    <Container >
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} Grant Organization. All rights reserved.
      </Typography>
      <Link component={RouterLink} to="/TC/accessibility_statement" color="inherit" sx={{ mx: 1 }} aria-label="Accessibility statement">
        Accessibility Statement
      </Link>
      <Link component={RouterLink} to="/TC/privacy_policy" color="inherit" sx={{ mx: 1 }} aria-label="Privacy policy">
        Privacy Policy
      </Link>
    </Container>
  </Box>
);

export default Footer;