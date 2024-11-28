import React, { useState } from 'react'
import styled from 'styled-components';

const ButtonOrder = () => {
    const [isOpen, setIsOpen] = useState(false); 

    const ShowMenu = () => {
        setIsOpen(!isOpen);
    };

    const options = {
        obj1: {
            id: 1,
            name: 'mais relevante'
        },
        obj2: {
            id: 2,
            name: 'maior desconto'
        },
        obj3: {
            id: 3,
            name: 'maior preço'
        },
        obj4: {
            id: 4,
            name: 'menor preço'
        },

    }
    


    const ButtonOrder = styled.section `
        position: relative;
        
        & button{
            width: 332px;
            height: 60px;
            padding: 16px 0px 16px 15px;
            border-radius: 4px;
            background-color: transparent;
            border: 1px solid black;
            color: var(--dark-gray-2);
            text-align: left;
            font-size: 16px;
            font-weight: 700;
            line-height: 28px;
            letter-spacing: 0.75px;
        }

        & button:hover{
            background-color: #00000012;
            text-decoration: none;
        }

        & button span{
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0.75px;
            margin-right: 40px;
        }

        & #options{
            position: absolute;
            z-Index: 1000;
            border-radius: 4px;
            box-shadow: 2px 2px 5px #4a4a4a;
        }

        & #options a{
            width: 332px;
            height: 60px;
            padding: 16px 0px 16px 15px;
            border-radius: 4px;
            background-color: white;
            color: var(--dark-gray-2);
            text-align: center;
            font-size: 16px;

            line-height: 28px;
            letter-spacing: 0.75px;
        }

        & #options a:hover{
            color: var(--primary);
            font-weight: 700;
            background-color: #f3f3f3;

        }
    `
  return (
    <ButtonOrder>
      <button
        onClick={ShowMenu}
      >
        Ordernar por<span>: {options.obj1.name}</span>
        <img src="src\Images\icons\arrow-bottom.svg" alt="Seta para baixo" />
      </button>
      {
        isOpen && (
            <div id='options' className='flex flex-column' onClick={ShowMenu}>
                <a href="#maior-desconto">{options.obj2.name}</a>
                <a href="#maior-preco">{options.obj3.name}</a>
                <a href="#menor-preco">{options.obj4.name}</a>
            </div>
        )
      }
    </ButtonOrder>
  )
}

export default ButtonOrder
