import { Box, TextField, Typography, InputAdornment, Button} from '@mui/material'

const SMSForm = () => {
  return (
    <Box mb={5}>
        <Typography fontWeight={600} mb={1}>
         Get the link to download the app
        </Typography>
        <Box component='form' sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
            <TextField
             sx={{
                border: '1px solid #F0F0F0',
                flex: 1,
            }}
            placeholder="Enter phone number"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        +91
                    </InputAdornment>
                )
            }}
            required
            />
            <Button type='submit' size='large' variant ='contained' disableElevation>
             Send SMS
            </Button>
        </Box>

    </Box>
  )
}

export default SMSForm