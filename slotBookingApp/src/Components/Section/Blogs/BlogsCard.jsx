import person from '../../../assets/person.png'
import img from '../../../assets/blog.png'
import { Box, Stack, Typography } from '@mui/material'
const BlogsCard = () => {
  return (
    <Box border='1px solid rgba(0,0,0,0.1)' borderRadius={2}>
       <Box
        component ='img'
        src={img}
        width={1}
       />
       <Box p={2}>
        <Typography color='#77829D' fontWeight={500} mb={1} fontSize={{ xs: 12, md: 16 }}>
           Medical | March 31, 2022
        </Typography>
        <Typography component='h3' color='#1B3C74' fontSize={{ xs: 14, md: 18 }} fontWeight={500} lineHeight={1.2} mb={2}>
          6 Tips To Protect Your Mental Health When You're Sick
        </Typography>
        <Stack direction='row' spacing={1} alignItems='center'>
           <Box
            component='img'
            src={person}
            width={32}
            height={32}
           />
           <Typography color='#1B3C74' fontSize={{ xs: 12, md: 16 }}>
             Rebecca Lee
           </Typography>
        </Stack>
       </Box>
    </Box>
  )
}

export default BlogsCard