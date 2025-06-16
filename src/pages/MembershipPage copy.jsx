// src/pages/MembershipPage.jsx
import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// Import Material-UI Icons for benefits
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'; // For networking
import LightbulbIcon from '@mui/icons-material/Lightbulb'; // For resources/knowledge
import GavelIcon from '@mui/icons-material/Gavel'; // For influence
import HandshakeIcon from '@mui/icons-material/Handshake'; // For support
import SchoolIcon from '@mui/icons-material/School'; // For learning/development

// --- Static Data for Demonstration ---
const membershipBenefits = [
  {
    id: 1,
    title: "Unparalleled Networking Opportunities",
    description: "Connect with leading researchers, esteemed colleagues, and influential figures in your field through exclusive events, online forums, and mentorship programs.",
    icon: <PeopleAltIcon fontSize="large" color="primary" />,
  },
  {
    id: 2,
    title: "Access to Exclusive Resources & Funding",
    description: "Gain priority access to our comprehensive database of research tools, publications, and specialized funding opportunities, including members-only grants and collaborative projects.",
    icon: <LightbulbIcon fontSize="large" color="primary" />,
  },
  {
    id: 3,
    title: "Shape the Future of Research",
    description: "Your voice matters. Influence policy, contribute to industry standards, and participate in advocacy efforts that drive scientific progress and ethical practices.",
    icon: <GavelIcon fontSize="large" color="primary" />,
  },
  {
    id: 4,
    title: "Dedicated Support & Guidance",
    description: "Receive personalized support for grant applications, ethical reviews, and career development, ensuring you have the backing to achieve your research goals.",
    icon: <HandshakeIcon fontSize="large" color="primary" />,
  },
  {
    id: 5,
    title: "Continuous Professional Development",
    description: "Benefit from members-only workshops, webinars, and discounted rates for our annual conferences, keeping you at the forefront of scientific innovation and methodology.",
    icon: <SchoolIcon fontSize="large" color="primary" />,
  },
];
// --- End Static Data ---

const MembershipPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: 6,
          px: 2,
          textAlign: 'center',
          backgroundColor: (theme) => theme.palette.grey[100],
          borderRadius: 2,
          mb: 6,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Join Our Thriving Research Community
        </Typography>
        <Typography variant="h5" component="p" color="text.secondary" sx={{ mb: 3 }}>
          Become a member of the Grant Organization and unlock a world of opportunities, support, and collaboration.
        </Typography>
        <Button
          variant="contained"
          size="large"
          component={RouterLink}
          to="/contact" // Assuming "Join Us" leads to contact or a specific application form
          aria-label="Join Us - Navigate to membership application"
        >
          Join Us Today!
        </Button>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
          Benefits of Membership
        </Typography>
        <Grid container spacing={4}>
          {membershipBenefits.map((benefit) => (
            <Grid item xs={12} sm={6} md={4} key={benefit.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ mb: 2 }}>
                    {benefit.icon}
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action Section - Again */}
      <Box sx={{ textAlign: 'center', my: 6, py: 4, backgroundColor: (theme) => theme.palette.info.light, borderRadius: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Ready to Elevate Your Research Career?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Take the next step and become part of a community dedicated to scientific excellence and innovation.
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          component={RouterLink}
          to="/contact"
          aria-label="Apply for membership - Navigate to contact page"
        >
          Apply for Membership
        </Button>
      </Box>
    </Container>
  );
};

export default MembershipPage;