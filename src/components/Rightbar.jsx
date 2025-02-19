import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{display: { xs: "none", sm:"block"}}}>
            <Box position={'fixed'} margin={5} marginBottom={5}>
                <Typography variant='h6' fontWeight={300}>
                    Online Friends
                </Typography>
                <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/5.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/3.jpg" />
                </AvatarGroup>
                <Typography variant='h6' fontWeight={300}>
                    Latest Photos
                </Typography>
                {/* Mejorar esto al hacerlo dinámico, basarme de sidebar para el mismo concepto de elementos múltiples */}
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img
                            src={'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'}
                            alt={'Breakfast'}
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src={'https://images.unsplash.com/photo-1551782450-a2132b4ba21d'}
                            alt={'Burgir'}
                            loading="lazy"
                        />
                    </ImageListItem>
                    
                    <ImageListItem>
                        <img
                            src={'https://images.unsplash.com/photo-1522770179533-24471fcdba45'}
                            alt={'Camera'}
                            loading="lazy"
                        />
                    </ImageListItem>

                    <ImageListItem>
                        <img
                            src={'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'}
                            alt={'Coffee'}
                            loading="lazy"
                        />
                    </ImageListItem>
                        
                    <ImageListItem>
                        <img
                            src={'https://images.unsplash.com/photo-1533827432537-70133748f5c8'}
                            alt={'Hats'}
                            loading="lazy"
                        />
                    </ImageListItem>
                        
                    <ImageListItem>
                        <img
                            src={'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6'}
                            alt={'Basketball'}
                            loading="lazy"
                        />
                    </ImageListItem>
                        
                    <ImageListItem>
                        <img
                            src={'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f'}
                            alt={'Fern'}
                            loading="lazy"
                        />
                    </ImageListItem>
                        
                </ImageList>
                <Typography variant='h6' fontWeight={300}>
                    Latest Posts
                </Typography>
                {/* Igual mejorar este elemento list, no hay que dejar elementos así de feos */}
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                            >
                                to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Oui Oui"
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                            >
                                Sandra Adams
                            </Typography>
                            {' — Do you have Paris recommendations? Have you ever…'}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Rightbar