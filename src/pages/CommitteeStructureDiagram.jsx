import React from 'react';
import { Box, CardMedia, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import wave_img from "../assets/images/wave_img.png";

const CommitteeStructureDiagram = ({ data }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    if (!data || !data.committee_structure || Object.keys(data.committee_structure).length === 0) {
        return <Typography variant="h6" color="error">No committee data available.</Typography>;
    }

    const mainCommitteeName = Object.keys(data.committee_structure)[0];
    const subCommitteesData = data.committee_structure[mainCommitteeName];
    const subCommitteeGridSize = 4; // for 3 columns on medium screens and up

    return (
        <Container maxWidth="lg" sx={{ backgroundColor: "#dedede", py: { sm: 4, xs: 1 } }} id="committee_structure">


            {/* Main Committee - always takes full width */}
            <Grid container spacing={isSmallScreen ? 0.5 : 4} justifyContent="center" sx={{ width: '100%', mb: isSmallScreen ? 2 : 4 }}>



                <Grid justifyContent="center" item size={12}
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',mb:{xs: 1 ,sm: 4,md:0,lg:0} }}>

                    <CardMedia component="img" image={wave_img} alt="Organization Logo" sx={{
                        height: { xs: 15, sm: 25, md: 30, lg: 40 }, width: 'auto', maxWidth: '100%', mr: 2,
                    }} />

                    <Typography variant="h5" component="h2" sx={{
                        fontSize: {
                            xs: '1.2rem',
                            sm: '1.5rem',
                            md: '1.8rem',
                            lg: '2.125rem'
                        },

                        color: '#072034', fontWeight: 'bold'
                    }}>
                        {mainCommitteeName} {/* "Technical Committee on Marine Metrology" */}
                    </Typography>
                </Grid>



                {Object.entries(subCommitteesData).map(([subCommitteeName, topics], index) => (
                    <Grid item size={4} sm={6} md={subCommitteeGridSize} key={subCommitteeName}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                            {/* Card for Sub-Committee Name */}
                            <Card sx={{
                                backgroundColor: "#072034",
                                color: 'white',
                                boxShadow: 2,
                                width: '100%',
                                textAlign: 'center',
                                minHeight: isSmallScreen ? '45px' : '60px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: isSmallScreen ? 1 : 2 // Margin bottom to separate from topics
                            }}>
                                <CardContent sx={{ '&:last-child': { pb: 2 } }}>

                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: '0.8rem',
                                                sm: '0.9rem',
                                                md: '1.0rem',
                                                lg: '1.125rem'
                                            },
                                            mb: 0, fontWeight: 'bold', whiteSpace: 'normal', overflowWrap: 'break-word', hyphens: 'auto',
                                        }}
                                    >
                                        {subCommitteeName}
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* Topics - each in its own Card, vertically stacked */}
                            <Grid container spacing={1} direction="column" alignItems="center" sx={{ width: '100%' }}>
                                {topics.length > 0 ? (
                                    topics.map((topic, topicIndex) => (
                                        <Grid item key={topicIndex} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                            <Card sx={{
                                                backgroundColor: "#6fb9e6",
                                                boxShadow: 1,
                                                width: '100%',
                                                textAlign: 'center',
                                                minHeight: '40px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                // mb: topicIndex < topics.length - 1 ? 0.5 : 0 // Margin between topics
                                            }}>
                                                <CardContent sx={{ '&:last-child': { p: { xs: 0.2, sm: 1 }, } }}>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            fontSize: {
                                                                xs: '0.6rem',
                                                                sm: '0.9rem',
                                                                md: '1.0rem',
                                                                lg: '1.125rem'
                                                            }
                                                        }}>
                                                        {topic}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))
                                ) : (
                                    <Grid item sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                        <Typography variant="body2" fontStyle="italic" sx={{ color: theme.palette.text.secondary, mt: 1 }}>
                                            No topics
                                        </Typography>
                                    </Grid>
                                )}
                            </Grid>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container >
    );
};

export default CommitteeStructureDiagram;