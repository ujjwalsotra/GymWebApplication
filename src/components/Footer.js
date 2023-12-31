import React from 'react'
import {Box, Stack,Typography} from '@mui/material';
import Logo from '../assets/images/gymlogo.jpg';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="40px">
        <img src={Logo} aly="logo" width="200px" height="100px"/>
        <Typography variant='h3' pb="40px" mt="20px">
          Your Gym Guide ❤️
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer