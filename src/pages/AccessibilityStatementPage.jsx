// src/pages/AccessibilityStatementPage.jsx
import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material'; // <--- Import Link here
import { HashLink } from 'react-router-hash-link';

const AccessibilityStatementPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Accessibility Statement
      </Typography>
      <Typography variant="body1" paragraph>
        Our organization is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Measures to support accessibility
      </Typography>
      {/* Changed Typography with paragraph prop to Box to allow ul nesting */}
      <Box sx={{ mt: 1, mb: 2 }}>
        <Typography variant="body1">
          The Grant Organization takes the following measures to ensure accessibility of its website:
        </Typography>
        <Box component="ul" sx={{ mt: 1, pl: 2 }}>
          <li><Typography variant="body1">Include accessibility as part of our mission statement.</Typography></li>
          <li><Typography variant="body1">Include accessibility in our internal policies.</Typography></li>
          <li><Typography variant="body1">Provide continual accessibility training for our staff.</Typography></li>
          <li><Typography variant="body1">Employ formal accessibility quality assurance methods.</Typography></li>
        </Box>
      </Box>
      <Typography variant="h6" component="h2" gutterBottom>
        Feedback
      </Typography>
      <Typography variant="body1" paragraph>
        We welcome your feedback on the accessibility of the Grant Organization website. Please let us know if you encounter accessibility barriers:
      </Typography>
      <Typography variant="body1">
        <Link component={HashLink} to="/TC/#contact">Contact Us</Link>
      </Typography>
    </Container>
  );
};

export default AccessibilityStatementPage;