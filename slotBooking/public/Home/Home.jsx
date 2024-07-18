import {Box, Container,Stack} from '@mui/material'
import Header from '../../src/components/Header/Header'
import HeroSection from '../../src/components/HeroSection/HeroSection'
// import SearchBar from '../../src/components/SearchBar/SearchBar'
import SearchHospital from '../../src/components/SearchHospital/SearchHospital'
import HeroService from '../../src/components/IconLayout/HeroService'
import Footer from '../../src/components/Footer/Footer'

const Home = () => {
  return (
    <Box>
     <Box sx={{background: "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",}} mb={4}>
     <Header/>
     <Container maxWidth='xl'>
     <HeroSection/>
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
    <Footer/>
    </Stack>
    </Container>
      
     </Box>
    </Box>
  )
}

export default Home