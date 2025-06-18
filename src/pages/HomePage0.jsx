// src/pages/HomePage.jsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Container, Stack, CardActions, CardActionArea, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { committeeStructureData } from './committeeData';
import CommitteeStructureDiagram from './CommitteeStructureDiagram';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'; 
// נסיר את הייבוא של הדפים, ונעביר את התוכן שלהם לכאן
// import ActivitiesCalendarPage from './ActivitiesCalendarPage';
// import ContactPage from './ContactPage';
// import MembershipPage from './MembershipPage';

import events from './events.json';

import wave_img from "../assets/images/wave_img.png";
import DJI_0070 from "../assets/images/DJI_0070.png";
import NVO04615 from "../assets/images/NVO04615.png";
import MaskGroup1 from "../assets/images/Mask Group 1.png";
import MaskGroup2 from "../assets/images/Mask Group 2.png";
import MaskGroup4 from "../assets/images/Mask Group 4.png";
import MaskGroup5 from "../assets/images/Mask Group 5.png";

// אם יש לך קובץ נפרד עבור לוח השנה:
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
const localizer = momentLocalizer(moment);
// אם CalendarComponent הוא רכיב נפרד, וודא שהוא מיוצא ומיובא כראוי
// לדוגמה, אם יש לך src/components/CalendarComponent.jsx שמכיל את לוח השנה
// import CalendarComponent from '../components/CalendarComponent'; // אם קיים

const HomePage = () => {
    // מצב לפתיחת לוח השנה (כמו שהיה ב-ActivitiesCalendarPage)
    const [openCalendarDialog, setOpenCalendarDialog] = React.useState(false);
    const handleClickOpenCalendar = () => {
        setOpenCalendarDialog(true);
    };
    const handleCloseCalendar = () => {
        setOpenCalendarDialog(false);
    };

    return (
        <Container disableGutters sx={{ maxWidth: 'none', width: "100%" }}>

            {/* Hero Section - Mission, Vision, and Objectives */}
            {/* נגדיר ID עבור חלק ה-Home/Hero */}
            <Card sx={{ borderRadius: 0, position: 'relative', mb: 4 }} id="home">
                <CardMedia
                    component="img"
                    image={MaskGroup1}
                    alt="Two buoys in the ocean, symbolizing marine research."
                    sx={{
                        height: { xs: 300, sm: 400, md: 500 },
                        objectFit: 'cover',
                    }}
                />
                <CardContent
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        color: 'white',
                        textAlign: 'left',
                        p: { xs: 4, md: 8 },
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
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
                    <Typography variant="body1" component="p" sx={{ color: 'white', mt: 1 }}>
                        Technical Committee Structure
                    </Typography>
                </CardContent>
            </Card>

            {/* Diagram Embedding - Using the new dynamic component */}
            {/* נגדיר ID עבור חלק ה-Committee Structure */}
            <Box id="committee-structure" sx={{ py: 4, backgroundColor: 'white' }}>
                 <CommitteeStructureDiagram data={committeeStructureData} />
            </Box>


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

            {/* נגדיר ID עבור חלק ה-Activities/Objectives */}
            <Grid item xs={12} id="activities">
                <Card sx={{ padding: 4, height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: "#072034" }}>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ mb: 4, textAlign: "center", color: 'white', fontWeight: 'bold' }}>
                        Key Objectives
                    </Typography>
                    <Stack sx={{ p: 3 }} direction={{ xs: 'row', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
                        <CardMedia component="img" image={DJI_0070} alt="Organization Logo" sx={{ height: { xs: 50, sm: 100, md: 150 }, width: 'auto', maxWidth: '100%' }} />
                        <CardMedia component="img" image={MaskGroup2} alt="Organization Logo" sx={{ height: { xs: 50, sm: 100, md: 150 }, width: 'auto', maxWidth: '100%' }} />
                        <CardMedia component="img" image={NVO04615} alt="Organization Logo" sx={{ height: { xs: 50, sm: 100, md: 150 }, width: 'auto', maxWidth: '100%' }} />
                    </Stack>
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
                        <Grid item xs={12} sm={6} md={4} key={i}> {/* עוטף כל קארד ב-Grid item */}
                            <Card sx={{ maxWidth: 380, backgroundColor: "#7fc9f6", borderRadius: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
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
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Activities Calendar Section */}
            {/* נגדיר ID עבור חלק ה-Activities Calendar */}
            <Box sx={{ justifyContent: "center", my: 6, minHeight: '600px', backgroundColor: "#dedede", display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4 }} id="activities-calendar">
                <Typography variant="h3" component="h1" align="center" gutterBottom>
                    Upcoming Events Calendar
                </Typography>
                <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 4 }}>
                    Explore our schedule of workshops, conferences, and webinars.
                </Typography>
                {/* כאן נציג את לוח השנה עצמו, במקום כפתור פתיחת דיאלוג */}
                {/* אם רכיב CalendarPage מכיל את כל הלוגיקה, נוכל לשלב אותו כאן */}
                {/* אם מדובר ברכיב "קל" יותר, ניתן לשלב כאן את Calendar */}
                <Box sx={{ height: '500px', width: '90%', maxWidth: '800px', mb: 4 }}> {/* קונטיינר ללוח השנה */}
                     <Calendar
                        localizer={localizer}
                        events={events} // וודא ש-events שלך מותאם לפורמט של react-big-calendar (start, end, title)
                        startAccessor="start"
                        endAccessor="end"
                        titleAccessor="name"
                        style={{ height: '100%' }}
                     />
                </Box>
                 <Button variant="contained" endIcon={<CalendarMonthIcon />} onClick={handleClickOpenCalendar}
                   sx={{ borderRadius: '20px', px: 4, py: 1.5 }}>
                   View Full Calendar (if needed, or remove this button if full calendar is displayed)
                 </Button>

                {/* אם בחרת להשאיר דיאלוג ללוח שנה גדול, אז ה-Dialog עצמו צריך להיות כאן: */}
                {/* <Dialog open={openCalendarDialog} onClose={handleCloseCalendar} maxWidth="lg" fullWidth>
                    <DialogTitle>Upcoming Events Calendar
                        <IconButton aria-label="close" onClick={handleCloseCalendar} sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500], }}>
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <ActivitiesCalendarPage />
                    </DialogContent>
                </Dialog> */}
            </Box>


            {/* Membership Section */}
            {/* נגדיר ID עבור חלק ה-Membership */}
            <Box sx={{ py: 6, backgroundColor: '#f5f5f5' }} id="membership">
                <Typography variant="h3" component="h1" align="center" gutterBottom>
                    Become a Member
                </Typography>
                <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 4 }}>
                    Join our community and contribute to marine metrology research.
                </Typography>
                {/* תוכן של MembershipPage ילך כאן */}
                {/* דוגמה לתוכן מופשט, התאם לתוכן המקורי של MembershipPage */}
                <Container maxWidth="md" sx={{ textAlign: 'center' }}>
                    <Typography variant="body1" paragraph>
                        Becoming a member of the Marine Metrology Technical Committee offers numerous benefits, including access to exclusive resources, networking opportunities with leading experts, and participation in groundbreaking research. Your contribution helps shape the future of ocean measurements.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        component={RouterLink}
                        to="https://www.ieee.org/membership/join/index.html" // קישור הצטרפות בפועל
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ mt: 3, borderRadius: '20px', px: 4, py: 1.5 }}
                    >
                        Learn More & Join
                    </Button>
                </Container>
            </Box>

            {/* Contact Section */}
            {/* נגדיר ID עבור חלק ה-Contact */}
            <Box sx={{ py: 6, backgroundColor: '#dedede' }} id="contact">
                <Typography variant="h3" component="h1" align="center" gutterBottom>
                    Contact Us
                </Typography>
                <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 4 }}>
                    Have questions? We'd love to hear from you!
                </Typography>
                {/* תוכן של ContactPage ילך כאן */}
                {/* דוגמה לתוכן מופשט, התאם לתוכן המקורי של ContactPage */}
                <Container maxWidth="sm">
                    <Typography variant="body1" paragraph align="center">
                        For inquiries, collaborations, or any other information, please reach out to us:
                    </Typography>
                    <Typography variant="body1" align="center">
                        Email: <a href="mailto:info@marinemec.org">info@marinemec.org</a>
                    </Typography>
                    <Typography variant="body1" align="center" sx={{ mt: 1 }}>
                        Phone: +972-XXX-XXXX
                    </Typography>
                    {/* ניתן להוסיף כאן טופס יצירת קשר פשוט */}
                </Container>
            </Box>

            {/* Call-to-Action Section */}
            <Box sx={{ paddingTop: 0, backgroundColor: "#072034", display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4, flexWrap: 'wrap' }}>
                <Typography variant="h5" component="h2" gutterBottom sx={{ color: "white", fontWeight: 'bold', mr: { xs: 0, sm: 4 }, mb: { xs: 2, sm: 0 }, textAlign: 'center' }}>
                    Interested in participating or collaborating with the TC?
                </Typography>
                <Button variant="contained" size="medium" component={RouterLink} to="#contact" aria-label="Contact us for information" sx={{ fontWeight: 'bold', borderRadius: '30px', px: 4, py: 2 }}>
                    Contact Us Today!
                </Button>
            </Box>

        </Container>
    );
};

export default HomePage;