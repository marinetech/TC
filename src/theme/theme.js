// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // blue
    },
    secondary: {
      main: '#dc004e', // red
    },
    
    // make sure the contrest is good
    text: {
        primary: '#333',
        secondary: '#555',
    }
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: { fontSize: '2.5rem' },
    h2: { fontSize: '2rem' },
    body1: { fontSize: '1rem' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // generel configurtion for buttons
          borderRadius: '8px',
          padding: '10px 20px',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          // complei with underline links
          textDecoration: 'underline',
          '&:hover': {
            textDecoration: 'none',
          },
        },
      },
    },
  },
});

export default theme;