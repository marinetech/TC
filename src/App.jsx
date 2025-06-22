// src/App.jsx
import React from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Import components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import MainPage from './pages/MainPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import AccessibilityStatementPage from './pages/AccessibilityStatementPage';


const appRoutes = [
  { path: "/TC/", element: <MainPage /> },
  { path: "/TC/privacy_policy", element: <PrivacyPolicyPage /> },
  { path: "/TC/accessibility_statement", element: <AccessibilityStatementPage /> },
];

function App() {
  return (
    <Router basename="/">
      <CssBaseline />
      <Header />
      <React.Fragment>

        <Routes>
          {appRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </React.Fragment>
      <Footer />
    </Router>
  );
}

export default App;