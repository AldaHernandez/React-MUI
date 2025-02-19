import React, { useState } from 'react'
import { Tooltip, Fab, Button, Modal, Box, styled, Typography, Avatar, IconButton, TextField, Stack, useTheme, ButtonGroup } from '@mui/material'
import { CalendarDaysIcon, FaceSmileIcon, PhotoIcon, PlusIcon, UserPlusIcon, VideoCameraIcon } from '@heroicons/react/24/solid'

const StyledModal = styled(Modal) ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

const UserBox = styled(Box) ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '10px',
    marginBottom: '10px'
})
export const Add = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
  return (
    <>
        <Tooltip onClick={e=>setOpen(true)} title="Add" sx={{position:'fixed', bottom: 20, left: {xs: ("calc(50% - 25px)"), md: 30}}}>
        <Fab color="primary" aria-label="add" size="medium">
            <PlusIcon style={{height:'24px', width:'24px'}} />
        </Fab>
        </Tooltip>
            <StyledModal
            open={open}
            onClose={e=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box width={400} height={280} bgcolor={'background.default'} color={'text.primary'} p={3} borderRadius={5}>
                    <Typography variant='h6' color='gray' fontWeight={'600'} textAlign={'center'}>
                    Y ni modo, mamita
                    </Typography>                    
                <UserBox>
                    <Avatar src='https://mui.com/static/images/avatar/2.jpg' sx={{width:'30', height:'30'}} />
                    <Typography variant='span' fontWeight={'500'}>
                        Alda Hernández
                    </Typography>
                </UserBox>
                <TextField id="standard-basic" multiline rows={3} label="Escribe algo, cuate..." variant="standard" sx={{width:'100%'}} />
                <Stack direction='row' justifyContent={'center'} mt={2} mb={2}>
                    <Tooltip title="Añadir reacción" placement='top'>
                        <Button>
                            <FaceSmileIcon style={{height:'24px', width:'24px', color: theme.palette.primary.main}} />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Añadir imagen" placement='top'>
                        <Button>
                            <PhotoIcon color='secondary' style={{height:'24px', width:'24px', color: theme.palette.secondary.main}} />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Añadir video" placement='top'>
                        <Button>
                            <VideoCameraIcon style={{height:'24px', width:'24px', color: theme.palette.success.main}} />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Etiquetar amigo" placement='top'>
                        <Button>
                            <UserPlusIcon style={{height:'24px', width:'24px', color: theme.palette.error.main}} />
                        </Button>
                    </Tooltip>
                </Stack>
                <ButtonGroup fullWidth variant='contained'>
                    <Button>Publicar</Button>
                    <Button sx={{width:'100px'}}>
                            <CalendarDaysIcon style={{height:'24px', width:'24px'}} />
                    </Button>
                </ButtonGroup>
            </Box>
            </StyledModal>
    </>
  )
}
