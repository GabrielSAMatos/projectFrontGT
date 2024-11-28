import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
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
        color: var(--dark-gray-2);
        text-decoration-line: underline;
        text-underline-position: from-font;   
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
    
    & .linksSection2{
        text-decoration: none;
        line-height: 24px;
        letter-spacing: 0.75px;
        position: relative;
        font-weight: 400;
        line-height: 28px;
        color: var(--dark-gray-2);
    } 
    
    & .linksSection2.active{
        color: var(--primary);
        font-weight: 700;
    } 

    & .linksSection2.active::after {
        transition: 1s;
        content: ''; 
        position: absolute; 
        left: 0;
        right: 0;
        bottom: -5px; 
        height: 3px; 
        background-color: var(--primary); 
        border-radius: 10px; 
    }

    & .linksSection2:hover::after {
        transition: 1s;
        content: ''; 
        position: absolute; 
        left: 0;
        right: 0;
        bottom: -5px; 
        height: 3px; 
        background-color: var(--primary); 
        border-radius: 10px; 
    }
`;

const Header = () => {

    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return ( 
        <HeaderContainer className="h-full flex">
            <section id="sectionHeader">
                <div id="divHeader" className="flex flex-column">
                    <section id="HeaderMainContainer" className="flex align-items-center justify-content-start relative">
                        <NavLink to={"/"}><Logo id="logo"/></NavLink>
                        <form>
                            <div id="divInput">
                                <IconField>
                                    <InputIcon 
                                    className="pi pi-search cursor-pointer"
                                    type='submit'
                                    style={{ fontSize: '1.5rem', color: 'var(--light-gray-2)'}}
                                    />
                                    <InputText type="text" name="searchProducts" id="searchProducts" placeholder="Pesquisar produto..." 

                                    />
                                </IconField>
                            </div>
                        </form>
                        <NavLink to={"/"} id="register">Cadastre-se</NavLink>
                        <NavLink to={"/"} id="login"><button className="cursor-pointer">Entrar</button></NavLink>
                        <NavLink to={"/"} id="shoppingCart"><img src="..\src\Images\icons\mini-cart.svg" alt="Carrinho de compras"/></NavLink>
                    </section>

                    <section className="h-100">
                        <nav className="h-full">
                            <ul className="list-none flex align-items-center justify-content-start h-full relative">
                                <li>
                                    <NavLink
                                        to={"/"}
                                        className={`linksSection2 ${isActive("/") ? "active" : ""}`}>
                                        Home
                                    </NavLink>
                                    </li>
                                    
                                    <li>
                                    <NavLink
                                        to={"/Products"}
                                        className={`linksSection2 ${
                                        isActive("/Products") ? "active" : ""}`}>
                                        Produtos
                                    </NavLink>
                                    </li>

                                    <li>
                                    <NavLink
                                        to={"/Category"}
                                        className={`linksSection2 ${
                                        isActive("/Category") ? "active" : ""}`}>
                                        Categorias
                                    </NavLink>
                                    </li>

                                    <li>
                                    <NavLink
                                        to={"/My-Orders"}
                                        className={`linksSection2 ${
                                        isActive("/My-Orders") ? "active" : ""}`}>
                                        Meus Pedidos
                                    </NavLink>
                                    </li>
                            </ul>
                        </nav>
                    </section>
                </div>
            </section>
        </HeaderContainer>
     );
}
 
export default Header;