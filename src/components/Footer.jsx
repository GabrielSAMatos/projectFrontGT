import styled from "styled-components";

const FooterContainer = styled.footer`
    width: 1440px;
    height: 454px;
    padding: 72px 94px 104px 100px;
    margin: auto;
    margin-top: 345px;
    background-color: var(--dark-gray);
    color: var(--white);

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
        margin: 0px 102px 0px 205px;

    }

    & .pTitle{
        margin-bottom: 28px;
    }

    & div#divCategory{
        width: 96px;
    }

    & div#divContact{
        width: 233px;
        margin: 0px 94px 0px 168px;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <footer>
                <div>
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
                                    <li><img src="src\Images\facebook.svg" alt="Facebook icon" /></li>
                                    <li><img src="src\Images\instagram.svg" alt="Instagram icon" /></li>
                                    <li><img src="src\Images\twitter.svg" alt="Twitter icon" /></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div id="divInfo">
                                <p className="pTitle">Informação</p>
                                <ul>
                                    <li>Sobre Drip Store</li>
                                    <li>Segurança</li>
                                    <li>Wishlist</li>
                                    <li>Blog</li>
                                    <li>Trabalhe conosco</li>
                                    <li>Meus Pedidos</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div id="divCategory">
                                <p className="pTitle">Categorias</p>
                                <ul>
                                    <li>Camisetas</li>
                                    <li>Calças</li>
                                    <li>Bonés</li>
                                    <li>Headphones</li>
                                    <li>Tênis</li>
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
                </div>
            </footer>
        </FooterContainer>
    );
}

export default Footer;