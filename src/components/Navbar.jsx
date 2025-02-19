import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import { BellIcon, EnvelopeIcon, FireIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { theme } from '../theme'
import { useState } from 'react';

// Al inicializar como constantes a los componentes con su respectivo tipo, es posible asignar estilos, para así no cambiar uno por uno
const StyledToolbar = styled(Toolbar) ({
    display: 'flex',
    justifyContent: 'space-between',
});

const Search = styled("div") ({
    backgroundColor: 'white',
    padding: '0 10px',
    // theme funciona para seguir el estándar de estilos que ocupa MUI, por lo tanto al acceder de la siguiente manera, será posible mantener estilos consistentes en la aplicación
    borderRadius: theme.shape.borderRadius,
    width: '40%',
});

const Icons = styled(Box) (({ theme }) => ({
    display: 'none',
    gap: '15px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]:{
        display: 'flex'
    }
}));

const UserBox = styled(Box) (({ theme }) => ({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]:{
        display: 'none'
    }
}));

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant='h6' sx={{display: {xs: 'none', sm: 'block'}}}>HOLA LOLA</Typography>
                <Box sx={{display: {xs: 'block', sm: 'none'}}}>
                    <FireIcon style={{width: '24px', height: '24px'}} />
                </Box>
                <Search sx={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                    <MagnifyingGlassIcon style={{width: '20px', height: '20px', color:'#A09F9F'}} />
                    <InputBase placeholder='Buscar...'/>
                </Search>
                <Icons>
                    <Badge badgeContent={10} color='error'>
                        <Box>
                            <EnvelopeIcon style={{width: '24px', height: '24px'}} />
                        </Box>
                    </Badge>
                    <Badge badgeContent={1} color='error'>
                        <Box>
                            <BellIcon style={{width: '24px', height: '24px'}} />
                        </Box>
                    </Badge>
                    <Avatar sx={{width: 35, height: 35, cursor: 'pointer'}} src='https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj' onClick={e=>setOpen(true)}></Avatar>
                </Icons>
                <UserBox>
                    <Avatar sx={{width: 35, height: 35}} src='https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj'></Avatar>
                    <Typography variant='span'>Alda</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
                <MenuItem>Profile</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar