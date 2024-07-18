
import {Container, Stack, IconButton, Button,useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from '../../assets/logo.png';
import styles from './Header.module.css';
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {Link }from 'react-router-dom'
import { useState} from 'react';

const Header = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const[menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
        <Box p={1} bgcolor='primary.main'>
          <Typography  textAlign="center"
          fontSize={{ md: 12, xs: 10 }}
          color="#ffff"
          fontWeight={500}
          mx="auto">
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
          </Typography>
          </Box>
          <Box>
           <Container maxWidth='xl'>
            <Stack direction='row' spacing={2} alignItems='center' justifyContent='space-between' py={2}>
             <img src={logo} alt='logo' height={28}/>
             <Stack direction={{ xs: "column", md: "row" }}
            spacing={4}
            alignItems={{ xs: "flex-start", md: "center" }}
            className={[styles.navlinks, menuOpen && styles.active]}
            pt={{ xs: 12, md: 1 }}
            pb={{ xs: 4, md: 1 }}
            px={{ xs: 4, md: 0 }}>
              <Link to ="">Find Doctor</Link>
              <Link to ="/search">Hospitals</Link>
              <Link to ="">Mediciens</Link>
              <Link to ="">Surgeries</Link>
              <Link to ="">Software for provider</Link>
              <Link to ="">Facilities</Link>
              <Link to ="/bookings">
              <Button variant='contained' disableElevation size="small">My Booking</Button>
              </Link>
              {isMobile && (
              <IconButton
                onClick={() => setMenuOpen(false)}
                sx={{
                  position:"absolute",
                  top:0,
                  right:32,
                  color:"#fff",
                }}
              >
                <CloseIcon />
              </IconButton>
            )}
             </Stack>
             {isMobile && (
            <IconButton onClick={() => setMenuOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
            </Stack>
           </Container>
        </Box>
    </header>
  )
}

export default Header