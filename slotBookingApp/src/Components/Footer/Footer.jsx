import {Box, Container, Grid, Stack, Typography} from "@mui/material"
import FooterLink from "./FooterLink"
import logo from '../../assets/logo.png'
import fb from '../../assets/fb.png'
import twitter from '../../assets/twitter.png'
import pinterest from '../../assets/pinterest.png'
import youtube from '../../assets/yt.png'

const Footer = () => {
  return (
    <Box bgcolor="primary.secondary" pb={3} pt={6}>
     <Container maxWidth='xl'>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4.5}>
          <Stack
           justifyContent='space-between'
           alignItems='flex-start'
           height={1}
          >
          <Box src={logo} component='img' alt="medify" mb={12} height={36}/>
          <Stack direction='row' spacing={1.5}>
            <Box component='img' src={fb} height={36}/>
            <Box component='img' src={twitter} height={36}/>
            <Box component='img' src={youtube} height={36}/>
            <Box component='img' src={pinterest} height={36}/>
            </Stack>
          </Stack>
          </Grid>
          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
               <FooterLink>About Us</FooterLink>
               <FooterLink>Our Pricing</FooterLink>
               <FooterLink>Our Gallery </FooterLink>
               <FooterLink>Appointment</FooterLink>
               <FooterLink>Privacy Policy</FooterLink>
            </Stack>
          </Grid>
          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
               <FooterLink>About Us</FooterLink>
               <FooterLink>Our Pricing</FooterLink>
               <FooterLink>Our Gallery </FooterLink>
               <FooterLink>Appointment</FooterLink>
               <FooterLink>Privacy Policy</FooterLink>
            </Stack>
          </Grid>
          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
               <FooterLink>About Us</FooterLink>
               <FooterLink>Our Pricing</FooterLink>
               <FooterLink>Our Gallery </FooterLink>
               <FooterLink>Appointment</FooterLink>
               <FooterLink>Privacy Policy</FooterLink>
            </Stack>
          </Grid>
        </Grid>
         
      <Typography
      fontWeight={300}
      color="#fff"
      fontSize={14}
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