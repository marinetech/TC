import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Container, Stack, CardActions, CardActionArea, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { CenterFocusStrong, Upcoming } from '@mui/icons-material';
import { committeeStructureData } from './committeeData';
import CommitteeStructureDiagram from './CommitteeStructureDiagram';
import ContactPage from './ContactPage';
import MembershipPage from './MembershipPage';
import UpcomingEvents from './UpcomingEventsPage';
import HomePage from './HomePage';
import AboutPage from './AboutPage';


const MainPage = () => {
  return (
    <Container disableGutters sx={{ maxWidth: 'none', width: "100%" }}>

      <HomePage />
      <CommitteeStructureDiagram data={committeeStructureData} />
      <AboutPage />
      <UpcomingEvents />

      {/* Call-to-Action Section (Optional) */}
      <Box item size={12} sx={{ paddingTop: 0, backgroundColor: "#072034", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ color: "white", fontWeight: 'bold', bx: 2 }}>
          Interested in participating or collaborating with the TC?
        </Typography>

        <Button variant="contained" size="madium" component={RouterLink} to="/contact" aria-label="Contact us for information" sx={{ fontWeight: 'bold', borderRadius: '30px', m: 4, px: 2, py: 2 }}>
          Contact Us Today!
        </Button>
      </Box>

      <Card sx={{ borderRadius: 0, position: 'relative', mb: 4, }} id="membership">
        <MembershipPage />
      </Card>

      <Card sx={{ borderRadius: 0, position: 'relative', mb: 4, }} id="contact">
        <ContactPage />
      </Card>

    </Container >
  );
};

export default MainPage;