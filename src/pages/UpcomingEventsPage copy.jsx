// src/pages/UpcomingEventsPage.jsx
import * as React from 'react';
import {
  Box,
  Typography,
  CardActions,
  CardActionArea,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';

import ActivitiesCalendarPage from './ActivitiesCalendarPage';
import wave_img from "../assets/images/wave_img.png";
import events from './events.json';


const UpcomingEventsPage = () => {


  return (
    <React.Fragment>

      {/* Initiatives and News Section */}
      <Box sx={{ my: 6 }} id="activities-calendar">


        <Grid justifyContent="center" item size={12} sx={{ pb: 4, paddingTop: 0, display: 'flex' }}>
          <CardMedia component="img" image={wave_img} alt="Organization Logo" sx={{ height: 30, width: 'auto', maxWidth: '100%', mr: 2 }} />
          <Typography variant="h5" component="h2" sx={{ color: '#072034', fontWeight: 'bold' }}>
            Highlights of Key Initiatives & Upcoming Events
          </Typography>
        </Grid>

        <Grid justifyContent="center" container spacing={4} >
          {events.map((event, i) => (


            <Card key={i} sx={{
              maxWidth: 380,
              backgroundColor: "#7fc9f6",
              borderRadius: 10,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>

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
                <Button
                  size="large"
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Learn more about Tech4Bio conference"
                  sx={{
                    backgroundColor: '#072034',
                    fontWeight: 'bold',
                    color: 'white',
                    borderRadius: '30px',
                    px: 4,
                    py: 2,
                    '&:hover': { backgroundColor: '#051624', },
                  }}>
                  Learn More
                </Button>
              </CardActions>
            </Card>

          ))}
        </Grid>
        <ActivitiesCalendarPage />
      </Box>

    </React.Fragment>
  );
}
export default UpcomingEventsPage;