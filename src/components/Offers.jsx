import styled from "styled-components";
import { NavLink } from "react-router-dom";
import '../index.css';
import { Swiper, SwiperSlide,} from "swiper/react";


const OffersContainer = styled.section`
    width: 1440px;
    height: 681px;
    background-color: var(--light-gray-3);

    & img#product{
        bottom: 5px;
        left: -150px;
        margin-top: 100px;
    }

    & img#frufru{
        width: 140px;
        height: 140px;
        top: 78px;
        left: 648px;
        gap: 0px;   
        opacity: 0.4px;
    }

    & #divContainer{
        margin-left: 100px;
    }

    & h5{
        margin-top: 120px;
        color: var(--warning);
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.75px;
    }

    & h1{
        margin: 20px 0px;
        color: var(--dark-gray);
        font-size: 64px;
        font-weight: 800;
        line-height: 66px;
        letter-spacing: 0.9999998807907104px;
        width: 510px;
    }

    & p{
        color: var(--dark-gray-2);
        width: 495px;
        height: 68px;
        font-size: 18px;
        font-weight: 400;
        line-height: 34px;
        letter-spacing: 0.75px;
    }

    & .bullet{
        width: 12px;
        height: 12px;
        display: inline-block;
        border-radius: 50%;
        background-color: black;
        opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);
        margin-left: 10px;
        margin-bottom: 53px;
        cursor: pointer;
    }

    & .bulletActive{
        background-color: var(--primary);
        opacity: 100%;
    }

    & button{
        margin-top: 40px;
    }
`

const data = [
    {
    id: '1', 
    image:"src/Images/products/t-nike-white-red.png", 
    alt: "tenis branco nike",
    title: (
        <>
            Queima de estoque Nike <img 
                src="src\Images\icons\fire.png" 
                alt="Fire" 
                style={{ marginBottom: '-5px', paddingTop: '5px' }} 
            />
        </>
    ),

    frufru: "src/Images/products/Ornament-11.png"
    },

    {
    id: '2', 
    image:"src/Images/products/t-adidas-gray2.png", 
    alt: "tenis cinza adidas",
    title: (
        <>
            Queima de estoque Nike <img 
                src="src\Images\icons\fire.png" 
                alt="Fire" 
                style={{ marginBottom: '-5px', paddingTop: '5px' }} 
            />
        </>
    ),
    frufru: "src/Images/products/dots-gray.png"
    },

    {
    id: '3', 
    image:"src/Images/products/t-puma-blue1.png", 
    alt: "tenis preto puma",
    title: (
        <>
            Queima de estoque Nike <img 
                src="src/Images/icons/fire.png" 
                alt="Fire" 
                style={{ marginBottom: '-5px', paddingTop: '5px' }} 
            />
        </>
    ),
    frufru: "src/Images/products/dots-purple.png"
    },

    {
    id: '4', 
    image:"src/Images/products/t-nike-cow-2.png", 
    alt: "tenis vaca nike",
    title: (
        <>
            Queima de estoque Nike <img 
                src="src\Images\icons\fire.png" 
                alt="Fire" 
                style={{ marginBottom: '-5px', paddingTop: '5px' }} 
            />
        </>
    ),
    frufru: "src/Images/products/dots-green.png"
    }
]

const Offers = () => {
    return ( 
        <OffersContainer className="flex justify-content-center m-auto">
                <Swiper
                slidesPerView={1}
                loop={true}
                pagination={{ 
                    clickable: true, 
                    bulletActiveClass: "bulletActive", 
                    bulletClass: "bullet" }}
                //autoplay={{
                   // delay: 2000,
                   // disableOnInteraction: false,
                 // }}
                >
                    {data.map ( (item) => (
                        <SwiperSlide 
                        key={item.id} 
                        id="Container" 
                        className="flex swiper-slide" 
                        >
                            <div id="divContainer">
                                <h5>Melhores ofertas personalizadas</h5>
                                <h1>{item.title}</h1>
                                <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p> 
                                <NavLink to={"/Products"}><button className="buttonBGRed">Ver Ofertas</button></NavLink>   
                            
                            </div>
                            <div className="relative">
                                <img 
                                id="product"
                                src={item.image} 
                                alt={item.alt}
                                className="absolute"
                                />
                                <img 
                                id="frufru"
                                src={item.frufru} 
                                alt="Várias bolinhas"
                                className="absolute"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </OffersContainer>
     );
}
 
export default Offers;