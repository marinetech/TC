import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';

const CommitteeStructureDiagram = ({ data }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    // לוודא ש-data.committee_structure קיים ולא ריק
    if (!data || !data.committee_structure || Object.keys(data.committee_structure).length === 0) {
        return <Typography variant="h6" color="error">No committee data available.</Typography>;
    }

    const mainCommitteeName = Object.keys(data.committee_structure)[0];
    const subCommitteesData = data.committee_structure[mainCommitteeName];

    // נגדיר כאן את גודל העמודות לתת-ועדות.
    // 3 עמודות = md={4} (12 / 3 = 4)
    // 4 עמודות = md={3} (12 / 4 = 3)
    // נבחר ב-md={4} כדי להציג 3 עמודות כפי שהיה במקור ובצילום
    const subCommitteeGridSize = 4; // for 3 columns on medium screens and up

    return (
        <Container maxWidth="lg" sx={{ my: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, border: '1px solid #e0e0e0', borderRadius: 2, backgroundColor: '#f5f5f5', }}>

                {/* Main Committee - always takes full width */}
                <Grid container  spacing={isSmallScreen ? 2 : 4}  justifyContent="center" sx={{ width: '100%', mb: isSmallScreen ? 2 : 4 }}>
                    <Grid item size={12}>
                        <Card sx={{
                            backgroundColor: theme.palette.primary.main,
                            color: 'white',
                            boxShadow: 3,
                            p: isSmallScreen ? 1 : 2,
                            textAlign: 'center',
                            minHeight: isSmallScreen ? '50px' : '70px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <CardContent sx={{ '&:last-child': { pb: 2 } }}>
                                <Typography variant={isSmallScreen ? "h6" : "h5"} component="h2">
                                    {mainCommitteeName}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {Object.entries(subCommitteesData).map(([subCommitteeName, topics], index) => (
                        <Grid item size={4} sm={6} md={subCommitteeGridSize} key={subCommitteeName}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                                {/* Card for Sub-Committee Name */}
                                <Card sx={{
                                    backgroundColor: theme.palette.info.main,
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
                                        <Typography variant={isSmallScreen ? "subtitle1" : "h6"} component="h3" sx={{ mb: 0 }}>
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
                                                    backgroundColor: theme.palette.info.light,
                                                    boxShadow: 1,
                                                    width: '90%', 
                                                    textAlign: 'center',
                                                    minHeight: '40px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    // mb: topicIndex < topics.length - 1 ? 0.5 : 0 // Margin between topics
                                                }}>
                                                    <CardContent sx={{ '&:last-child': { pb: 1, pt: 1 } }}>
                                                        <Typography variant="body2">
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
            </Box>
        </Container >
    );
};

export default CommitteeStructureDiagram;