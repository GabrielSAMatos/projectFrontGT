import React from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import CarrouselPVP from '../components/CarrouselPVP';
import InfoProduct from '../components/InfoProduct';


const ProductViewPageContainer = styled.section`
  width: 1440px;
  padding: 20px 100px 127px 100px;
  margin: auto;

  ul{
    gap: 8px;
    margin-bottom: 40px;
  }

  & li{
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.25px;
    text-align: left;
  }

  & li a{
    color: var(--dark-gray-2);
  }

  & span.barra{
    margin-left: 8px;
  }

  & section#ContainerCarrousel{
    height: 689px;
    gap: 40.27px;
  }
`

const ProductViewPage = () => {
  
  const location = useLocation();

  return (
    <ProductViewPageContainer>
        <div>
          <ul className='flex'>
            <li><a href="/" style={{fontWeight: '700'}}>Home</a><span className='barra'>/</span></li>
            <li><a href="/Products">Produtos</a><span className='barra'>/</span></li>
            <li><a href="/Products">Tênis</a><span className='barra'>/</span></li>
            <li><a href="/Products">Nike</a><span className='barra'>/</span></li>
            <li><a href={location.pathname}>Tênis Nike Revolution 6 Next Nature Masculino</a></li>
          </ul>
        </div>
        <section id='ContainerCarrousel' className='flex'>
          <CarrouselPVP />
          <InfoProduct />
        </section>

      

    </ProductViewPageContainer>
  )
}

export default ProductViewPage
