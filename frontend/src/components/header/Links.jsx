import { ExpandMore, KeyboardArrowRight } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemText, Paper, Stack, Typography } from "@mui/material";


// eslint-disable-next-line react/prop-types
const Links = ({title , isLast=true }) => {
    return (
        <Stack direction={'row'} sx={{pb:2, alignItems:'center', position:'relative', ":hover .show-when-hover":{display:'block'} , zIndex:4 }}>
            <Typography variant="body1">{title}</Typography>
            <ExpandMore />

            <Paper className="show-when-hover" sx={{display:'none',minWidth:'150px',position:'absolute' , top:'100%' , left:'50%', transform:"translateX(-50%)" }}>
                <nav aria-label="secondary mailbox folders">
                <List>
                <ListItem disablePadding>
                    <ListItemButton>
                    <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </ListItem>


                {isLast && (
                    <ListItem disablePadding sx={{position:'relative' , ml:'4px' , ":hover .sub-Link":{display:'block'}}}>
                    <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="Product" />
                    <Box flexGrow={1} />
                    < KeyboardArrowRight />
                    </ListItemButton>

                    <Box className='sub-Link' sx={{position:'absolute' , left:'100%' , display:'none'}}>
                        <Paper>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                            <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        </ListItem>

                        </Paper>
                    </Box>
                </ListItem>
                )}
                


                <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Orders" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Profile" />
            </ListItemButton>
        </ListItem>
                </List>
                </nav>
            </Paper>
        </Stack>
    );
}

export default Links;
