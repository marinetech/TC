// src/pages/ActivitiesCalendarPage.jsx
import * as React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  IconButton,
  Stack,
  List,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Divider,
  useMediaQuery, // Import useMediaQuery
  useTheme,      // Import useTheme
} from '@mui/material';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

// Make sure to import the CSS for react-big-calendar
import 'react-big-calendar/lib/css/react-big-calendar.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Initialize the localizer for React Big Calendar
const localizer = momentLocalizer(moment);

// --- Static Data for Demonstration ---
const projects = [
  {
    id: 1,
    title: "Advancing AI Ethics in Healthcare",
    description: "This project aims to develop ethical guidelines and practical frameworks for the responsible implementation of Artificial Intelligence in healthcare settings, focusing on data privacy, bias mitigation, and clinical decision support.",
    goals: [
      "Establish a multidisciplinary AI ethics committee.",
      "Publish a comprehensive guideline document for AI in healthcare.",
      "Conduct workshops for healthcare providers and AI developers."
    ],
    outcomes: "Developed a widely adopted framework for AI ethics, influencing policy recommendations and improving patient trust in AI-driven medical solutions.",
    status: "Completed (2023-2024)"
  }
];

// Events data formatted for React Big Calendar
const calendarEvents = [
  {
    id: 1,
    title: "Webinar: Grant Application Best Practices",
    start: moment("2025-07-20T10:00:00").toDate(), // Use current year for events
    end: moment("2025-07-20T12:00:00").toDate(),   // Use current year for events
    description: "A comprehensive guide for researchers on crafting compelling grant proposals. Q&A session included.",
    type: "Webinar"
  },
  {
    id: 2,
    title: "Annual Research Conference",
    start: moment("2025-08-15T09:00:00").toDate(),
    end: moment("2025-08-17T17:00:00").toDate(),
    description: "Our annual conference showcasing groundbreaking research across various fields.",
    type: "Conference"
  },
  {
    id: 3,
    title: "Workshop: Data Visualization Techniques",
    start: moment("2025-09-05T14:00:00").toDate(),
    end: moment("2025-09-05T17:00:00").toDate(),
    description: "Hands-on workshop on effective data visualization for scientific communication.",
    type: "Workshop"
  }
];
// --- End Static Data ---

const EventComponent = ({ event }) => (
  <Box>
    <strong>{event.title}</strong>
    {event.description && <p style={{ margin: '4px 0' }}>{event.description}</p>}
    {event.type && <small>({event.type})</small>}
  </Box>
);

const ActivitiesCalendarPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };

  const theme = useTheme(); // Access the default Material-UI theme
  // True for screens smaller than 'sm' (e.g., xs)
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <React.Fragment>
      {isSmallScreen ? (
        // --- Content for Small Screens (xs) ---
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mx: 5, my: 2, p: 0 }}>
          <Button
            variant="contained"
            endIcon={<CalendarMonthIcon />}
            onClick={handleClickOpen}
            sx={{ alignSelf: 'center', fontSize: '0.75rem', borderRadius: '20px', px: 4, py: 1.5 }}
          >
            Upcoming Events Calendar
          </Button>
        </Box>
      ) : (
        // --- Content for Larger Screens (sm and up) ---
        <Box sx={{ display: 'flex', justifyContent: 'center', mx: 5, my: 2, p: 2, borderRadius: "50px", backgroundColor: '#dedede' }}>

          <Grid container direction="row" sx={{ px: 3, width: "100%", justifyContent: { md: "space-around", sm: "center" }, alignItems: "center", }}>

            <Grid >
              <Stack spacing={0}>
                <Typography variant="h6" component="h1" >
                  Upcoming Events Calendar
                </Typography>
                <Typography variant="h7" color="text.secondary" >
                  Explore our schedule of workshops, conferences, and webinars.
                </Typography>
              </Stack>
            </Grid>

            <Grid >
              <Button variant="contained" endIcon={<CalendarMonthIcon />} onClick={handleClickOpen} sx={{ borderRadius: '20px', px: 4, py: 1.5 }}>
                Calendar
              </Button>
            </Grid>

          </Grid>

        </Box>
      )}

      {/* Calendar Dialog - This remains the same */}
      <Dialog open={open} slots={{ transition: Transition, }} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description">
        <DialogTitle>{"Upcoming Events Calendar"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="calendar-dialog-slide-description">
            <Box sx={{ my: 6, minHeight: '600px' }}> {/* minHeight is important for calendar visibility */}
              <Calendar
                localizer={localizer}
                events={calendarEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 600 }}
                defaultView="month"
                views={['month', 'week', 'day', 'agenda']}
                components={{ event: EventComponent, }}
                onSelectEvent={event => alert(`Event: ${event.title}\nDescription: ${event.description}`)}
                defaultDate={moment().toDate()}
              />
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default ActivitiesCalendarPage;