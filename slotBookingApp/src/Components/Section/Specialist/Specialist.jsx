import 'swiper/css';
import { Box, Typography } from '@mui/material';
import {SwiperSlide, Swiper} from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import SpecialistCard from './SpecialistCard';
import img5 from '../../../assets/ahmad-stevens.png'
import img2 from '../../../assets/ahmad.png'
import img4 from '../../../assets/ankur.png'
import img3 from '../../../assets/heena.png'
import img1 from '../../../assets/lesley.png'
const Specialist = () => {
    const data = [
        { img: img1, title: 'Dr. Lesley Hull', designation: 'Medicine' },
        { img: img2, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
        { img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
        { img: img4, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
        { img: img5, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' },
        { img: img1, title: 'Dr. Lesley Hull', designation: 'Medicine' },
        { img: img2, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
        { img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
        { img: img4, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
        { img: img5, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' }
    ]
  return (
    <Box py={4} id="find-doctors">
    <Typography variant="h2" textAlign='center' mb={3} px={2}>
        Our Medical Specialist
    </Typography>
    <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        pagination={{
            clickable: true
        }}
        breakpoints={
            {
                767: {
                    slidesPerView: 4
                }
            }
        }
    >
        {data.map((doc, index) => (
            <SwiperSlide key={index}>
                <SpecialistCard
                    img={doc.img}
                    title={doc.title}
                    designation={doc.designation} />
            </SwiperSlide>
        ))}
    </Swiper>
</Box>
  )
}

export default Specialist