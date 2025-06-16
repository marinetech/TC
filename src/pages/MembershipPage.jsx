// src/pages/MembershipPage.jsx
import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// Import Material-UI Icons
import ScienceIcon from '@mui/icons-material/Science'; // General science/research
import EventNoteIcon from '@mui/icons-material/EventNote'; // Organizing events
import DevicesIcon from '@mui/icons-material/Devices'; // Developing sensors/instrumentation
import PolicyIcon from '@mui/icons-material/Policy'; // Standards/protocols
import PublicIcon from '@mui/icons-material/Public'; // Extreme environments/global applications
import CodeIcon from '@mui/icons-material/Code'; // Signal processing/AI
import HandshakeIcon from '@mui/icons-material/Handshake'; // General collaboration/support


// --- Data for Membership Interests (replacing benefits) ---
const membershipInterests = [
  {
    id: 1,
    title: "Organizing Events",
    description: "Contribute to planning and executing workshops, conferences, and seminars in marine metrology.",
    icon: <EventNoteIcon fontSize="large" color="primary" />,
  },
  {
    id: 2,
    title: "Sensor Development & Instrumentation",
    description: "Work on developing new sensors, designing and testing instrumentation for diverse marine applications.",
    icon: <DevicesIcon fontSize="large" color="primary" />,
  },
  {
    id: 3,
    title: "Standards & Protocols",
    description: "Help define and implement industry standards, measurement protocols, and QA/QC procedures for oceanic data.",
    icon: <PolicyIcon fontSize="large" color="primary" />,
  },
  {
    id: 4,
    title: "Metrology in Extreme Environments",
    description: "Focus on the challenges and solutions for accurate measurements in harsh and challenging marine conditions.",
    icon: <PublicIcon fontSize="large" color="primary" />,
  },
  {
    id: 5,
    title: "Signal Processing & AI Solutions",
    description: "Engage in advanced signal processing for marine metrology data, including AI-driven calibration algorithms.",
    icon: <CodeIcon fontSize="large" color="primary" />,
  },
  {
    id: 6,
    title: "Error & Uncertainty Analysis",
    description: "Dive into methodologies for error correction, uncertainty quantification, and ensuring data reliability.",
    icon: <ScienceIcon fontSize="large" color="primary" />,
  },
  {
    id: 7,
    title: "Sensor Calibration & Synchronization",
    description: "Work on developing standards for sensor calibration and innovative sensor synchronization techniques.",
    icon: <HandshakeIcon fontSize="large" color="primary" />,
  },
  {
    id: 8,
    title: "Sensor Testing & Stability",
    description: "Participate in dynamic, static, and long-term stability testing of subsea sensors.",
    icon: <DevicesIcon fontSize="large" color="primary" />,
  },
  {
    id: 9,
    title: "Platforms & Scientific Applications",
    description: "Explore new platforms for marine metrology and contribute to diverse scientific applications of the technology.",
    icon: <ScienceIcon fontSize="large" color="primary" />,
  },
];
// --- End Data ---

const MembershipPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box sx={{ py: 6, px: 2, textAlign: 'center', backgroundColor: (theme) => theme.palette.grey[100], borderRadius: 2, mb: 6, }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Join the Marine Metrology TC Community
        </Typography>
        <Typography variant="h5" component="p" color="text.secondary" sx={{ mb: 3 }}>
          We are always looking for passionate volunteers to contribute to the advancement of marine metrology.
        </Typography>
        <Button variant="contained" size="large" component={RouterLink} to="/contact" aria-label="Contact us to volunteer" >
          Volunteer With Us!
        </Button>
      </Box>

      {/* Areas of Interest Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
          Areas Where You Can Contribute
        </Typography>
        <Grid container spacing={4} >
          {membershipInterests.map((interest) => (
            <Grid item  size={12} key={interest.id}>
              <Card sx={{ backgroundColor: (theme) => theme.palette.grey[100],height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ mb: 2 }}>
                    {interest.icon}
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {interest.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {interest.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Call to Action Section */}
      <Box sx={{ textAlign: 'center', my: 6, py: 4, backgroundColor: (theme) => theme.palette.info.light, borderRadius: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Ready to Make an Impact?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          If you're passionate about marine metrology and want to contribute, we'd love to hear from you!
        </Typography>
        <Button variant="contained" size="large" color="secondary" component={RouterLink} to="/contact" aria-label="Contact us about membership" >
          Get Involved!
        </Button>
      </Box>
    </Container>
  );
};

export default MembershipPage;