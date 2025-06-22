import React from 'react';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import MaskGroup1 from "../assets/images/Mask Group 1.webp";

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
          position: 'absolute', bottom: 0, left: 0, right: 0, color: 'white',
          textAlign: 'left', p: { xs: 4, md: 8 },
          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 0, color: 'white', fontSize: { xs: '2.0rem', sm: '2.6rem', md: '3.5rem', lg: '4.5rem' } }}>
          Advancing Excellence <br /> in Marine Metrology Research
        </Typography>
        <Typography variant="h7" component="p" sx={{ color: 'white', mt: 2, fontSize: { xs: '0.8rem', sm: '1.0rem', md: '1.4rem', lg: '1.8rem' }, }}>
          The Marine Metrology Technical Committee (TC) is part of the IEEE OES organization.
        </Typography>

      </CardContent>
    </Card>


  );
};

export default HomePage;