import styled from "styled-components";
import '../index.css';
import { Swiper, SwiperSlide } from "swiper/react";

const OffersContainer = styled.section`
    width: 1440px;
    height: 875px;
  background-color: var(--light-gray-3);
`

const data = [
    {id: '1', color: '--primary', image: 'oi'}
]

const Offers = () => {
    return ( 
        <OffersContainer className="flex justify-content-center m-auto">
                <Swiper>
                    <SwiperSlide>

                    </SwiperSlide>
                </Swiper>
        </OffersContainer>
     );
}
 
export default Offers;