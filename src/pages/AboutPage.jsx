import React from 'react';
import { Typography, Stack, Grid, Card, CardContent, CardMedia } from '@mui/material';


import wave_img from "../assets/images/wave_img.png";
import DJI_0070 from "../assets/images/DJI_0070.png";
import NVO04615 from "../assets/images/NVO04615.png";
import GOPR0093 from "../assets/images/GOPR0093.png";
import MaskGroup4 from "../assets/images/Mask Group 4.png";
import MaskGroup5 from "../assets/images/Mask Group 5.png";

const topics = [
  {
    "name": "Our Mission",
    "about_it": "To advance the science and practice of marine sensor design and data processing through the development of standards, methods, and technologies that ensure the accuracy, reliability, and interoperability of ocean measurements in diverse and challenging marine environments.",
    "img": MaskGroup4,
  },
  {
    "name": "Our Vision",
    "about_it": "To be the leading body in Israel for promoting research and development in marine metrology, serving as a beacon of knowledge and inspiration for future generations of scientists.",
    "img": MaskGroup5,
  }
]

const AboutPage = () => {
  return (
    <React.Fragment>
      <Grid container spacing={4} justifyContent="center" sx={{ backgroundColor: "white", pt: 4 }} id="About_US">

        {topics.map((topic, i) => (

          <Grid item xs={12} md={4} key={i}>

            <Card sx={{ paddingLeft: 2, height: '100%', display: 'flex' ,boxShadow:0}}>

              <CardMedia component="img" sx={{ height: 'auto', width: '40%', }} image={topic.img} alt="Live from space album cover" />
              <CardContent sx={{ paddingTop: { xs: 0 }, }}>

                <Grid justifyContent="left" item size={12} sx={{ paddingTop: 0, display: 'flex' }}>
                  
                  <CardMedia component="img" image={wave_img}
                    alt="Organization Logo"
                     sx={{ height: {xs:15, sm:20, md: 30, lg:40}, width: 'auto', maxWidth: '100%', mr: 2 }} />
                
                  <Typography variant="h5" component="h2" sx={{
                    color: '#072034', fontWeight: 'bold',
                    fontSize: { xs: '1.2rem', sm: '1.6rem', md: '1.8rem', lg: '2.2rem' },
                  }}>
                    {topic.name} 
                  </Typography>

                </Grid>

                <Typography textAlign="left" variant="body1"
                  sx={{ fontSize: { xs: '0.8rem', sm: '1.0rem', md: '1.2rem', lg: '1.4rem' }, }}>
                  {topic.about_it}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

      </Grid>
      <Grid item xs={12}>

        <Card sx={{ padding:4 ,px:{xs:0,sm:4}, height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: "#072034" }}>
          <Typography variant="h5" component="h3" gutterBottom sx={{ 
                                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.4rem', lg: '2.8rem' },

            mb: 1, textAlign: "center", color: 'white', fontWeight: 'bold' }}>
            Key Objectives
          </Typography>


          <Stack sx={{ p: 3,  }} direction='row' spacing={{ xs: 1,  }}>
            <CardMedia component="img" image={NVO04615} alt="Organization Logo"   sx={{ height: 'auto', width: '36%', }} />
            <CardMedia component="img" image={GOPR0093} alt="Organization Logo"  sx={{ height: 'auto', width: '27%', }} />
            <CardMedia component="img" image={DJI_0070} alt="Organization Logo" sx={{ height: 'auto', width: '36%', }} />
          </Stack>

          <CardContent>
            <Typography variant="body1" sx={{ color: 'white' }}>
              Promoting through funding interdisciplinary activities via conferences, invited talks, joint courses, and data sharing. Our fields of interest include: establishing standardized procedures for oceanic measurements and quality assurance/quality control frameworks; addressing metrology challenges in extreme marine environments; promoting best practices in marine instrument design, development, and testing; promoting robust signal processing techniques and AI-driven solutions for sensor data calibration and analysis; establishing calibration protocols and reference standards; enabling error correction and uncertainty analysis; developing sensor synchronization techniques; assessing long-term stability of underwater sensors; supporting development and evaluation of ocean measurement platforms; and facilitating application of ocean measurement technology to scientific research.
            </Typography>
          </CardContent>

        </Card>
      </Grid>

    </React.Fragment>

  );
};

export default AboutPage;