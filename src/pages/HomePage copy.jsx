import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <Box>
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
        <Typography variant="h1" component="h1" gutterBottom sx={{ color: 'white' }}>
          Advancing Excellence in Research
        </Typography>
        <Typography variant="h5" component="p" sx={{ mb: 4, color: 'white' }}>
          Our organization is committed to supporting, funding, and empowering leading researchers
          across various fields, for a better future.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Our Mission
                </Typography>
                <Typography variant="body1">
                  To support groundbreaking research and visionary researchers by providing grants
                  and essential resources, while fostering an environment of innovation and collaboration.
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
                  To be the leading body in Israel for promoting research and development, serving as a beacon of
                  knowledge and inspiration for future generations of scientists.
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
                  Increasing the scope of grants, fostering international collaborations, mentoring
                  and nurturing young researchers, and disseminating knowledge to the wider public.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Initiatives and News Section */}
      <Box sx={{ my: 6 }}>
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Latest Initiatives & News
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3">
                  New Call for Biotech Research Grants
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Published on: June 10, 2025
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  We are pleased to announce a new call for grants in the field of Biotechnology,
                  encouraging innovative research with the potential to impact human health.
                </Typography>
                <Button variant="contained" component={RouterLink} to="/activities" aria-label="Read more about biotech grant call">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3">
                  Annual Researchers' Conference 2025: Date and Collaborations
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Published on: June 1, 2025
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Our annual conference will be held in November, dedicated to "Science Beyond Borders."
                  We invite the entire scientific community to join.
                </Typography>
                <Button variant="contained" component={RouterLink} to="/activities" aria-label="Read more about the annual conference">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Call-to-Action Section (Optional) */}
      <Box sx={{ textAlign: 'center', my: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Interested in participating or receiving a grant?
        </Typography>
        <Button variant="contained" size="large" component={RouterLink} to="/contact" aria-label="Contact us for information">
          Contact Us Today!
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;