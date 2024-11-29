import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import '../index.css';
import "swiper/css";
import styled from 'styled-components';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const CarrouselContainer = styled.section`
    width: 700.73px;

    & .slideSolo{
        height: 571px;
        border-radius: 4px;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & .slideSolo img{
        width: 498.42px;
        height: 248px;
    }

    & .slidePreview{
        width: 117.81px;
        height: 96px;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        
    }

    & #caixa{
        width: 117.81px;
        height: 96px;
    }

    & .mySwiper .swiper-slide-thumb-active {
        border: 2px solid var(--primary);
}
`


console.log(SwiperSlide)

export default function Carrousel() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <CarrouselContainer style={{background: 'white'}}>

        <Swiper 
        style={{
            '--swiper-navigation-color': '#474747',
            '--swiper-pagination-color': '#474747',
            }}
            loop={true}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
        >      
            <SwiperSlide className="slideSolo bg1"><img src="../src/Images/products/White-Sneakers-PNG-Clipart 2.svg" alt="Tenis Nike" /></SwiperSlide>
            <SwiperSlide className="slideSolo bg2"><img src="../src/Images/products/White-Sneakers-PNG-Clipart 2.svg" alt="Tenis Nike" /></SwiperSlide>
            <SwiperSlide className="slideSolo bg3"><img src="../src/Images/products/White-Sneakers-PNG-Clipart 2.svg" alt="Tenis Nike" /></SwiperSlide>
            <SwiperSlide className="slideSolo bg4"><img src="../src/Images/products/White-Sneakers-PNG-Clipart 2.svg" alt="Tenis Nike" /></SwiperSlide>
            <SwiperSlide className="slideSolo bg5"><img src="../src/Images/products/White-Sneakers-PNG-Clipart 2.svg" alt="Tenis Nike" /></SwiperSlide>

        </Swiper>

        <Swiper
            className="mySwiper"
            slidesPerView={5}
            spaceBetween={27.99}
            onSwiper={setThumbsSwiper}
        >
            <SwiperSlide className="slidePreview bg1" ><img src="../src/Images/products/White-Sneakers-PNG-Clipart 2.svg" alt="Tenis Nike" /></SwiperSlide>
            <SwiperSlide className="slidePreview bg2" ><img src="../src/Images/products/White-Sneakers-PNG-Clipart 2.svg" alt="Tenis Nike" /></SwiperSlide>
            <SwiperSlide className="slidePreview bg3" ><img src="../src/Images/products/White-Sneakers-PNG-Clipart 2.svg" alt="Tenis Nike" /></SwiperSlide>
            <SwiperSlide className="slidePreview bg4" ><img src="../src/Images/products/White-Sneakers-PNG-Clipart 2.svg" alt="Tenis Nike" /></SwiperSlide>
            <SwiperSlide className="slidePreview bg5" ><img src="../src/Images/products/White-Sneakers-PNG-Clipart 2.svg" alt="Tenis Nike" /></SwiperSlide>

        </Swiper>



    </CarrouselContainer>
  )
}

