// src/pages/ActivitiesPage.jsx
import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, List, ListItem, ListItemText, Divider } from '@mui/material';

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
  },
  {
    id: 2,
    title: "Sustainable Agriculture Innovation Fund",
    description: "A grant program supporting research into sustainable farming practices, drought-resistant crops, and eco-friendly pest control methods to enhance food security and environmental protection.",
    goals: [
      "Fund 15 new research projects in sustainable agriculture.",
      "Facilitate knowledge exchange between researchers and farmers.",
      "Promote the adoption of sustainable practices in rural communities."
    ],
    outcomes: "Successfully funded 18 projects, leading to the development of new crop varieties and a 15% reduction in water usage in pilot farms.",
    status: "Ongoing (Launched 2024)"
  },
  {
    id: 3,
    title: "Youth STEM Mentorship Program",
    description: "An initiative to connect high school students with leading researchers for mentorship, encouraging interest and participation in Science, Technology, Engineering, and Mathematics fields.",
    goals: [
      "Match 100 students with mentors annually.",
      "Organize quarterly hands-on science workshops.",
      "Increase female participation in STEM disciplines."
    ],
    outcomes: "Over 200 students have participated, with a significant increase in STEM university applications from program alumni, especially among underrepresented groups.",
    status: "Ongoing (Launched 2022)"
  }
];

const events = [
  {
    id: 1,
    date: "July 20, 2025",
    time: "10:00 AM - 12:00 PM IDT",
    title: "Webinar: Grant Application Best Practices",
    description: "A comprehensive guide for researchers on crafting compelling grant proposals. Q&A session included.",
    type: "Webinar"
  },
  {
    id: 2,
    date: "August 5-7, 2025",
    time: "All Day",
    title: "Annual Research Conference: 'Science Beyond Borders'",
    description: "Our flagship event featuring keynote speakers, poster sessions, and networking opportunities across various scientific disciplines. Held at Tel Aviv Convention Center.",
    type: "Conference"
  },
  {
    id: 3,
    date: "September 1, 2025",
    time: "3:00 PM - 5:00 PM IDT",
    title: "Workshop: Data Visualization for Researchers",
    description: "Hands-on workshop focusing on effective data visualization techniques using modern tools. Limited spots available.",
    type: "Workshop"
  },
  {
    id: 4,
    date: "October 10, 2025",
    time: "11:00 AM - 1:00 PM IDT",
    title: "Online Meetup: Future of Quantum Computing Research",
    description: "An informal discussion and networking event for researchers interested in the latest advancements in quantum computing.",
    type: "Meeting"
  }
];
// --- End Static Data ---

const ActivitiesPage = () => {
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

      {/* Section: Upcoming Events Calendar */}
      <Box sx={{ my: 6 }}>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Events Calendar
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 4 }}>
          Join us for our upcoming workshops, conferences, and meetings.
        </Typography>

        <List sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: 2, overflow: 'hidden' }}>
          {events.map((event, index) => (
            <React.Fragment key={event.id}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={
                    <Typography variant="h6" component="h3">
                      {event.title}
                    </Typography>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {event.date} - {event.time}
                      </Typography>
                      {" — "}
                      <Typography component="span" variant="body2" color="text.secondary">
                        {event.description}
                      </Typography>
                      <Typography component="span" variant="body2" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
                        Type: {event.type}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              {index < events.length - 1 && <Divider component="li" />} {/* Add divider between items */}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default ActivitiesPage;