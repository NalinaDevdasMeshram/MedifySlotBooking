 import FooterLink from "./FooterLink"
import  { Box, Container, Grid, Stack, Typography } from '@mui/material'
import logo from '../../assets/logo.png'
import fb from '../../assets/fb.png'
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtubepng.png'

import printers from '../../assets/printers.png'
const Footer = () => {
  return (
    <Box bgcolor="primary.secondary" pb={3} pt={6}>
       <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4.5}>
            <Stack
             alignItems='flex-start'
             justifyContent='space-between'
             height={1}
            >
              <Box src={logo} height={36} alt='Medify' component='img' mb={2}/>
              <Stack direction='row' spacing={1.5}>
                <Box component='img' src={fb} height={36}/>
                <Box component='img' src={twitter} height={36}/>
                <Box component='img' src={youtube} height={36}/>
                <Box component='img' src={printers} height={36}/>
              </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} md={2.5}>
              <Stack spacing={2}>
                <FooterLink>About us </FooterLink>
                <FooterLink>Our Pricing</FooterLink>
                <FooterLink>Our Gallery</FooterLink>
                <FooterLink>Appoinment </FooterLink>
                <FooterLink>Privacy policy </FooterLink>
              </Stack>
              </Grid>
            <Grid item xs={12} md={2.5}>
              <Stack spacing={2}>
                <FooterLink>Orthology</FooterLink>
                <FooterLink>Neurology</FooterLink>
                <FooterLink>Dental Care</FooterLink>
                <FooterLink> Opthalmology</FooterLink>
                <FooterLink>Cardiology</FooterLink>
              </Stack>
              </Grid>
            <Grid item xs={12} md={2.5}>
              <Stack spacing={2}>
                <FooterLink>About us </FooterLink>
                <FooterLink>Our Pricing</FooterLink>
                <FooterLink>Our Gallery</FooterLink>
                <FooterLink>Appoinment </FooterLink>
                <FooterLink>Privacy policy </FooterLink>
              </Stack>

            </Grid>

          </Grid>
      
       <Typography 
       fontWeight={400} 
       color='#fff' 
       fontSize={15} 
       pt={3} 
       mt={5}
       borderTop="1px solid rgba(255,255,255,0.1)"
       >
        Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
       </Typography>
       </Container>
    </Box>
  )
}

export default Footer