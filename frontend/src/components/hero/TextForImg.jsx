import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Link, Stack, Typography, useTheme } from "@mui/material";


// eslint-disable-next-line react/prop-types
export const TextSlider = ({title1 ,title , subTitle , text1 ,text2}) => {
    const theme = useTheme();
    return (
        <Box sx={{ [theme.breakpoints.up('sm')]:{
            position:'absolute' , top:'50%' , transform:'translateY(-50%)', left:'10%' ,  textAlign:'left'
        },
        [theme.breakpoints.down('sm')]:{
            pt:4 , pb:6 , textAlign:'center'
        }
            }}>

        <Typography variant="h6" color="#222">
        {title1}</Typography>
        <Typography variant="h4" color="#222" sx={{fontWeight:300 , my:1 }}>
        {title}</Typography>

        <Typography variant="h6" sx={{display:'inline-block'}} color="#333" mr={1}>{subTitle}</Typography>
        <Typography variant="h6" sx={{display:'inline-block' }} color="#D23F57" mr={1}>{text1}</Typography>

        <Typography variant="body1" color="#000" sx={{fontWeight:300 , my:1 }}>
         {text2}</Typography>

        <Button variant="contained" sx={{px:5 , py:1 , mt:2 , bgcolor:'#222' , boxShadow:'0px 4px 16px rgba(43 , 52 , 69 , 0.1)',
         color:'#fff' ,  borderRadius:'1px' , "&:hover":{bgcolor:'#151515', boxShadow:'0px 4px 16px rgba(43 , 52 , 69 , 0.1'}}}>SHOP NOW</Button>
    
        </Box>
    );
}

// eslint-disable-next-line react/prop-types
export const TextImg = ({title , subTitle , text , link})=>{
    return(
        <Stack sx={{position:'absolute' , top:'50%' , transform:'translateY(-50%)' , left:'7%'}}>
                <Typography variant="caption" color="#2B3445" fontSize={'18px'}>
                    {title} 
                </Typography>
                <Typography variant="h6" color="#2B3445" lineHeight={'16px'} mt={1}>
                    {subTitle} 
                </Typography>

                <Typography variant="h6" color="#2B3445" lineHeight={'16px'} mt={1}>
                    {text} 
                </Typography>

                <Link sx={{
                    color:'#2B3445',
                    display:'flex',  alignItems:'center',
                    gap:'5px',       transition:'.2s',
                    "&:hover":{color:'#D23F57'}
                }} href='#' underline="none"
                >
                    {link} 
                    <ArrowForward sx={{fontSize:'13px'}} />
                </Link>
                </Stack>
    )
}