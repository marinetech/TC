// src/pages/UpcomingEventsPage.jsx
import React, { Suspense } from 'react';
import { Box, Typography, CardActions, CardActionArea, Grid, Card, CardContent, Button, CardMedia, } from '@mui/material';
import wave_img from "../assets/images/wave_img.webp";
import events from './events.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

//import ActivitiesCalendarPage from './ActivitiesCalendarPage';
const ActivitiesCalendarPage = React.lazy(() => import('./ActivitiesCalendarPage'));

const UpcomingEventsPage = () => {
  return (
    <React.Fragment>
      <Box sx={{ my: 6 }} id="activities">

        <Grid justifyContent="center" item size={12} sx={{ px: 1, paddingTop: 0, display: 'flex' }}>
          <CardMedia component="img" image={wave_img} alt="decorative wave img" sx={{ height: 30, width: 'auto', maxWidth: '100%', mr: 2 }} />
          <Typography
            variant="h5"
            component="h2"
            sx={{
              color: '#072034',
              fontWeight: 'bold',
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem', lg: '2.125rem' }
            }}
          >
            Highlights of Key Initiatives & Upcoming Events
          </Typography>
        </Grid>

        <Box sx={{ mx: 'auto', maxWidth: '100%', px: { xs: 0, sm: 0 } }}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={false}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              900: { slidesPerView: 2, centerInsufficientSlides: true },
              1275: { slidesPerView: 3, centerInsufficientSlides: true },
              1700: { slidesPerView: Math.min(events.length, 4), centerInsufficientSlides: true },
            }}

          >
            {events.map((event, i) => (
              <SwiperSlide key={i} style={{ display: 'flex', justifyContent: 'center' }}>
                <Card sx={{
                  my: 4,
                  display: 'flex',
                  borderRadius: 10,
                  flexDirection: 'column',
                  backgroundColor: "#7fc9f6",
                  justifyContent: 'space-between',
                  width: { xs: 300, sm: 400, md: 400, lg: 400 },
                  height: { xs: 200, sm: 250, md: 250, lg: 250 },
                }}>
                  <CardActionArea sx={{ flexGrow: 0 }}> {/* Allow CardActionArea to grow */}
                    <CardContent sx={{ paddingBottom: 0, p: { xs: 1.5, sm: 2 } }}> {/* Responsive padding */}
                      <Typography
                        variant="body2"
                        color="black"
                        sx={{
                          textAlign: "center",
                          mb: { xs: 0.5, sm: 1 },
                          fontSize: { xs: '0.75rem', sm: '0.875rem' }
                        }}
                      >
                        {event.time} {event.location}
                      </Typography>
                      <Typography gutterBottom variant="h3" sx={{ textAlign: "center", color: 'black', fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }} >
                        {event.name}
                      </Typography>
                      <Typography variant="body2" sx={{ textAlign: "center", color: 'black', fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '0.8rem' } }} >
                        {event.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>

                  <CardActions sx={{ justifyContent: 'center', pb: { xs: 1, sm: 2 } }}>
                    <Button
                      size="large"
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Learn more about ${event.name}`}
                      sx={{
                        backgroundColor: '#072034',
                        fontWeight: 'bold',
                        color: 'white',
                        borderRadius: '30px',
                        px: { xs: 2, sm: 4 },
                        py: { xs: 1, sm: 2 },
                        fontSize: { xs: '0.75rem', sm: '1rem' },
                        '&:hover': { backgroundColor: '#051624' },
                      }}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Suspense fallback={<div>Loading Calendar...</div>}>
          <ActivitiesCalendarPage />
        </Suspense>
      </Box>
    </React.Fragment>
  );
}

export default UpcomingEventsPage;