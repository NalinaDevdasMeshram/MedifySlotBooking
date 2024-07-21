import { Box, Button, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import {Swiper, SwiperSlide } from 'swiper/react'
import img from '../../assets/hero_image.png'

const HeroSlider = () => {
  return (
    <Swiper>
        <SwiperSlide>
         <Stack direction={{ xs: 'column', md: "row" }} spacing={6} alignItems="center" pt={2}>
            <Box>
            <Typography variant='h3' component='h1'> Skip the travel! Find Online</Typography>
            <Typography variant='h1' component='h1' mb={1}>Medical <span style={{ color: '#2AA7FF' }}>Centers</span>
            </Typography>
            <Typography color='#5C6169' fontSize={{mb:20}} mb={3}>
              Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
            </Typography>
            <Link to='/Search'>
                <Button variant='contained' size="large" disableElevation>
                    Find Centers
                </Button>
             </Link>
            </Box>
            <Box
             component={'img'}
             src={img}
             width={{ xs: 1, md: "50%" }}
            />
         </Stack>
        </SwiperSlide>
    </Swiper>
  )
}

export default HeroSlider