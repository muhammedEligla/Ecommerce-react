
import {  Close, ElectricBikeOutlined, ExpandMore, KeyboardArrowRight, LaptopChromebookOutlined, MenuBookRounded, SportsEsportsOutlined } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuList, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import WindowIcon from '@mui/icons-material/Window';
import MenuIcon from '@mui/icons-material/Menu';
import Links from './Links';


const accordionList = [
  {mainLink:'Home' , subLinks:['link1' , 'Link2' , 'Link3']},
  {mainLink:'Meage menu' , subLinks:['link1' , 'Link2' , 'Link3']},
  {mainLink:'full scrreen menu' , subLinks:['link1' , 'Link2' , 'Link3']},
  {mainLink:'pages' , subLinks:['link1' , 'Link2' , 'Link3']},
  {mainLink:'user account' , subLinks:['link1' , 'Link2' , 'Link3']},
  {mainLink:'vedor account' , subLinks:['link1' , 'Link2' , 'Link3']},
];

const listIcon = [
    {icon:<ElectricBikeOutlined fontSize="small" /> , text:'Bikes'},
    {icon:<LaptopChromebookOutlined fontSize="small" /> , text:'Electronics'},
    {icon:<MenuBookRounded fontSize="small" /> , text:'Books'},
    {icon:<SportsEsportsOutlined fontSize="small" /> , text:'Games'}
];


const Header3 = () => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    

    const [state, setState] = useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  

    return (
    <Container sx={{display:'flex' , flexDirection:'row' , justifyContent:'space-between' , mt:4}}>
        <Box >
        <Button
        // @ts-ignore
        sx={{bgcolor:theme.palette.search.main , 
            color:theme.palette.text.secondary,
            width:220 , textTransform:'capitalize' }}
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
        <WindowIcon />
        Categories
        <Box flexGrow={0.7} />
        <KeyboardArrowRight />
        </Button>

        
        <Menu
        sx={{'.MuiPaper-root':{width:220} }}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >

        {listIcon.map((item , i) =>{
            return(
                <MenuList key={i} onClick={handleClose}>
            <MenuItem>
                <ListItemIcon>
                    {item.icon}
                </ListItemIcon>
                <ListItemText>{item.text}</ListItemText>
            </MenuItem>
        </MenuList>
            )
        })}
        </Menu>
        </Box>

        {useMediaQuery('(min-width:1200px)') && (
          <Stack direction={'row'} sx={{alignItems:'center' , justifyContent:'space-between' , flex:1 , ml:2}}>
            <Links title={'Home'} />
            <Links title={'Mega Menu'} />
            <Links title={'Full Screen Menu'} />
            <Links title={'Pages'} />
            <Links title={'User Account'} />
            <Links title={'Vendor'} isLast={false} />
          </Stack>
          )}

        {useMediaQuery('(max-width:1200px)') && (
        <IconButton onClick={toggleDrawer('top', true)}>
          <MenuIcon  />
        </IconButton>
        )}
        
        <Drawer
        anchor={'top'}
        open={state['top']}
        onClose={toggleDrawer('top', false)}
      >



        <Box sx={{width:'60%', height:'400px' , mx:'auto' , mt:'50px' }}>
      <IconButton  onClick={ toggleDrawer('top', false)}>
      <Close />
      </IconButton>

      {accordionList.map((item , index)=>{
        return(
          <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{item.mainLink}</Typography>
          </AccordionSummary>
          <AccordionDetails>
          {item.subLinks.map((link , i) =>{
            return(
              <nav key={i} aria-label="secondary mailbox folders">
            <List>
              <ListItem >
                <ListItemButton>
                  <ListItemText primary={link} />
                </ListItemButton>
              </ListItem>
            </List>
            </nav>
            )
          })}
            
          </AccordionDetails>
      </Accordion>

        )
      })}
        
        </Box>
      
      </Drawer>
    </Container>
    );
}

export default Header3;
