import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CommitteeStructureDiagramWithReactFlow from './CommitteeStructureDiagramWithReactFlow'; // ייבוא הרכיב החדש
import { committeeStructureData } from './committeeData'; // ייבוא הנתונים

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      {/* Hero Section - Mission, Vision, and Objectives */}
      <Box
        sx={{
          py: 8,
          px: 2,
          textAlign: 'center',
          backgroundColor: (theme) => theme.palette.primary.light,
          color: (theme) => theme.palette.primary.contrastText,
          borderRadius: 2,
          mb: 4,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'white' }}>
          Advancing Excellence in Marine Metrology Research
        </Typography>
        <Typography variant="h6" component="p" sx={{ mb: 4, color: 'white' }}>
          The Marine Metrology Technical Committee (TC) is part of the IEEE OES organization.
        </Typography>

        {/* Diagram Embedding - Using the new dynamic component */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h5" component="h3" gutterBottom sx={{ color: 'white' }}>
            Technical Committee Structure
          </Typography>
          <CommitteeStructureDiagramWithReactFlow data={committeeStructureData} /> {/* כאן אנו משלבים את הדיאגרמה */}
          <Typography variant="caption" display="block" sx={{ mt: 1, color: 'white' }}>
            הדיאגרמה מציגה את המבנה ותחומי המיקוד של הוועדה הטכנית למטרולוגיה ימית.
            <br/>
            ניתן לגרור ולשנות את התצוגה (Zoom In/Out) על הדיאגרמה.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Our Mission
                </Typography>
                <Typography variant="body1">
                  To advance the science and practice of marine sensor design and data processing through the development of standards, methods, and technologies that ensure the accuracy, reliability, and interoperability of ocean measurements in diverse and challenging marine environments.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Our Vision
                </Typography>
                <Typography variant="body1">
                  To be the leading body in Israel for promoting research and development in marine metrology, serving as a beacon of knowledge and inspiration for future generations of scientists.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Key Objectives
                </Typography>
                <Typography variant="body1">
                  Promoting through funding interdisciplinary activities via conferences, invited talks, joint courses, and data sharing. Our fields of interest include: establishing standardized procedures for oceanic measurements and quality assurance/quality control frameworks; addressing metrology challenges in extreme marine environments; promoting best practices in marine instrument design, development, and testing; promoting robust signal processing techniques and AI-driven solutions for sensor data calibration and analysis; establishing calibration protocols and reference standards; enabling error correction and uncertainty analysis; developing sensor synchronization techniques; assessing long-term stability of underwater sensors; supporting development and evaluation of ocean measurement platforms; and facilitating application of ocean measurement technology to scientific research.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Initiatives and News Section */}
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Highlights of Key Initiatives & Upcoming Events
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3">
                  Tech4Bio Conference
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Oct. 21-23, 2025, Haifa, Israel
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Dedicated to the development of acoustic sensors for marine biology applications.
                </Typography>
                <Button variant="contained" href="https://marinetech.github.io/Tech4Bio2025.github.io/" target="_blank" rel="noopener noreferrer" aria-label="Learn more about Tech4Bio conference">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3">
                  BTS’25 Conference
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Nov 9-16, 2025, Limassol, Cyprus
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  A gathering of technology developers and researchers in the fields of oceanography, marine observatories, marine biology, and marine archaeology.
                </Typography>
                <Button variant="contained" href="https://bts.fer.hr/" target="_blank" rel="noopener noreferrer" aria-label="Learn more about BTS’25 conference">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Call-to-Action Section (Optional) */}
      <Box sx={{ textAlign: 'center', my: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Interested in participating or collaborating with the TC?
        </Typography>
        <Button variant="contained" size="large" component={RouterLink} to="/contact" aria-label="Contact us for information">
          Contact Us Today!
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;