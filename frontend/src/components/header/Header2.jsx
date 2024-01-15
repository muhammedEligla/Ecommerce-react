import { ExpandMore, PersonOutline, ShoppingCartOutlined } from "@mui/icons-material";
import { Container, IconButton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";


const Search = styled('div')(({ theme }) => ({
    flexGrow:0.3,
    display:"flex",
    justifyContent:'space-between',
    position: 'relative',
    borderRadius:"28px" ,
    border:'1px solid #777',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '90%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));




  
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));



  const options = [
    'All Catigoryies',
    'Car',
    'Electronic',
    'Cloths',
  ];

const Header2 = () => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
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
        <Container sx={{mt:3}}>
        <Stack direction={'row'} sx={{justifyContent:'space-between' , alignItems:'center' , my:'5px'}}>
            <Stack >
                <ShoppingCartOutlined sx={{margin:'0 auto'}} />
                
        {useMediaQuery('(min-width:1000px)') && (
          <Typography fontSize={'small'} variant="h6" >E-commerce</Typography>
          )}
            </Stack>


            
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />



            {useMediaQuery('(min-width:800px)') &&(
              <div>
            <List
              component="nav"
              aria-label="Device settings"
              // @ts-ignore
              sx={{ bgcolor: theme.palette.search.main , borderRadius:'0 28px 28px 0' }}
            >
              <ListItem
              sx={{py:'0'}}
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClickListItem}
              >
                <ListItemText
                  secondary={options[selectedIndex]}
                  sx={{width:'100px' , textAlign:'center' ,}}
                />
                <ExpandMore sx={{fontSize:"16px" }} />
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
            )}
            


          </Search>





            <Stack direction={'row'} >
            <IconButton>
                <StyledBadge badgeContent={4} color="error">
                <ShoppingCartOutlined />
                </StyledBadge>
            </IconButton>

            <IconButton>
                <PersonOutline />
            </IconButton>
            </Stack>
        </Stack>
        </Container>
    );
}

export default Header2;
