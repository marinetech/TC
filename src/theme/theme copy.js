import { createTheme } from '@mui/material/styles';
import { red, blue } from '@mui/material/colors';

// יצירת נושא (Theme) מותאם אישית עבור האתר
const theme = createTheme({
  palette: {
    primary: {
      main: blue[700], // צבע ראשי - כחול כהה
    },
    secondary: {
      main: red[500], // צבע משני - אדום
    },
    error: {
      main: red.A400, // צבע לשגיאות
    },
    background: {
      default: '#f8f8f8', // רקע כללי בהיר
      paper: '#ffffff',  // רקע לרכיבים כמו כרטיסים
    },
    text: {
      primary: '#333333', // צבע טקסט ראשי (כהה לניגודיות טובה)
      secondary: '#555555', // צבע טקסט משני
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // פונט כללי
    h1: {
      fontSize: '2.8rem',
      fontWeight: 700,
      color: blue[900], // כותרות ראשיות בצבע כחול כהה
      '@media (max-width:600px)': {
        fontSize: '2rem', // הקטנת פונט במובייל
      },
    },
    h2: {
      fontSize: '2.2rem',
      fontWeight: 600,
      color: blue[800],
      '@media (max-width:600px)': {
        fontSize: '1.8rem',
      },
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none', // כפתורים ללא אותיות גדולות אוטומטיות
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // פינות מעוגלות לכפתורים
          padding: '10px 20px',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'underline', // הדגשת לינקים בקו תחתון לנגישות
          '&:hover': {
            textDecoration: 'none', // הסרת קו תחתון בריחוף
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: blue[800], // צבע רקע לכותרת העליונה
        },
      },
    },
  },
});

export default theme;