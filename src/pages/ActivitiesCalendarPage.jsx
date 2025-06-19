// src/pages/ActivitiesCalendarPage.jsx
import * as React from 'react';
import {
  Box,
  Typography,
  Grid,
  Stack,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import 'react-big-calendar/lib/css/react-big-calendar.css';

// וודא שהנתיב נכון לקובץ ה-JSON שלך
import importedEvents from './events.json';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const localizer = momentLocalizer(moment);

// --- Transform importedEvents for React Big Calendar ---
const transformedCalendarEvents = importedEvents.map((event, index) => {
  let startDate, endDate;
  const timeString = event.time.trim();

  // Remove trailing comma if present, and split by space for "Month Day-Day, Year"
  const parts = timeString.replace(/,$/, '').split(' ');

  const year = parts[parts.length - 1];

  if (parts[1].includes('-')) {
    // This is a date range like "9-16"
    const month = parts[0].replace('.', '');
    const [startDay, endDay] = parts[1].split('-');

    startDate = moment(`${month} ${startDay} ${year}`, 'MMM D, YYYY').toDate(); // corrected format
    endDate = moment(`${month} ${endDay} ${year}`, 'MMM D, YYYY').toDate();   // corrected format

  } else {
    // This is a single date or a simple "Month Day," format, assume single day
    const month = parts[0].replace('.', '');
    const day = parts[1].replace(',', '');
    startDate = moment(`${month} ${day} ${year}`, 'MMM D, YYYY').toDate();      // corrected format
    endDate = moment(`${month} ${day} ${year}`, 'MMM D, YYYY').endOf('day').toDate(); // Event ends at end of day
  }

  // Fallback if parsing fails for some reason
  if (!moment(startDate).isValid() || !moment(endDate).isValid()) {
      console.error(`Failed to parse dates for event: ${event.name}, time: ${event.time}`);
      // Provide fallback dates or skip the event
      startDate = new Date();
      endDate = new Date();
  }

  return {
    id: index,
    title: event.name + (event.location ? ` (${event.location})` : ''),
    start: startDate,
    end: endDate,
    description: event.description,
    link: event.link,
    originalTime: event.time,
    originalLocation: event.location,
  };
});
// --- End Transformation ---

const EventComponent = ({ event }) => (
  <Box>
    <strong>{event.title}</strong>
    {event.description && <p style={{ margin: '4px 0', fontSize: '0.9em' }}>{event.description}</p>}
    {event.link && (
      <a href={event.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8em', display: 'block', marginTop: '5px' }}>
        Learn More
      </a>
    )}
  </Box>
);

const ActivitiesCalendarPage = () => {
  const [open, setOpen] = React.useState(false);
  // State for controlling the calendar's current date view
  const [calendarDate, setCalendarDate] = React.useState(moment().toDate());
  // State for controlling the calendar's current view type (month, week, day, agenda)
  const [calendarView, setCalendarView] = React.useState('month');


  const handleClickOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // Define views based on screen size
  const calendarViews = isSmallScreen ? ['month', 'agenda'] : ['month', 'week', 'day', 'agenda'];
  // Define default view based on screen size
  const defaultCalendarView = isSmallScreen ? 'agenda' : 'month';


  // Set initial date for the calendar based on if events are present
  React.useEffect(() => {
    if (transformedCalendarEvents.length > 0) {
      // Find the first event that is in the future or current month
      const relevantEvent = transformedCalendarEvents.find(event => moment(event.start).isSameOrAfter(moment(), 'month'));
      if (relevantEvent) {
        setCalendarDate(moment(relevantEvent.start).startOf('month').toDate());
      } else {
        // If no future events, just set to the first event's month or current month
        setCalendarDate(moment(transformedCalendarEvents[0].start).startOf('month').toDate() || moment().toDate());
      }
    }
  }, []); // Run once on component mount


  return (
    <React.Fragment>
      {isSmallScreen ? (
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
        <Box sx={{ display: 'flex', justifyContent: 'center', mx: 5, my: 2, p: 2, borderRadius: "50px", backgroundColor: '#dedede' }}>
          <Grid container direction="row" sx={{ px: 3, width: "100%", justifyContent: { md: "space-around", sm: "center" }, alignItems: "center" }}>
            <Grid>
              <Stack spacing={0}>
                <Typography variant="h6" component="h1">
                  Upcoming Events Calendar
                </Typography>
                <Typography variant="h7" color="text.secondary">
                  Explore our schedule of workshops, conferences, and webinars.
                </Typography>
              </Stack>
            </Grid>
            <Grid>
              <Button variant="contained" endIcon={<CalendarMonthIcon />} onClick={handleClickOpen} sx={{ borderRadius: '20px', px: 4, py: 1.5 }}>
                Calendar
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}

      <Dialog
        open={open}
        slots={{ transition: Transition }}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ backgroundColor: theme.palette.primary.main, color: 'white', py: 2, px: 3 }}>
          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
            Upcoming Events Calendar
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
          <DialogContentText id="calendar-dialog-slide-description" component="div">
            {/* Adjusted Box height for better responsiveness */}
            <Box sx={{
                my: { xs: 2, sm: 3 },
                minHeight: { xs: '400px', sm: '500px' }, // Minimum height to avoid collapse
                height: { xs: 'calc(100vh - 180px)', sm: '600px', md: '700px' }, // Responsive height
                // Added overflow auto for smaller screens, in case content spills
                overflow: 'auto',
                '& .rbc-toolbar': { // Styling for calendar toolbar
                    flexDirection: { xs: 'column', sm: 'row' },
                    '.rbc-toolbar-label': {
                        fontSize: { xs: '1rem', sm: '1.2rem' },
                        mb: { xs: 1, sm: 0 },
                    },
                    '& button': {
                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                        px: { xs: 1, sm: 2 },
                        py: { xs: 0.5, sm: 1 },
                    }
                },
                '& .rbc-header': { // Smaller headers for days of week on small screens
                    fontSize: { xs: '0.7em', sm: '0.85em' },
                    pt: { xs: 0.5, sm: 0.8 },
                    pb: { xs: 0.5, sm: 0.8 }
                },
                '& .rbc-day-bg': { // Smaller day cells on small screens
                    fontSize: { xs: '0.75em', sm: 'inherit' }
                },
                '& .rbc-event': { // Smaller event text on small screens
                    fontSize: { xs: '0.7em', sm: '0.8em' },
                    p: { xs: 0.5, sm: 0.8 }
                }
            }}>
              <Calendar
                localizer={localizer}
                events={transformedCalendarEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '100%' }}
                // Controlled components for navigation
                date={calendarDate}
                onNavigate={newDate => setCalendarDate(newDate)}
                view={calendarView}
                onView={newView => setCalendarView(newView)}
                // Responsive views
                views={calendarViews}
                defaultView={defaultCalendarView} // Initial view when opening dialog

                components={{ event: EventComponent }}
                onSelectEvent={event => alert(`Event: ${event.title}\nDescription: ${event.description}${event.link ? `\nLink: ${event.link}` : ''}`)}
                // defaultDate={moment().toDate()} // This is now controlled by 'date' prop
              />
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: { xs: 1, sm: 2 } }}>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default ActivitiesCalendarPage;