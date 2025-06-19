// src/pages/PrivacyPolicyPage.jsx
import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';
import { HashLink } from 'react-router-hash-link';

const PrivacyPolicyPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Privacy Policy
      </Typography>
      <Typography variant="body1" paragraph>
        **Last Updated: June 15, 2025**
      </Typography>
      <Typography variant="body1" paragraph>
        This Privacy Policy describes how [Your Organization Name] ("we," "us," or "our") collects, uses, and discloses your personal information when you visit and use our website.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
        1. Information We Collect
      </Typography>
      {/* Changed Typography with paragraph prop to Box to allow ul nesting */}
      <Box sx={{ mt: 1, mb: 2 }}>
        <Typography variant="body1">
          We collect various types of information in connection with the services we provide, including:
        </Typography>
        <Box component="ul" sx={{ mt: 1, pl: 2 }}>
          <li><Typography variant="body1">**Personal Information:** Such as your name, email address, phone number, and any other information you voluntarily provide when contacting us or applying for grants.</Typography></li>
          <li><Typography variant="body1">**Usage Data:** Information about how you access and use the website, including your IP address, browser type, pages viewed, and the time and date of your visit.</Typography></li>
        </Box>
      </Box>

      <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
        2. How We Use Your Information
      </Typography>
      <Box sx={{ mt: 1, mb: 2 }}>
        <Typography variant="body1">
          We use the collected information for various purposes, including to:
        </Typography>
        <Box component="ul" sx={{ mt: 1, pl: 2 }}>
          <li><Typography variant="body1">Provide and maintain our website.</Typography></li>
          <li><Typography variant="body1">Process your grant applications and inquiries.</Typography></li>
          <li><Typography variant="body1">Communicate with you.</Typography></li>
          <li><Typography variant="body1">Improve our services and website functionality.</Typography></li>
          <li><Typography variant="body1">Comply with legal obligations.</Typography></li>
        </Box>
      </Box>

      <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
        3. Sharing Your Information
      </Typography>
      <Typography variant="body1" paragraph>
        We do not sell, trade, or otherwise transfer your personal information to outside parties except in specific circumstances outlined in our full policy (e.g., with your consent, for legal reasons).
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
        4. Your Data Protection Rights
      </Typography>
      <Typography variant="body1" paragraph>
        Depending on your location, you may have rights regarding your personal data, such as the right to access, correct, or delete your information.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
        5. Changes to This Privacy Policy
      </Typography>
      <Typography variant="body1" paragraph>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
        6. Contact Us
      </Typography>
      <Box sx={{ mt: 1, mb: 2 }}>
        <Typography variant="body1">
          If you have any questions about this Privacy Policy, please  <Link component={HashLink} to="/TC/#contact">Contact Us</Link>
      </Typography>

    </Box>
    </Container >
  );
};

export default PrivacyPolicyPage;