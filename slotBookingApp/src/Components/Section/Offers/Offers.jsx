
import { Box, Container } from "@mui/material"
import 'swiper/css';
import {Pagination} from 'swiper/modules'
import img1 from '../../../assets/Group 10.png'
import img2 from '../../../assets/Group 11.png'
import {Swiper, SwiperSlide } from "swiper/react"
const Offers = () => {
  return (
    <Box py={6}>
        <Container maxWidth='xl'>
         <Swiper 
           slidesPerView={1}
           spaceBetween={30}
           modules={[Pagination]}
           pagination={{
               clickable: true
           }}
           breakpoints={
               {
                   767: {
                       slidesPerView: 3
                   }
               }
           }
         >
         <SwiperSlide>
            <Box component={'img'} src={img1}/>
         </SwiperSlide>
         <SwiperSlide>
            <Box component={'img'} src={img2}/>
         </SwiperSlide>
         <SwiperSlide>
            <Box component={'img'} src={img1}/>
         </SwiperSlide>
         <SwiperSlide>
            <Box component={'img'} src={img2}/>
         </SwiperSlide>
         <SwiperSlide>
            <Box component={'img'} src={img1}/>
         </SwiperSlide>
         <SwiperSlide>
            <Box component={'img'} src={img2}/>
         </SwiperSlide>
         </Swiper>
        </Container>

    </Box>
  )
}

export default Offers