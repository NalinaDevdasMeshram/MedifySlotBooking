import { Box,Grid,Typography } from "@mui/material"
import { useMemo } from "react"
import doctorIcon from '../../assets/Doctor.png'
import labsIcon from '../../assets/Drugstore.png'
import hospitalIcon from '../../assets/Hospital.png'
import capsuleIcon from '../../assets/Capsule.png'
import Ambulance from '../../assets/Ambulance.png'
import IconCard from "../IconCard/IconCard"

const HeroService = () => {
const Service = useMemo(()=>[
     {img: doctorIcon, title:'Doctors'},
     {img: labsIcon, title:'Labs'},
     {img: hospitalIcon, title:'Hopitals', active:'true'},
     {img: capsuleIcon, title:'Medical Store'},
     {img: Ambulance, title:'Ambulances'},
    ],
    []
)
  return (
    <Box>
        <Typography
          component="h4"
          fontSize={20}
          color="#102851"
          fontWeight={500}
          textAlign="center"
          mb={2}
        >
         You may be looking for
        </Typography>
        <Grid
        container
        columnSpacing={{ xs: 1, md: 2 }}
        justifyContent={"center"}
      >
        {Service.map((service) => (
          <Grid item key={service.title} xs={4} md={2.4}>
            <IconCard
              img={service.img}
              title={service.title}
              active={service.active || false}
              bgColor="#FAFBFE"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default HeroService