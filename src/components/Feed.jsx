import { Box,Typography } from '@mui/material'
import Post from './Post'

const Feed = () => {
    return (
        <Box flex={4} p={2}>
            <Typography component='h1' variant='h4' margin={5}>
                Inicio
            </Typography>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </Box>
    )
}

export default Feed