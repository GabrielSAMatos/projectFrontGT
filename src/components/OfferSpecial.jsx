import styled from "styled-components";
import '../index.css';

const OfferSpecial = () => {

    const OfferSpecialContainer = styled.section`
        background-color: var(--white);
        
        & section{
            width: 1440px;
            height: 553px;
            gap: 67px;
        }
        
        & div#divContainerLeft{
            margin-left: 129px;
            margin-top: 87px;
        }

        & div#bgShoes{
            width: 466px;
            height: 466px;
            background: linear-gradient(180deg, rgba(66, 0, 255, 0.25) -40.67%, rgba(255, 255, 255, 0) 70%);
            border-radius: 100%;
        }

        & img{
            top: 28px;
            left: -77px;
        }

        & h5{
            width: 116px;
            font-size: 14px;
            line-height: 22px;
            letter-spacing: 0.75px;
            color: var(--primary);
        }

        & h2{
            width: 514px;
            font-size: 48px;
            line-height: 50px;
            letter-spacing: 0.9999998807907104px;
            color: var(--dark-gray-2);
        }

        & p{
            width: 589px;
            height: 112px;
            font-size: 16px;
            line-height: 28px;
            letter-spacing: 0.75px;
            color: var(--dark-gray-2);
        }

        & button {
            width: 200px;
        }
    `
    return ( 
        <OfferSpecialContainer>
            <section className="flex m-auto justify-content-center align-items-center">
                <div id="divContainerLeft" className="relative border-1">
                    <div id="bgShoes" className="flex justify-content-center align-items-center x"></div>
                    <img 
                        src="src\Images\products\Laye-1.png" 
                        alt="Air Jordan Nike" 
                        className="h-20rem absolute"
                        />
                </div>
                <div id="divContainerRight">
                    <h5>Oferta Especial</h5>
                    <h2>Air Jordan edição de colecionador</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip
                    </p>
                    <a href="#Oferta-Nike-Jordan"><button>Ver Oferta</button></a>
                </div>
            </section>
        </OfferSpecialContainer>
     );
}
 
export default OfferSpecial;