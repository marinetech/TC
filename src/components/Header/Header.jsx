// src/components/Header/Header.jsx
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {
  AppBar,
  Toolbar,
  CardMedia,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Link
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import icesLogo from "../../assets/images/icesLogo.png";

const navLinks = [
  { "button_name": "Home", "to": "/TC/#home", "aria_label": "Navigate to Home section." },
  { "button_name": "committee", "to": "/TC/#committee_structure", "aria_label": "Navigate to committee-structure section." },
  { "button_name": "About US", "to": "/TC/#About_US", "aria_label": "Navigate to About_US section." },
  { "button_name": "Activities", "to": "/TC/#activities", "aria_label": "Navigate to Activities and Initiatives section." },
  { "button_name": "Membership", "to": "/TC/#membership", "aria_label": "Navigate to Membership section." },
  { "button_name": "Contact", "to": "/TC/#contact", "aria_label": "Navigate to Contact section." },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => { setMobileOpen(!mobileOpen); };

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({ top: elementPosition, left: 0, behavior: "smooth" });
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', p: 2 }}>
        <IconButton color="inherit" aria-label="Close navigation menu" onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.to} disablePadding>
            <ListItemButton
              component={HashLink}
              to={link.to}
              aria-label={link.aria_label}
              sx={{ textAlign: 'center' }}
              // אופציונלי: הגדרת offset כדי שהכותרת לא תוסתר על ידי ה-AppBar
              scroll={el => scrollWithOffset(el, 64)} // 64px כדוגמה לגובה AppBar
            >
              <ListItemText primary={link.button_name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky" // שנה ל-sticky כדי שהראש יישאר בראש העמוד במהלך גלילה
      sx={{
        backgroundColor: 'white',
        color: 'black',
        borderTop: '20px solid black',
        borderRadius: 0,
        boxShadow: 'none',
        '& .MuiButton-root': {
          color: 'black',
        },
        '& .MuiTypography-root': {
          color: 'black',
        },
        '& .MuiIconButton-root': {
          color: 'black',
        }
      }}
    >
      <Toolbar sx={{ flexDirection: 'row-reverse' }}>
        <IconButton color="inherit" aria-label="Open navigation menu" onClick={handleDrawerToggle} sx={{ display: { xs: 'block', md: 'none' }, ml: 'auto' }}>
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: { xs: 'none', md: 'block' }, ml: 'auto' }}>
          {navLinks.map((link) => (
            <Button
              key={link.to}
              color="inherit"
              component={HashLink} // השתמש ב-HashLink כאן
              to={link.to}
              aria-label={link.aria_label}
              // אופציונלי: הגדרת offset
              scroll={el => scrollWithOffset(el, 64)}
            >
              {link.button_name}
            </Button>
          ))}
        </Box>

        <Link
          component={HashLink} // השתמש ב-HashLink גם עבור הלוגו
          to="/TC/#home" // מפנה חזרה לראש העמוד
          color="inherit"
          underline="none"
          aria-label="Organization home page"
          sx={{ display: 'flex', alignItems: 'center', mr: 'auto', color: 'black' }}
          scroll={el => scrollWithOffset(el, 0)} // גלילה לראש הדף ללא offset
        >
          <CardMedia component="img" image={icesLogo} alt="Organization Logo" sx={{ height: 40, width: 'auto', maxWidth: '100%', mr: 1 }} />
        </Link>
      </Toolbar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true, }}
          anchor="right"
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, backgroundColor: 'white', color: 'black', },
            '& .MuiListItemText-primary': { color: 'black' },
            '& .MuiIconButton-root': { color: 'black', }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </AppBar>
  );
};

export default Header;