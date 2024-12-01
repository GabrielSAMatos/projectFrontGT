import styled from "styled-components";

const FooterContainer = styled.footer`
    height: 454px;
    margin: auto;
    background-color: var(--dark-gray);
    color: var(--white);

    & footer{ // pra centralizar o footer
        width: 1440px; 
        margin: auto; 
    }
    & section{
        margin: 72px 94px 0px 100px;
    }

    & ul{
        list-style: none;
        line-height: 38px;
    }

    & li div{
        //border: 1px solid white;
    }

    & div#logoDigitalFooter{
        width: 307px;
    }

    & #logoDigitalFooter p{
        margin: 35px 0px 40px 0px;
    }

    & div#divInfo{
        width: 135px;
        height: 278px;
        margin: 0px 102px 0px 205px;

    }

    & .pTitle{
        margin-bottom: 28px;
        font-size: 18px;
        font-weight: 600;
        line-height: 21.78px;
    }

    & div#divCategory{
        width: 96px;
    }

    & div#divContact{
        width: 233px;
        margin-left: 94px;
    }

    & a{
        text-decoration: none;
        color: white;
    }

    & a:hover{
        text-decoration: underline;
    }

    & span{
        text-align: center;
        font-size: 13px;
        font-weight: 400;
        line-height: 24px;
    }
`;

const year = new Date();

const currentYear = year.getFullYear()



const Footer = () => {
    return (
        <FooterContainer>
            <footer className="flex flex-column">
                <section className="flex">
                    <ul className="flex">
                        <li>
                            <div id="logoDigitalFooter">
                                <img src="..\src\Images\icons\logo-footer.svg" alt="Icone Digital Store"/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore.
                                </p>
                                <ul className="flex align-items-center gap-5">
                                    <li><a href="/Facebook" target="_blank"><img src="..\src\Images\icons\facebook.svg" alt="Facebook icon" /></a></li>
                                    <li><a href="/Instagram" target="_blank"><img src="..\src\Images\icons\instagram.svg" alt="Instagram icon" /></a></li>
                                    <li><a href="/Twitter" target="_blank"><img src="..\src\Images\icons\twitter.svg" alt="Twitter icon" /></a></li>
                                    <li><a href="https://github.com/GabrielSAMatos" target="_blank"><img src="..\src\Images\icons\github.svg" alt="Github icon" /></a></li>
                                    <li><a href="https://www.linkedin.com/in/gabrielsamatos/" target="_blank"><img src="..\src\Images\icons\linkedin.svg" alt="Linkedin icon" /></a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div id="divInfo">
                                <p className="pTitle">Informação</p>
                                <ul>
                                    <li><a href="/Sobre-Drip-Store">Sobre Drip Store</a></li>
                                    <li><a href="/Seguranca">Segurança</a></li>
                                    <li><a href="/Wishlist">Wishlist</a></li>
                                    <li><a href="/Blog">Blog</a></li>
                                    <li><a href="/Trabalhe-conosco">Trabalhe conosco</a></li>
                                    <li><a href="/Meus-Pedidos">Meus Pedidos</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div id="divCategory">
                                <p className="pTitle">Categorias</p>
                                <ul>
                                    <li><a href="/Products">Camisetas</a></li>
                                    <li><a href="/Products">Calças</a></li>
                                    <li><a href="/Products">Bonés</a></li>
                                    <li><a href="/Products">Headphones</a></li>
                                    <li><a href="/Products">Tênis</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div id="divContact">
                                <p className="pTitle">Contato</p>
                                <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                                <span>(85) 3051-3411</span>
                            </div>
                        </li>
                    </ul>
                </section>
                <div className="linha"></div>
                <span>@ {currentYear} Digital College</span>
            </footer>
        </FooterContainer>
    );
}

export default Footer;