// src/pages/ActivitiesPage.jsx
import * as React from 'react';
import { Box, Typography, Container, Grid, IconButton, CardContent, List, ListItem, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Divider } from '@mui/material';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment'; // Make sure moment is imported
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

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
  }
];
// --- End Static Data ---
const EventComponent = ({ event }) => (
  <Box>
    <strong>{event.title}</strong>
    {event.description && <p>{event.description}</p>}
    {event.type && <small>({event.type})</small>}
  </Box>
);

const ActivitiesCalendarPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };

  // Optional: Function to customize event display in the calendar


  return (
    <React.Fragment>


      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',mx:5, my: 2,p:2,borderRadius:"50px", backgroundColor: '#dedede' }}>
        <Typography variant="h6" component="h1" align="center" gutterBottom>
          Upcoming Events Calendar
        </Typography>
        <Typography variant="h7" align="center" color="text.secondary" sx={{ mb: 4 }}>
          Explore our schedule of workshops, conferences, and webinars.
        </Typography>
        <Button variant="contained" endIcon={<CalendarMonthIcon />} onClick={handleClickOpen} sx={{ borderRadius: '20px', px: 4, py: 1.5 }}>
          Calendar
        </Button>
      </Box>

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
                style={{ height: 600 }} // Set a fixed height for the calendar
                defaultView="month" // Default view when the calendar loads
                views={['month', 'week', 'day', 'agenda']} // Available views
                components={{ event: EventComponent, }} // Use custom component for event display
                // Optional: Event click handler
                onSelectEvent={event => alert(`Event: ${event.title}\nDescription: ${event.description}`)}
                // Optional: Navigate to current date on load
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