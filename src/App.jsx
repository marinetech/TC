// src/App.jsx
import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Import components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Import pages - רק MainPage יישאר כדף ראשי
import MainPage from './pages/MainPage';
// נשאיר את אלה רק אם הם חייבים להיות דפים נפרדים ולא קטעים ב-HomePage
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import AccessibilityStatementPage from './pages/AccessibilityStatementPage';


const appRoutes = [
  { path: "/TC/", element: <MainPage /> },
  { path: "/TC/privacy_policy", element: <PrivacyPolicyPage /> },
  { path: "/TC/accessibility_statement", element: <AccessibilityStatementPage /> },
];

function App() {
  return (
    <Router basename="/"> {/* חשוב להגדיר את basename ל-GitHub Pages */}
      <CssBaseline />
      <Header />
    <React.Fragment>

        <Routes>
          {appRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          {/* ניתן להוסיף כאן מסלול לטיפול ב-404 אם צריך */}
        </Routes>
          </React.Fragment>
      <Footer />
    </Router>
  );
}

export default App;