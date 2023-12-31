import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExer = ({targetVideos,equipVideos}) => {
  return (
    <Box sx={{mt:{lg:'100px',xs:"0"}}}>
      <Typography variant="h3" mb={5} color="#fff">
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{p:'2',position:'relative'}}>
        {targetVideos.length ?<HorizontalScrollbar data={targetVideos}/>:<Loader/>}
      </Stack>
      <Typography variant="h3" mb={5} color="#fff">
        Exercises that use the same Equipment
      </Typography>
      <Stack direction="row" sx={{p:'2',position:'relative'}}>
        {equipVideos.length ?<HorizontalScrollbar data={equipVideos}/>:<Loader/>}
      </Stack>
    </Box>
  )
}

export default SimilarExer