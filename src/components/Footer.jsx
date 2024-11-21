import styled from "styled-components";

const FooterContainer = styled.footer`
    width: 1440px;
    height: 454px;
    margin: auto;
    margin-top: 345px;
    background-color: var(--dark-gray);
    color: var(--white);

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

    & #linha{
        margin: auto;
        margin-top: 34px;
        margin-bottom: 23px;
        background-color: white;
        width: 1240px;
        height: 1px;
        opacity: 0.3px;

    }

    & span{
        text-align: center;
        font-size: 13px;
        font-weight: 400;
        line-height: 24px;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <footer className="flex flex-column">
                <section className="flex">
                    <ul className="flex">
                        <li>
                            <div id="logoDigitalFooter">
                                <img src="src\Images\logo-footer.svg" alt="Icone Digital Store"/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore.
                                </p>
                                <ul className="flex align-items-center gap-5">
                                    <li><a href="#Facebook" target="_blank"><img src="src\Images\facebook.svg" alt="Facebook icon" /></a></li>
                                    <li><a href="#Instagram" target="_blank"><img src="src\Images\instagram.svg" alt="Instagram icon" /></a></li>
                                    <li><a href="#Twitter" target="_blank"><img src="src\Images\twitter.svg" alt="Twitter icon" /></a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div id="divInfo">
                                <p className="pTitle">Informação</p>
                                <ul>
                                    <li><a href="#Sobre-Drip-Store">Sobre Drip Store</a></li>
                                    <li><a href="#Segurança">Segurança</a></li>
                                    <li><a href="#Wishlist">Wishlist</a></li>
                                    <li><a href="#Blog">Blog</a></li>
                                    <li><a href="#Trabalhe-conosco">Trabalhe conosco</a></li>
                                    <li><a href="#Meus-Pedidos">Meus Pedidos</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div id="divCategory">
                                <p className="pTitle">Categorias</p>
                                <ul>
                                    <li><a href="#Camisetas">Camisetas</a></li>
                                    <li><a href="#Calças">Calças</a></li>
                                    <li><a href="#Bonés">Bonés</a></li>
                                    <li><a href="#Headphones">Headphones</a></li>
                                    <li><a href="#Tênis">Tênis</a></li>
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
                <div id="linha"></div>
                <span>@ 2022 Digital College</span>
            </footer>
        </FooterContainer>
    );
}

export default Footer;