import React from 'react'
import {Box, Typography,Button} from '@mui/material';
import pic1 from '../assets/images/gym1.webp'
import '../App.css'

const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:'212px', xs:'70px'},ml:{sm:'50px'}}} position="relative" p="20px">
      <Typography color="#fff" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'40px'}}} mb="23px" mt="30px" color="#fff">
        Sweat, Smile <br/> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={3} color="#fff">
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" color="error" href='#exercises'
      sx={{backgroundColor:'#d4a517',padding:'19px'}}
      >Explore Exercises</Button>
      <Typography fontWeight={800}
        color="#d4a517"
        sx={{
          opacity: 0.4,
          display: {lg:'block',xs:'none'}
        }}
        fontSize="200px"
      >Exercise</Typography>
      <img src={pic1} alt="banner" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner
