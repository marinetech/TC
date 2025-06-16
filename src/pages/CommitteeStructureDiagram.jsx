import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';

const CommitteeStructureDiagram = ({ data }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));  

    const mainCommittee = Object.keys(data.committee_structure)[0];
    const subCommittees = data.committee_structure[mainCommittee];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 4, textAlign: 'center', p: 2, border: '1px solid #e0e0e0', borderRadius: 2, backgroundColor: '#f5f5f5', }}>
            {/* Main Committee */}
            <Card sx={{ mb: 3, minWidth: isSmallScreen ? '90%' : '50%', backgroundColor: theme.palette.primary.main, color: 'white', boxShadow: 3, }}>
                <CardContent>
                    <Typography variant={isSmallScreen ? "h6" : "h5"} component="h2">
                        {mainCommittee}
                    </Typography>
                </CardContent>
            </Card>

            {/* Connective Line (optional, for visual flow) */}
            <Box sx={{ width: '2px', height: '30px', backgroundColor: theme.palette.primary.dark, my: 0, }} />

            {/* Sub-Committees */}
            <Grid container spacing={isSmallScreen ? 1 : 3} justifyContent="center" sx={{ width: '100%' }} >
                {Object.entries(subCommittees).map(([subCommitteeName, topics], index) => (
                    <Grid item xs={12} sm={6} md={4} key={subCommitteeName}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: theme.palette.info.light, boxShadow: 2, }}>
                            <CardContent>
                                <Typography variant={isSmallScreen ? "subtitle1" : "h6"} component="h3" gutterBottom>
                                    {subCommitteeName}
                                </Typography>
                                <Box sx={{ mt: 1, textAlign: 'left' }}>
                                    {topics.map((topic, topicIndex) => (
                                        <Typography variant="body2" key={topicIndex} sx={{ mb: 0.5 }}>
                                            • {topic}
                                        </Typography>
                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CommitteeStructureDiagram;