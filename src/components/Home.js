import React,{useState} from 'react'
import {Box} from '@mui/material';
import HeroBanner from './HeroBanner'
import SearchExer from './SearchExer';
import Exercises from './Exercises';

const Home = () => {

  const [exercise,setExercise]=useState([]);
  const [bodyPart,setBodyPart]=useState('all');
  return (
    <Box>
        <HeroBanner/>
        <SearchExer setExercise={setExercise} 
        bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        <Exercises setExercise={setExercise} 
        bodyPart={bodyPart} exercise={exercise}/>
    </Box>
  )
}

export default Home