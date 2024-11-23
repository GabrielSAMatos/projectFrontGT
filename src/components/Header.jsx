import styled from "styled-components";
import Logo from "./Logo";
import '../index.css';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';      

const HeaderContainer = styled.header`
    height: 192px;
    background-color: var(--white);

    & section#sectionHeader{
        width: 1440px;
        margin: auto;
    }

    & div#divHeader{ 
        margin: 34px 0px 29px 0px;
        padding: 0px 100px 0px 100px;
        gap: 40px;
        width: 100%;
    }
    
    & input{
        width: 559px;
        border-radius: 8px;
        background-color: #f8f8f8;
        border: 0px;
        margin-left: 27px;
        padding: 20px;
        font-size: 16px;
        letter-spacing: 0.75px;
    } 
    
    & input::placeholder{
        color: var(--light-gray);
    }

    & #divInput .pi {
        transform: translateY(-10px); /* Sobe o ícone 3px */
    }

    & a#register{
        margin-left: 48px;
        margin-right: 30px;
        width: 102px;
        letter-spacing: 0.75px;
        text-underline-position: from-font;
        color: var(--dark-gray-2);

    }

    & a#login{
        margin-right: 70px;
    }

    & button{
        width: 114px;
        height: 40px;
        border: 0px;
        border-radius: 8px;
        background-color: var(--primary);
        color: white;
        font-size: 14px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0.75px;
    }

    & button:hover{
        background-color: #c92072ee;
        text-decoration: underline;
        text-underline-position: from-font;
    }
    
    & ul{
        gap: 32px;
    }
    
    & a.linksSection2{
        text-decoration: none;
        line-height: 24px;
        letter-spacing: 0.75px;
        position: relative;
        font-weight: 400;
        line-height: 28px;
        color: var(--dark-gray-2);


    } 
    
    & a.linksSection2:hover{
        color: var(--primary);
        font-weight: 700;
    } 
    
    & a.linksSection2:hover::after {
        transition: 1s;
        content: ''; /* Adiciona um elemento vazio para a borda */
        position: absolute; /* Posiciona o elemento em relação ao link */
        left: 0;
        right: 0;
        bottom: -5px; /* Ajusta a posição da borda abaixo do texto */
        height: 3px; /* Define a espessura da borda */
        background-color: var(--primary); /* Cor da borda */
        border-radius: 10px; /* Arredonda a borda */
    }

`;

const Header = () => {
    return ( 
        <HeaderContainer className="h-full flex">
            <section id="sectionHeader">
                <div id="divHeader" className="flex flex-column">
                    <section className="flex align-items-center justify-content-start  relative">
                        <a href="/"><Logo id="logo"/></a>
                        <form>
                            <div id="divInput">
                                <IconField>
                                    <InputIcon 
                                    className="pi pi-search cursor-pointer"
                                    type='submit'
                                    style={{ fontSize: '1.5rem', color: 'var(--light-gray-2)'}}
                                    />
                                    <InputText type="text" name="searchProducts" id="searchProducts" placeholder="Pesquisar produto..."/>
                                </IconField>
                            </div>
                        </form>
                        <a id="register" href="#Cadastre-se">Cadastre-se</a>
                        <a id="login" href="#Entrar"><button>Entrar</button></a>
                        <a id="shoppingCart" href="#Carrinho-de-Compras"><img src="src\Images\icons\mini-cart.svg" alt="Carrinho de compras"/></a>
                    </section>

                    <section className="h-100">
                        <nav className="h-full">
                            <ul className="list-none flex align-items-center justify-content-start h-full relative">
                                <li><a href="#Home" rel="noopener noreferrer"  className="linksSection2">Home</a></li>
                                <li><a href="#Produtos" rel="noopener noreferrer"  className="linksSection2">Produtos</a></li>
                                <li><a href="#Categorias" rel="noopener noreferrer"  className="linksSection2">Categorias</a></li>
                                <li><a href="#Meus-Pedidos" rel="noopener noreferrer" className="linksSection2">Meus Pedidos</a></li>
                            </ul>
                        </nav>
                    </section>
                </div>
            </section>
        </HeaderContainer>
     );
}
 
export default Header;