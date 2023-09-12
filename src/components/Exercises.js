import React, {useState,useEffect} from 'react'
import Pagination from '@mui/material/Pagination'
import {Box,Stack, Typography} from '@mui/material';
import {exerciseOptions,fetchData} from '../utils/fetchData'
import ExerciseCrad from './ExerciseCrad';

const Exercises = ({setExercise,bodyPart,exercise}) => {
const [currentPage,setCurrentPage] = useState(1);
const exercisePerPage=9;
const indexOfLastExercise=currentPage * exercisePerPage;
const indexOfFirst=indexOfLastExercise-exercisePerPage;
const currentExer=exercise.slice(indexOfFirst, indexOfLastExercise);

const paginate=(e,val)=>{
setCurrentPage(val);

window.scrollTo({top:1800,behavior:'smooth'})
}
useEffect(()=>{
  const fetchExerData=async()=>{
    let exerData=[];
    if(bodyPart==='all')
    {
      exerData=await fetchData( "https://exercisedb.p.rapidapi.com/exercises",
      exerciseOptions)
    }
    else
    {
      exerData=await fetchData( `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
      exerciseOptions)
    }
    setExercise(exerData);
  }
  fetchExerData();
},[bodyPart])
  return (
    <Box id='exercises'
    sx={{mt:{lg:'110px'}}}
    mt="50px"
    p="20px"
    >
      <Typography variant='h3' mb="46px" color="#d4a517">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{gap:{lg:'110px',xs:'50px'}}}
      flexWrap="wrap" justifyContent="center">
        {currentExer.map((exer,index)=>(
          <ExerciseCrad key={index} exercise={exer}/>
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
          {(
            <Pagination color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercise.length/exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
            />
          )}
      </Stack>
    </Box>
  )
}

export default Exercises