import React from 'react';
import {
    Box,
    Typography,
    Container,
    Grid,
    Button,
    Card,
    CardContent,
    Link,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const ContactPage = () => {
    return (
        <Container maxWidth="md" sx={{ py: 4 }} id="contact">

            <Typography variant="h2" component="h1" align="center" gutterBottom>
                Contact
            </Typography>

            <Typography variant="h3" align="center" sx={{
                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                mb: 1,
                color: 'black',
            }}>
                Has an event related to TC Metrology? Looking for funding? <br />
                Please fill your inquiry in this <Link href="https://docs.google.com/forms/d/e/1FAIpQLScPWz4l45XrDKrXaAfHH8je879FIZPX24Kt_bIsQhMA4jNGew/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">Form</Link>.
            </Typography>



            {/*
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScPWz4l45XrDKrXaAfHH8je879FIZPX24Kt_bIsQhMA4jNGew/viewform?embedded=true" width="640" height="1092" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            */}

            <Grid container spacing={4} justifyContent="center">

                {/* Contact Information */}
                <Grid item xs={12} md={8}>  <Typography variant="h6" align="left" sx={{
                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                    mt: 4, mb: 1
                }}>
                    You can also contact us directly:
                </Typography>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Typography variant="h5" component="h2" gutterBottom sx={{
                                fontSize: { xs: '1.2rem', sm: '1.25rem', md: '1.5rem' },

                            }}>
                                Direct Contacts
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <EmailIcon color="primary" sx={{ mr: 1 }} />
                                <Typography variant="body1">
                                    <Typography component="span" fontWeight="bold">Roee Diamant</Typography>, University of Haifa, {' '}
                                    <Link href="mailto:roee.d@univ.haifa.ac.il" aria-label="Send an email to Roee Diamant">
                                        roee.d@univ.haifa.ac.il
                                    </Link>
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <EmailIcon color="primary" sx={{ mr: 1 }} />
                                <Typography variant="body1">
                                    <Typography component="span" fontWeight="bold">Yang Yang</Typography>, Chinese Academy of Sciences (CAS) in Sanya, China, {' '}
                                    <Link href="mailto:yangyang@idsse.ac.cn" aria-label="Send an email to Yang Yang">
                                        yangyang@idsse.ac.cn
                                    </Link>
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ContactPage;