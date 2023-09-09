import React from 'react'
import {Box} from '@mui/material';
import HeroBanner from './HeroBanner'
import SearchExer from './SearchExer';
import Exercises from './Exercises';

const Home = () => {
  return (
    <Box>
        <HeroBanner/>
        <SearchExer/>
        <Exercises/>
    </Box>
  )
}

export default Home