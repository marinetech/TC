import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Container, Stack, CardActions, CardActionArea, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { CenterFocusStrong, Upcoming } from '@mui/icons-material';
import { committeeStructureData } from './committeeData';
import CommitteeStructureDiagram from './CommitteeStructureDiagram';
import ContactPage from './ContactPage';
import MembershipPage from './MembershipPage';
import UpcomingEvents from './UpcomingEventsPage';


import wave_img from "../assets/images/wave_img.png";
import DJI_0070 from "../assets/images/DJI_0070.png";
import NVO04615 from "../assets/images/NVO04615.png";
import MaskGroup1 from "../assets/images/Mask Group 1.png";
import MaskGroup2 from "../assets/images/Mask Group 2.png";
import MaskGroup4 from "../assets/images/Mask Group 4.png";
import MaskGroup5 from "../assets/images/Mask Group 5.png";


const HomePage = () => {
  return (

    <Card sx={{ borderRadius: 0, position: 'relative', mb: 4, }} id="home">
      <CardMedia
        component="img"
        image={MaskGroup1} 
        alt="Two buoys in the ocean, symbolizing marine research." 
        sx={{ height: { xs: 300, sm: 400, md: 500 }, objectFit: 'cover', }} />

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
        <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 0, color: 'white' ,
            fontSize: {
                xs: '2.0rem',
                sm: '2.6rem',
                md: '3.5rem',
                lg: '4.5rem'
            },

        }}>
    Advancing Excellence <br /> in Marine Metrology Research
        </Typography>
        <Typography variant="h7" component="p" sx={{ color: 'white', mt: 2, fontSize: {
                xs: '0.8rem',
                sm: '1.0rem',
                md: '1.4rem',
                lg: '1.8rem'
            },
 }}>
          The Marine Metrology Technical Committee (TC) is part of the IEEE OES organization.
        </Typography>
        
      </CardContent>
    </Card>


  );
};

export default HomePage;