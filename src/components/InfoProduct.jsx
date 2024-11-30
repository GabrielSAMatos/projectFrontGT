import React from 'react'
import '../index.css';
import styled from 'styled-components'

const InfoProductContaier = styled.section`
    width: 440px;
    height: 571px;

    & h2{
    color: var(--dark-gray);
    font-size: 32px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0.9999998807907104px;
    }

    & #ref, #ref a{
        color: var(--dark-gray-3);
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: 0.5px;
        margin: 10px 0px;
    }

    & #containerGrade{
        height: 23px;
    }

    & #containerStars{
        margin-bottom: -25px;
    }

    & a p:hover{
        text-decoration: underline;
    }

    & ul{
        margin-top: 4px;
        gap: 4.84px;
    }

    & #grade{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 63px;
        height: 23px;
        padding: 6px 10px 6px 10px;
        margin: 0px 10px 0px 13.92px;
        color: white;
        background-color: var(--warning);
        gap: 3.55px;
        border-radius: 4px;

        font-size: 14px;
        font-weight: 900;
        line-height: 24px;
        letter-spacing: 0.25px;
    }

    & #reviews{
        color: var(--light-gray);
        font-size: 14px;
        font-weight: 500;
        line-height: 22px;
        letter-spacing: 0.25px;
        text-align: left;
    }

    & p#dollar{
        color: var(--dark-gray-2);
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0.75px;
    }

    & span#current{
        font-size: 32px;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 0.9999998807907104px;
        margin-left: 5.83px;
    }

    & span#zero{
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.75px;
        margin-right: 10px;
    }

    & span#old{
        color: var(--light-gray-2);
        font-size: 16px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0.75px;
        text-decoration-line: line-through;
    }

    & #description{
        margin: 20px 0px 5px 0px;
    }

    & #pdescription{
        color: var(--dark-gray-2);
        font-size: 14px;
        font-weight: 500;
        line-height: 22px;
        letter-spacing: 0.25px;
    }

    & #containerSizes{
        margin: 30px 0px 10px 0px;
    }

    & #containerButtons{
        margin-top: 10px;
        gap: 10px;
    }

    & button.size{
        background-color: white;
        color: var(--dark-gray-2);
        width: 48px;
        height: 48px;
        border-radius: 4px;
        border: 1px solid var(--light-gray-2);
    }

    & button.size:hover, button.size:focus{
        color: white;
        background-color: var(--primary);
        border: 0px;
        text-decoration: none;
    }

    & #containerModel{
        margin-bottom: 27px;
    }

    & #containerRadio{
        display: flex;
        gap: 14px;
        margin-top: 8px;
    }

    & input[type="radio"]{
        appearance: none;
        width: 31px;
        height: 31px;
        border-radius: 50%;
    }

    & input[type="radio"]:checked, input[type="radio"]:focus{
        box-shadow: 0 0 0 2px #fff, 0 0 0 4px #C92071;
        outline: 0;
    }

    & #buy{
        background-color: #FFB31F;
        width: 220px;
        height: 48px;
        border-radius: 8px;
        margin-top: 13px;
    }
`

const InfoProduct = () => {
  return (
    <InfoProductContaier>
        <h2>Tênis Nike Revolution <br /> 
        6 Next Nature Masculino</h2>
        <p id='ref'><a href="/Products">Casual</a> | <a href="/Products">Nike</a> | REF:38416711</p>
        <div id='containerGrade' className='flex flex-column'>
            <div id='containerStars' className='flex'>
                <ul className='flex'>
                    <li><img src="../src/Images/icons/star-full.svg" className='starFull' alt="Estrela símbolo preenchida" /></li>
                    <li><img src="../src/Images/icons/star-full.svg" className='starFull' alt="Estrela símbolo preenchida" /></li>
                    <li><img src="../src/Images/icons/star-full.svg" className='starFull' alt="Estrela símbolo preenchida" /></li>
                    <li><img src="../src/Images/icons/star-full.svg" className='starFull' alt="Estrela símbolo preenchida" /></li>
                    <li><img src="../src/Images/icons/star.svg" alt="Estrela símbolo vazia" /></li>
                </ul>
                <div className='flex'>
                    <span id='grade'>4.7 <img src="../src/Images/icons/star-grade.svg" alt="Estrela da nota" /></span>
                    <a href="/Reviews"><p id='reviews'>(90 avaliações )</p></a>
                </div>
            </div>
            <div>
                <p id='dollar'>R$ 
                    <span id='current'>219</span>
                    <span id='zero'>,00</span>
                    <span id='old'>219,00</span>
                </p>
            </div>
            <div>
                <h6 id='description'>Descrição do produto</h6>
                <p id='pdescription'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
            </div>
            <div id='containerSizes'>
                <h6>Tamanho</h6>
                <div id='containerButtons' className='flex'>
                    <button className='size'>39</button>
                    <button className='size'>40</button>
                    <button className='size'>41</button>
                    <button className='size'>42</button>
                    <button className='size'>43</button>
                </div>
            </div>
            <div id='containerModel'>
                <h6>Modelo</h6>
                <div id='containerRadio'>
                    <input type="radio" name="color" id="aqua" style={{backgroundColor: '#6FEEFF'}}/>
                    <input type="radio" name="color" id="pink" autoFocus style={{backgroundColor: '#FF6969'}}/>
                    <input type="radio" name="color" id="gray"  style={{backgroundColor: '#5E5E5E'}}/>
                    <input type="radio" name="color" id="purple"  style={{backgroundColor: '#6D70B7'}}/>
                </div>
            </div>
            <a href="/Fechar-Pedido"><button id='buy'>COMPRAR</button></a>
        </div>

    </InfoProductContaier>
  )
}

export default InfoProduct
