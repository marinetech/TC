// src/App.jsx
import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// Import components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Import pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ActivitiesPage from './pages/ActivitiesPage';
import MembershipPage from './pages/MembershipPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ActivitiesCalendarPage from './pages/ActivitiesCalendarPage';
import AccessibilityStatementPage from './pages/AccessibilityStatementPage';


// Define the application routes
const appRoutes = [
  { path: "/TC/", element: <HomePage /> },
  { path: "/TC/contact", element: <ContactPage /> },
  { path: "/TC/activities", element: <ActivitiesPage /> },
  { path: "/TC/membership", element: <MembershipPage /> },
  { path: "/TC/privacy-policy", element: <PrivacyPolicyPage /> },
  { path: "/TC/accessibility-statement", element: <AccessibilityStatementPage /> },
  { path: "/TC/Activities_Calendar", element: <ActivitiesCalendarPage /> },
];

function App() {
  return (
    <Router basename="/">
      <CssBaseline />
      <Header />
      <Container  sx={{maxWidth: 'none', width:"100%"}}>
      <Routes>
          {appRoutes.map((route) => (
            // Using route.path as key for stable rendering of routes
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;