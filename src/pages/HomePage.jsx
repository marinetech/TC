import React from 'react';
import { Box, Typography, Container, CardActions, CardActionArea, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CommitteeStructureDiagram from './CommitteeStructureDiagram';  
import { committeeStructureData } from './committeeData';  
import events from './events.json';
import { CenterFocusStrong } from '@mui/icons-material';

import wave_img from "../assets/images/wave_img.png";
import DJI_0070 from "../assets/images/DJI_0070.png";
import NVO04615 from "../assets/images/NVO04615.png";
import MaskGroup1 from "../assets/images/Mask Group 1.png";
import MaskGroup2 from "../assets/images/Mask Group 2.png";
import MaskGroup4 from "../assets/images/Mask Group 4.png";
import MaskGroup5 from "../assets/images/Mask Group 5.png";

const HomePage = () => {
  return (
    <Container  disableGutters  sx={{maxWidth: 'none', width:"100%"}}>
    
      {/* Hero Section - Mission, Vision, and Objectives */}


      <Card sx={{ borderRadius: 0, position: 'relative', mb: 4, }}>
        <CardMedia
          component="img"
          image={MaskGroup1} // Use the imported image
          alt="Two buoys in the ocean, symbolizing marine research." // Good alt text for accessibility
          sx={{
            height: { xs: 300, sm: 400, md: 500 }, // Responsive height for the image
            objectFit: 'cover', // Ensures the image covers the area without distortion
            //filter: 'brightness(50%)', // Darkens the image for better text readability
          }}
        />

        <CardContent
          sx={{
            position: 'absolute', // Position content over the image
            bottom: 0, // Align to the bottom
            left: 0,
            right: 0,
            color: 'white', // White text
            textAlign: 'left', // Align text to the left
            p: { xs: 4, md: 8 }, // Add padding, responsive
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)', // Subtle gradient at bottom for text readability
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 0, color: 'white' }}>
            Advancing Excellence
          </Typography>
          <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'white' }}>
            in Marine Metrology Research
          </Typography>
          <Typography variant="h7" component="p" sx={{ color: 'white', mt: 2 }}>
            The Marine Metrology Technical Committee (TC) is part of the IEEE OES organization.
          </Typography>
          {/* If "Technical Committee Structure" is part of the hero, put it here, otherwise it's below */}
          <Typography variant="body1" component="p" sx={{ color: 'white', mt: 1 }}>
            Technical Committee Structure
          </Typography>
        </CardContent>
      </Card>


      {/* Diagram Embedding - Using the new dynamic component */}

      <CommitteeStructureDiagram data={committeeStructureData} />


      <Grid container spacing={4} justifyContent="center" sx={{ backgroundColor: "white", pt: 4 }}>


        <Grid item xs={12} md={4}>

          <Card sx={{ paddingLeft: 2, height: '100%', display: 'flex' }}>

            <CardMedia component="img" sx={{ width: 151 }} image={MaskGroup4} alt="Live from space album cover" />
            <CardContent>

              <Grid justifyContent="left" item size={12} sx={{ paddingTop: 2, display: 'flex' }}>
                <CardMedia component="img" image={wave_img}
                  alt="Organization Logo" sx={{ height: 30, width: 'auto', maxWidth: '100%', mr: 2 }} />
                <Typography variant="h5" component="h2" sx={{ color: '#072034', fontWeight: 'bold' }}>
                  Our Mission
                </Typography>
              </Grid>

              <Typography textAlign="left" variant="body1">
                To advance the science and practice of marine sensor design and data processing through the development of standards, methods, and technologies that ensure the accuracy, reliability, and interoperability of ocean measurements in diverse and challenging marine environments.
              </Typography>
            </CardContent>
          </Card>
        </Grid>


        <Grid item xs={12} md={4}>

          <Card sx={{ paddingLeft: 2, height: '100%', display: 'flex' }}>

            <CardMedia component="img" sx={{ width: 151 }} image={MaskGroup5} alt="Live from space album cover" />
            <CardContent>

              <Grid justifyContent="left" item size={12} sx={{ paddingTop: 2, display: 'flex' }}>
                <CardMedia component="img" image={wave_img}
                  alt="Organization Logo" sx={{ height: 30, width: 'auto', maxWidth: '100%', mr: 2 }} />
                <Typography variant="h5" component="h2" sx={{ color: '#072034', fontWeight: 'bold' }}>
                  Our Vision
                </Typography>
              </Grid>

              <Typography textAlign="left" variant="body1">
                To be the leading body in Israel for promoting research and development in marine metrology, serving as a beacon of knowledge and inspiration for future generations of scientists.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>

      <Grid item xs={12}   >

        <Card sx={{ padding: 4, height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: "#072034" }}>
          <Typography variant="h5" component="h3" gutterBottom sx={{ mb: 4, textAlign: "center", color: 'white', fontWeight: 'bold' }}>
            Key Objectives
          </Typography>
          <Grid container spacing={2} justifyContent="center" sx={{ mb: 3, display: 'flex', flexDirection: 'row' }}>
            <Grid item xs={4}>
              <CardMedia component="img" image={DJI_0070} alt="Organization Logo" sx={{ height: 150 }} />
            </Grid>
            <Grid item xs={4}>
              <CardMedia component="img" image={MaskGroup2} alt="Organization Logo" sx={{ height: 150 }} />
            </Grid>
            <Grid item xs={4}>
              <CardMedia component="img" image={NVO04615} alt="Organization Logo" sx={{ height: 150 }} />
            </Grid>
          </Grid>

          <CardContent>

            <Typography variant="body1" sx={{ color: 'white' }}>
              Promoting through funding interdisciplinary activities via conferences, invited talks, joint courses, and data sharing. Our fields of interest include: establishing standardized procedures for oceanic measurements and quality assurance/quality control frameworks; addressing metrology challenges in extreme marine environments; promoting best practices in marine instrument design, development, and testing; promoting robust signal processing techniques and AI-driven solutions for sensor data calibration and analysis; establishing calibration protocols and reference standards; enabling error correction and uncertainty analysis; developing sensor synchronization techniques; assessing long-term stability of underwater sensors; supporting development and evaluation of ocean measurement platforms; and facilitating application of ocean measurement technology to scientific research.
            </Typography>
          </CardContent>
        </Card>
      </Grid>


      {/* Initiatives and News Section */}
      <Box sx={{ my: 6 }}>


        <Grid justifyContent="center" item size={12} sx={{ pb: 4, paddingTop: 0, display: 'flex' }}>
          <CardMedia component="img" image={wave_img} alt="Organization Logo" sx={{ height: 30, width: 'auto', maxWidth: '100%', mr: 2 }} />
          <Typography variant="h5" component="h2" sx={{ color: '#072034', fontWeight: 'bold' }}>
            Highlights of Key Initiatives & Upcoming Events
          </Typography>
        </Grid>

        <Grid justifyContent="center" container spacing={4} >
          {events.map((event, i) => (


            <Card sx={{ maxWidth: 380, backgroundColor: "#7fc9f6", borderRadius: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CardActionArea >
                <CardContent sx={{ paddingBottom: 0 }}>

                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center", mb: 1, fontWeight: 'bold' }}>
                    {event.time} {event.location}
                  </Typography>
                  <Typography gutterBottom variant="h5" sx={{ textAlign: "center", fontWeight: 'bold' }}>
                    {event.name}
                  </Typography>
                  <Typography variant="body2" sx={{ textAlign: "center", color: 'text.secondary', fontWeight: 'bold' }}>
                    {event.description}
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                <Button size="large" href={event.link} target="_blank" rel="noopener noreferrer" aria-label="Learn more about Tech4Bio conference"
                  sx={{ backgroundColor: '#072034', fontWeight: 'bold', color: 'white', borderRadius: '30px', px: 4, py: 2, '&:hover': { backgroundColor: '#051624', }, }}>
                  Learn More
                </Button>
              </CardActions>
            </Card>

          ))}
        </Grid>
      </Box>

      {/* Call-to-Action Section (Optional) */}
      <Box item size={12} sx={{ paddingTop: 0, backgroundColor: "#072034", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h5" component="h2" gutterBottom sx={{color:"white", fontWeight: 'bold', bx: 2 }}>
          Interested in participating or collaborating with the TC?
        </Typography>

        <Button variant="contained" size="madium" component={RouterLink} to="/contact" aria-label="Contact us for information" sx={{ fontWeight: 'bold', borderRadius: '30px',m:4, px: 2, py: 2 }}>
          Contact Us Today!
        </Button>
      </Box>

    </Container >
  );
};

export default HomePage;