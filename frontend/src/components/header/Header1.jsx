// @ts-nocheck
import * as React from 'react';
import { DarkModeOutlined, LightMode } from "@mui/icons-material";
import { Box, IconButton, Stack, useTheme, Typography, Container } from "@mui/material";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';




const options = [
    'AR',
    'EN',
  ];
// eslint-disable-next-line react/prop-types
const Header1 = ({setMode}) => {
    const mode = useTheme().palette.mode;
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setAnchorEl(null);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };


    return (
        <Box sx={{bgcolor:theme.palette.head.main}}>

        <Container>
            <Stack direction={'row'} sx={{alignItems:"center" }}>

                <Typography sx={{mr:2 , p: "3px 10px", bgcolor:"#D23F57" , borderRadius:"12px" , fontSize:"bold"}}  variant="body2" color="#fff">
                HOT
                </Typography>
                <Typography sx={{fontWeight: 300 , fontSize:"12px" , color:theme.palette.text.primary}}  variant="body2" >
                Free express Shipping
                </Typography>

                <Box flexGrow={1} />

                <Stack direction={'row'} sx={{alignItems:"center" }}>

                <div>
                <List
                  component="nav"
                >
                
                  <ListItem
                    
                    id="lock-button"
                    aria-haspopup="listbox"
                    aria-controls="lock-menu"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClickListItem}
                  >
                    <ListItemText
                    
                      secondary={options[selectedIndex]}
                    />
                  </ListItem>
                </List>
                <Menu
                  id="lock-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'lock-button',
                    role: 'listbox',
                  }}
                >
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>


                <IconButton color='inherit'
                    onClick={()=>{setMode(mode === 'dark' ? 'light' : 'dark');
                    localStorage.setItem('myTheme' , mode);
                    }}>
                    {mode === 'dark' ? <LightMode sx={{color:'gold'}} /> : <DarkModeOutlined /> }
                </IconButton>
                </Stack>
                
            </Stack>
        
        </Container>
        
        </Box>
    );
}

export default Header1;
