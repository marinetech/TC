// src/pages/ActivitiesPage.jsx
import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, List, ListItem, ListItemText, Divider } from '@mui/material';

// Import for React Big Calendar
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment'; // Make sure moment is imported

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

const ActivitiesCalendarPage = () => {
  // Optional: Function to customize event display in the calendar
  const EventComponent = ({ event }) => (
    <Box>
      <strong>{event.title}</strong>
      {event.description && <p>{event.description}</p>}
      {event.type && <small>({event.type})</small>}
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Section: Our Projects */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Our Projects & Initiatives
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 4 }}>
          Discover the impactful research and community-driven initiatives supported by our organization.
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} key={project.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Status: {project.status}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    **Description:** {project.description}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    **Goals:**
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mt: 0 }}>
                    {project.goals.map((goal, index) => (
                      <li key={index}>
                        <Typography variant="body1">{goal}</Typography>
                      </li>
                    ))}
                  </Box>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    **Outcomes:** {project.outcomes}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Section: Events Calendar (Updated to React Big Calendar) */}
      <Box sx={{ my: 6, minHeight: '600px' }}> {/* minHeight is important for calendar visibility */}
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Upcoming Events Calendar
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 4 }}>
          Explore our schedule of workshops, conferences, and webinars.
        </Typography>

        <Calendar
          localizer={localizer}
          events={calendarEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }} // Set a fixed height for the calendar
          defaultView="month" // Default view when the calendar loads
          views={['month', 'week', 'day', 'agenda']} // Available views
          components={{
            event: EventComponent, // Use custom component for event display
          }}
          // Optional: Event click handler
          onSelectEvent={event => alert(`Event: ${event.title}\nDescription: ${event.description}`)}
          // Optional: Navigate to current date on load
          defaultDate={moment().toDate()}
        />
      </Box>
    </Container>
  );
};

export default ActivitiesCalendarPage;