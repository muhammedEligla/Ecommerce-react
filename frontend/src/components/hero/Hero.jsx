import { Box,  Container } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './slider.css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { TextImg, TextSlider } from "./TextForImg"
import IconSection from "./IconSection";
const Hero = () => {
    return (
        <>
        <Container sx={{mt:1.5 , display:'flex' , alignItems:'center' , gap:1}}>
            
            <Swiper style={{flexGrow:1}}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide className="parent-slider"> 
            <img src="./heroImgs/banner-15.jpg" />
            <TextSlider title={'MEN'} subTitle={'SALE UP TO '} text1={'40% OFF'} text2={'Get Free Shipping on orders over $89.99'} title1={'LIFESTYLE COLLECTION'} />
        
        </SwiperSlide>

        <SwiperSlide className="parent-slider"> 
            <img src="./heroImgs/banner-25.jpg" />
                <TextSlider title={'WOMEN'} subTitle={'SALE UP TO '} text1={'29% OFF'} text2={'Get Free Shipping on orders over $69.99'} title1={'LIFESTYLE COLLECTION'} />
        </SwiperSlide>
    </Swiper>

            <Box sx={{display:{xs:'none' , md:'block'} , minWidth:'26.6%' }}>
                <Box  sx={{position:'relative'}}>
                <img width={'100%'} src="./heroImgs/banner-16.jpg" ></img>

                <TextImg title={'GAMING 4K'} subTitle={'DESKTOPS'} text={'LAPTOPS'} link={'shop now'} />
                </Box>


                <Box sx={{position:'relative'}}>
                    <img width={'100%'} src="./heroImgs/banner-17.jpg"></img>
                <TextImg title={'NEW ARRIVALS'} subTitle={'SUMMER'} text={'SALE 20% OF'} link={'shop now'} />
                    
                </Box>
            </Box>
            
            </Container>
            <IconSection />
        </>
    );
}

export default Hero;
