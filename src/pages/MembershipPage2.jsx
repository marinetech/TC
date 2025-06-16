import React from 'react';
import {
    Box,
    Typography,
    Container,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Link
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; // Using a relevant icon

const MembershipPage = () => {
    return (
        <Container maxWidth="md" sx={{ py: 4 }}>

            <Typography variant="h2" component="h1" align="center" gutterBottom>
                Membership
            </Typography>

            <Typography variant="body1" align="center" sx={{ mb: 4 }}>
                The Marine Metrology TC is always looking for volunteers. <Link href="/contact" aria-label="Contact us for membership opportunities">Contact us</Link> if you're interested in:
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <List sx={{ maxWidth: 600 }}> {/* Constrain list width for better readability */}
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircleOutlineIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Organizing events" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircleOutlineIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Developing sensors for marine applications" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircleOutlineIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Standards and protocols for oceanic measurements and protocols for QA/QC" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircleOutlineIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Metrology in extreme marine environments" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircleOutlineIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Instrumentation design and testing for marine applications" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircleOutlineIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Signal processing for marine metrology" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircleOutlineIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Standards for sensor calibration" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircleOutlineIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="AI-driven solutions for processing from marine metrology sensors" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircleOutlineIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Error correction and uncertainty analysis" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircleOutlineIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Sensor synchronization techniques" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircleOutlineIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Dynamic and static sensor testing" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircleOutlineIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Long-term stability of subsea sensors" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircleOutlineIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Platforms for marine metrology" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CheckCircleOutlineIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Scientific applications for marine metrology" />
                    </ListItem>
                </List>
            </Box>
        </Container>
    );
};

export default MembershipPage;