import React, {useState, useEffect} from 'react'
import {Box, Stack,Button,TextField,Typography} from '@mui/material';
import { exerciseOptions,fetchData} from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
const SearchExer = () => {
  const [inField,setInField]=useState('');
  const [exercise,setExercise]=useState([]);
  const [bodyParts,setBodyParts]=useState([]);
  useEffect(() =>{
    const fetchExerData=async()=>{
      const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
      console.log(bodyPartsData);
      setBodyParts(['all',...bodyPartsData]);
    }

    fetchExerData();
  },)
  const handleSearch=async()=>{
    if(inField)
    {
       const exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
       const searchedExer=exercisesData.filter((exercise)=> exercise.name.toLowerCase().includes(inField)||
       exercise.bodyPart.toLowerCase().includes(inField)||
       exercise.equipment.toLowerCase().includes(inField)||
       exercise.target.toLowerCase().includes(inField)
       );
       setInField('');
       setExercise(searchedExer);
    }
  }
  return (
    <Stack alignItems="center" mt='37px' justifyContent="center" p='20px'>
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'30px'}}}
      mb="50px" textAlign="center"
      >
        Awesome Exercises<br/>You Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
        sx={{input:{fontWeight:'700',border:'none',borderRadius:'4px'},width:{lg:'800px',
        xs:'350px'
      },borderRadius:'40px'}}
        height='76px' value={inField} onChange={(e)=>setInField(e.target.value.toLowerCase())}
        placeholder='Search Exercises'
        type='text'/>
        <Button className='search-btn' sx={{bgcolor:"#ff2625",color:'#fff',textTransform:"none",
        width:{lg:'175px',xs:'80px'},fontSize:{lg:'20px',xs:'14px'},height:'56px',position:'absolute',right:'0'
      }} onClick={handleSearch}>Search</Button>
      </Box>
      <Box sx={{position:'relative',width:'100%',p:'20px'}}>
        <HorizontalScrollbar data={bodyParts}/>
      </Box>
    </Stack>
  )
}

export default SearchExer