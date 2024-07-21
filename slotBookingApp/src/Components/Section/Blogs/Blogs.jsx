
import { Box, Container, Grid, Typography } from "@mui/material"
import BlogsCard from "./BlogsCard"
const Blogs = () => {
  return (
    <Box py={6}>
    <Container>
        <Typography color='primary.main' fontWeight={600} textAlign='center' >
        Blog & News
        </Typography>
        <Typography textAlign='center'  variant='h2' fontWeight={500} mb={5}>
         Read Our Latest News
        </Typography>
        <Grid container spacing={4}>
         <Grid item xs={12} md={4}>
            <BlogsCard/>
         </Grid>
         <Grid item xs={12} md={4}>
            <BlogsCard/>
         </Grid>
         <Grid item xs={12} md={4}>
            <BlogsCard/>
         </Grid>
        </Grid>
        </Container>
    </Box>
  )
}

export default Blogs