import React from 'react';
import {
    Box,
    Typography,
    Container,
    Grid,
    TextField,
    Button,
    Card,
    CardContent,
    Link,
    Snackbar,
    Alert
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactPage = () => {
    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // כאן תוכל להוסיף לוגיקה לשליחת הטופס (לדוגמה, עם Fetch API ל-Backend)
        console.log('Form sent!');
        setOpenSnackbar(true); // הצגת הודעת הצלחה

        event.target.reset();
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>

            <Typography variant="h2" component="h1" align="center" gutterBottom>
                Contact us
            </Typography>

            <Typography variant="body1" align="center" sx={{ mb: 4 }}>
                We will be happy to assist you with any questions, requests or feedback.
            </Typography>

            <Grid container spacing={4}>

                {/* פרטי יצירת קשר */}
                <Grid item xs={12} md={5}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Contact information
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <EmailIcon color="primary" sx={{ mr: 1 }} />
                                <Typography variant="body1">
                                    <Link href="mailto:info@grantorg.org" aria-label="Send an email to the organization">
                                        info@grantorg.org
                                    </Link>
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <PhoneIcon color="primary" sx={{ mr: 1 }} />
                                <Typography variant="body1">
                                    <Link href="tel:+972-50-1234567" aria-label="Call the organization">
                                        +972 50-1234567
                                    </Link>
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                                <LocationOnIcon color="primary" sx={{ mr: 1, mt: 0.5 }} />
                                <Typography variant="body1">
                                    199 Abba Khoushy Ave.Mount Carmel, Haifa
                                </Typography>
                            </Box>

                            <Typography variant="h6" component="h3" gutterBottom>
                                Follow us
                            </Typography>
                            <Box>
                                <Link href="https://facebook.com/your-org" target="_blank" rel="noopener noreferrer" aria-label="פייסבוק הארגון" sx={{ mr: 1 }}>
                                    <FacebookIcon color="primary" fontSize="large" />
                                </Link>
                                <Link href="https://twitter.com/your-org" target="_blank" rel="noopener noreferrer" aria-label="טוויטר הארגון" sx={{ mr: 1 }}>
                                    <TwitterIcon color="primary" fontSize="large" />
                                </Link>
                                <Link href="https://linkedin.com/company/your-org" target="_blank" rel="noopener noreferrer" aria-label="לינקדאין הארגון">
                                    <LinkedInIcon color="primary" fontSize="large" />
                                </Link>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* טופס יצירת קשר */}
                <Grid item xs={12} md={7}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Send as a message
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField margin="normal" required fullWidth id="name" label="Full name" name="name" autoComplete="name" autoFocus aria-required="true" />
                                <TextField margin="normal" required fullWidth id="email" label="Email address" name="email" autoComplete="email" type="email" aria-required="true" />
                                <TextField margin="normal" required fullWidth id="subject" label="topic" name="subject" aria-required="true" />
                                <TextField margin="normal" required fullWidth name="message" label="message" id="message" multiline rows={4} aria-required="true" />
                                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                    Send message
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* הודעת אישור (Snackbar) */}
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }} aria-live="polite">
                    Your message has been sent successfully! We will get back to you as soon as possible.
                </Alert>
            </Snackbar>

        </Container>
    );
};

export default ContactPage;