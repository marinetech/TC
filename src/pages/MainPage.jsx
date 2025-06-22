import React, { Suspense } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Box, Typography, Button } from '@mui/material';

import HomePage from './HomePage';
import ContactPage from './ContactPage';
import CommitteeStructureDiagram from './CommitteeStructureDiagram';
import MembershipPage from './MembershipPage';
import AboutPage from './AboutPage';

//import UpcomingEvents from './UpcomingEventsPage';
const UpcomingEvents = React.lazy(() => import('./UpcomingEventsPage'));
//const CommitteeStructureDiagram = React.lazy(() => import('./CommitteeStructureDiagram'));


const MainPage = () => {
  return (
    <React.Fragment>

      <HomePage />
         <CommitteeStructureDiagram />
       <AboutPage />

      <Suspense fallback={<div>Loading Events...</div>}>
        <UpcomingEvents />
      </Suspense>

      <Box sx={{ p: 2, py: 1, backgroundColor: "#072034", display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ color: "white", fontWeight: 'bold', bx: 2 }}>
          Interested in participating or collaborating with the TC?
        </Typography>

        <Button variant="contained" size="madium" component={HashLink} to="/TC/#contact" aria-label="Contact us for information"
          sx={{ fontWeight: 'bold', textAlign: 'center', borderRadius: '30px', m: 0, px: 2, py: 2 }}>
          Contact Us Today!
        </Button>
      </Box>

      <MembershipPage />
      <ContactPage />

    </React.Fragment>
  );
};

export default MainPage;