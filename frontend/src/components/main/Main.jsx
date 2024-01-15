


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import { Box, CircularProgress, Container, Dialog, IconButton, Rating, Stack, Typography, useTheme } from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from "react";
import './Main.css';
import { AddShoppingCartOutlined, Close } from '@mui/icons-material';
import ProductDet from './ProductDet';
import { useGetProductByNameQuery } from '../../RTK/Product';




const Main = () => {


  const allProApi = 'products?populate=*';
  const menCatApi = 'products?populate=*&filters[proCategory][$eq]=men';
  const womenCatApi = 'products?populate=*&filters[proCategory][$eq]=women';
  const kidsCatApi = 'products?populate=*&filters[proCategory][$eq]=kids';

  const [myDataApi , setDateApi] = useState(allProApi);
  const { data , error , isLoading} = useGetProductByNameQuery(myDataApi);
  const [open, setOpen] = useState(false);
  const [clickedProduct, setclickedProduct] = useState({});

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);

    };

    const theme = useTheme();
    const [alignment, setAlignment] = useState(allProApi);

    const handleAlignment = (event, newAlignment) => {
      if (newAlignment !== null){
      setAlignment(newAlignment);
      setDateApi(newAlignment)
      }
    };



    if (isLoading) {
      return (
        <Box sx={{ py: 11, textAlign: "center" }}>
          <CircularProgress />
        </Box>
      );
    }
  
    if (error) {
      return (
        <Container
          sx={{
            py: 11,
            textAlign: "center",
          }}
        >
          <Typography variant="h6">
            {
              // @ts-ignore
              error.error
            }
          </Typography>
  
          <Typography variant="h6">Please try again later</Typography>
        </Container>
      );
    }
  



if(data){
  return (
        <Container sx={{mt:5}}>
        <Stack gap={1}>
            <Stack direction={'row'} sx={{justifyContent:'space-between' , alignItems:'center' , flexWrap:'wrap' , gap:2}}>
                <Box>
                    <Typography variant="h6">Selected products</Typography>
                    <Typography variant="body1" fontWeight={300}>
                        All our new arrivals in a exclusive brand selection 
                    </Typography>
                </Box>

                <ToggleButtonGroup color="error"
            sx={{
                gap:1,
                '.Mui-selected':{
                    border:'1px solid rgba(233, 69,69 , 0.6) !important'  ,
                    color:"#e94560",
                    bgcolor:'initial'
                }
            }}
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
    >


      <ToggleButton sx={{color:theme.palette.text.primary}} className="toggBtn" 
      value={allProApi} aria-label="left aligned">
        All Products
      </ToggleButton>


      <ToggleButton sx={{color:theme.palette.text.primary}} className="toggBtn" 
      value={menCatApi} aria-label="centered">
      Men category
      </ToggleButton>


      <ToggleButton sx={{color:theme.palette.text.primary}} className="toggBtn" 
      value={womenCatApi} aria-label="right aligned">
        Women category
      </ToggleButton>

      <ToggleButton sx={{color:theme.palette.text.primary}} className="toggBtn" 
      value={kidsCatApi} aria-label="right aligned">
        Kids
      </ToggleButton>

    </ToggleButtonGroup>
            </Stack>

            

            <Stack direction={'row'} sx={{flexWrap:'wrap' , gap:1 , justifyContent:{md:'space-between' , xs:'center'}}}>
            {data.data.map((item )=>{
                return(
                    <Card key={item.id} sx={{ 
                        maxWidth: 333 , height:'450px' ,display:'flex' ,flexDirection:'column', justifyContent:'space-between', mt:2 ,'.MuiCardMedia-root': {transition:'.6s'} ,
                        ":hover .MuiCardMedia-root":{scale:'1.1' ,  rotate:'1deg'} }}>
                        
        <Box>
        <CardMedia
          sx={{ height:250 }}
          image= {`http://localhost:1337${item.attributes.proImg.data[0].attributes.url}`}
          title="green iguana"
        />

        <CardContent>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography gutterBottom variant="h6" component='div'>
                    {item.attributes.proTitle} 
                </Typography>
                <Typography variant="subtitle1" component='p'>
                {item.attributes.proPrice}
                </Typography>
            </Stack>
            <Typography variant="body2" color='text.secondary'>
            {item.attributes.proDescription}
            </Typography>
        </CardContent>

        </Box>

        <CardActions sx={{justifyContent:'space-between'}}>
          <Button onClick={()=>{
            handleClickOpen()
            setclickedProduct(item)
          } } sx={{gap:1}} size="small">
          <AddShoppingCartOutlined fontSize='small' />
          add to cart
          </Button>
          
          <Rating name="read-only" precision={0.5} value={item.attributes.proRating} readOnly />
          
        </CardActions>
      </Card>
 
                )
            })}
            </Stack>
            
            
        </Stack>
       <Dialog
        sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

      <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          
      <ProductDet item={clickedProduct} />
      </Dialog>
        </Container>
    );
}

    
}

export default Main;


