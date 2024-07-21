import banner from '../../../assets/our-families-banner.png'
import  { Container,Box, Grid, Typography } from '@mui/material'
const OurFamilies = () => {
  return (
    <Box pt={3} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
      <Container>
         <Grid container alignItems='center' spacing={{xs:2,md:10}}>
          <Grid item xs={12} md={6}>
          <Typography fontWeight={600} color='primary.main'>
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          </Typography>
          <Typography variant='h2'>
            Our Families
          </Typography>
          <Typography lineHeight={1.9} color='#77829D'>
          We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.
         </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
           <Box
              component='img'
              src={banner}
              width={1}
              height='auto'
           />
          </Grid>
         </Grid>
      </Container>
    </Box>
  )
}

export default OurFamilies