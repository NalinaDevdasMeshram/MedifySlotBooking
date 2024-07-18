import { useMemo } from "react"
import DoctorIcon from '../../assets/Doctor.png'
import  PharmarcyIcon  from '../../assets/Drugstore.png'
import HospitalIcon  from '../../assets/Hospital.png'
import CapsuleIcon from '../../assets/Capsule.png'
import AmbulanceIcon from '../../assets/Ambulance.png'
import  IconCard from'../IconCard/IconCard'
import { Typography, Box, Grid} from "@mui/material"

const HeroService = () => {
    const Services = useMemo(
        ()=>[
            {img: DoctorIcon, title:'Doctor'},
            {img: PharmarcyIcon, title:'Labs'},
            {img: HospitalIcon, title:'Hospitals', active:true},
            {img: CapsuleIcon , title:'Medical Store'},
            {img: AmbulanceIcon, title:'Ambulance'}

        ],
        []
    )
  return (
    <Box>
      <Typography 
      component='h4' 
      fontSize={20} 
      color='#102851' 
      fontWeight={500} 
      textAlign='center' 
      mb={2}>
      You may be looking for
      </Typography>
      <Grid
       container 
       columnSpacing={{ xs: 1, md: 2 }}
       justifyContent={'center'}
      >
        {
            Services.map((service)=>(
              <Grid item key={service.title} xs={2} md={2.4}>
                <IconCard
                 img = {service.img}
                 title ={service.title} 
                 active = {service.active || false}
                 bgcolor ='#FAFBFE'/>
              </Grid>  
            ))
         }

      </Grid>
    </Box>
  )
}

export default HeroService