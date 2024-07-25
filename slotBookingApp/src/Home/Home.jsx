import HeroSlider from "../Components/HeroSlider/HeroSlider"
import NavBar from "../Components/NavBar/NavBar"
import {Box, Container, Stack} from '@mui/material'
import SearchHospital from "../Components/SearchHospital/SearchHospital"
import HeroService from "../Components/IconLayout/HeroService"
import Offers from "../Components/Section/Offers/Offers"
import Specialization from "../Components/Section/Specialization/Specialization"
import Specialist from "../Components/Section/Specialist/Specialist"
import PatientCaring from "../Components/Section/PatientCaring/PatientCaring"
import Blogs from "../Components/Section/Blogs/Blogs"
import OurFamilies from "../Components/Section/OurFamilies/OurFamilies"
import FAQs from "../Components/Section/FAQs/FAQs"
// import DownloadApp from "../Components/Section/DownloadApp/DownloadApp"
// import Footer from "../Components/Footer/Footer"

const Home = () => {
  return (
    <Box>
        <Box
          sx={{
            background:
              "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
          }}
          mb={4}
        >
       <NavBar/>
       <Container maxWidth='xl'>
         <HeroSlider/>
         <Stack 
          p={{ xs: 2.5, md: 8 }}
          mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
          position="relative"
          zIndex={99}
          bgcolor="#fff"
          borderRadius="15px"
          spacing={10}
          boxShadow="0 0 12px rgba(0,0,0,0.1)"
         >
         <SearchHospital/>
         <HeroService/>
         <Offers/>
         <Specialization/>
         <Specialist/>
         <PatientCaring/>
         <Blogs/>
         <OurFamilies/>
         <FAQs/>
         
         </Stack>
       </Container>
        </Box>
        
    </Box>
  )
}

export default Home