import { BuildingStorefrontIcon, Cog6ToothIcon, DocumentTextIcon, HomeIcon, MoonIcon, UserCircleIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/24/solid'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const sidebarItems = [
    { label: "Homepage", href: "#home", icon: <HomeIcon style={{ width: "24px", height: "24px" }} /> },
    { label: "Pages", href: "#pages", icon: <DocumentTextIcon style={{ width: "24px", height: "24px" }} /> },
    { label: "Groups", href: "#groups", icon: <UserGroupIcon style={{ width: "24px", height: "24px" }} /> },
    { label: "Marketplace", href: "#marketplace", icon: <BuildingStorefrontIcon style={{ width: "24px", height: "24px" }} /> },
    { label: "Friends", href: "#friends", icon: <UsersIcon style={{ width: "24px", height: "24px" }} /> },
    { label: "Settings", href: "#settings", icon: <Cog6ToothIcon style={{ width: "24px", height: "24px" }} /> },
    { label: "Profile", href: "#profile", icon: <UserCircleIcon style={{ width: "24px", height: "24px" }} /> },
  ];

const Sidebar = ({mode, setMode}) => {
    return (
    <>
        <Box flex={1} p={2} sx={{display: { xs: "none", sm:"block"}}}>

            <Box position={'fixed'}>
                <List>
                    {sidebarItems.map((item, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton component="a" href={item.href}>
                                <ListItemIcon>
                                <Box>{item.icon}</Box>
                                </ListItemIcon>
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItem disablePadding>
                        <ListItemButton component="a">
                            <ListItemIcon>
                                <Box>
                                    <MoonIcon style={{ width: "24px", height: "24px" }} />
                                </Box>
                            </ListItemIcon>
                            <Switch onChange={e=>setMode(mode === 'light' ? 'dark' : 'light')}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>

        </Box>
    </>
    )
}

export default Sidebar