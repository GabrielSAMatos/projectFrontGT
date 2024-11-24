import styled from "styled-components";
import '../index.css';  

const MiddleHomePage = () => {

    const MiddleContainer = styled.section`
        background-color: #80808075;
        height: 1862px;
        width: 1440px;
        padding: 38px 100px 120px 100px;
    
    & div#containerPromocoes{
        gap: 12px;
    }

    & .off{
        margin-top: 39px;
        width: 96px;
        height: 32px;
        padding: 5px 0px 5px 15px;
        border-radius: 29px;
        background-color: #E7FF86;
        color: var(--dark-gray-2);
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0.75px;
    }

    & .btnBuy{
        width: 153px;
        height: 48px;
        color: var(--primary);
        background-color: var(--light-gray-3);
    }

    & div.divPromocoes{
        width: 405px;
        height: 251px;
        background-color: #d8e3f2;
        border-radius: 8px
    }

    & div.escritaPromocoes{
        margin-left: 30px;
    }

    & div#containerIcones{
        gap: 48px;
    }

    & div.divIcones{
        width: 104px;
        height: 104px;
        background-color: white;
        border-radius: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer; 
    }

    & img.icones{
        height: 63.92px;
        filter: invert(55%) sepia(5%) saturate(0%) hue-rotate(180deg) brightness(65%) contrast(93%);
    }

    & div.divIcones:hover img.icones{
        filter: invert(31%) sepia(89%) saturate(464%) hue-rotate(316deg) brightness(91%) contrast(97%);

    }

    & div.divIcones:hover img#cap{
        filter: invert(50%) sepia(50%) saturate(900%) hue-rotate(316deg) brightness(120%) contrast(1000%);

    }

    & span.legenda{
        margin-top: 12px;
        font-size: 14px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0.75px;
    }

    & #verTodos{
        font-size: 18px;
        font-weight: 400;
        line-height: 34px;
        letter-spacing: 0.75px;
    }


    `

    
    return ( 
        <MiddleContainer className="m-auto">
            <section>
                <h4>Coleções em destaque</h4>
                <div id="containerPromocoes" className="flex ">
                    <div className="divPromocoes relative">
                        <div className="escritaPromocoes z-1 absolute">
                            <p className="off">30% OFF</p>
                            <h3>Novo drop Supreme</h3>
                            <a href="#Comprar"><button className="btnBuy">Comprar</button></a>
                        </div>
                        <img 
                        src="src\Images\products\shirtSW.png" 
                        alt="Blusa Supreme Star Wars" 
                        className="absolute bottom-0 right-0 z-0"
                        />
                    </div>
                    <div className="divPromocoes relative">
                        <div className="escritaPromocoes absolute z-1">
                            <p className="off">30% OFF</p>
                            <h3>Coleção Adidas</h3>
                            <a href="#Comprar"><button className="btnBuy">Comprar</button></a>

                        </div>
                        <img 
                        src="src\Images\products\ddd-1.png" 
                        alt="Tenis Marca X" 
                        className="absolute bottom-0 right-0 z-0 opacity-100"
                        />
                    </div>
                    <div className="divPromocoes relative">
                        <div className="escritaPromocoes">
                            <p className="off">30% OFF</p>
                            <h3>Novo <br/> Beats Bass</h3>
                            <a href="#Comprar"><button className="btnBuy">Comprar</button></a>
                        </div>
                        <img 
                        src="src\Images\products\headphone.png" 
                        alt="Headphone" 
                        className="absolute bottom-0 right-0"
                        />
                    </div>
                </div>
            </section>
            <section>
                <h4 style={{textAlign: 'center', margin: '100px 0px 20px 0px'}}>Coleções em destaque</h4>
                <div id="containerIcones" className="flex justify-content-center">
                    <div  className="flex flex-column justify-content-center">
                        <a href="#Blusas"><div className="divIcones"><img className="icones" src="src\Images\icons\vector-shirt.svg" alt="Icone de blusa"/></div></a>
                        <span className="text-center legenda">Blusas</span>
                    </div>
                    <div className="flex flex-column justify-content-center">
                        <a href="#Calças"><div className="divIcones"><img className="icones" src="src\Images\icons\vector-pants.svg" alt="Icone de blusa"/></div></a>
                        <span className="text-center legenda">Calças</span>
                    </div>
                    <div className="flex flex-column justify-content-center">
                        <a href="#Bonés"><div className="divIcones"><img className="icones" id="cap" src="src\Images\icons\vector-cap.svg" alt="Icone de blusa"/></div></a>
                        <span className="text-center legenda">Bonés</span>
                    </div>
                    <div className="flex flex-column justify-content-center">
                        <a href="#Headphones"><div className="divIcones"><img className="icones" src="src\Images\icons\vector-headphone.svg" alt="Icone de blusa"/></div></a>
                        <span className="text-center legenda">Headphones</span>
                    </div>
                    <div className="flex flex-column justify-content-center">
                        <a href="#Tênis"><div className="divIcones"><img className="icones" src="src\Images\icons\vector-shoes.svg" alt="Icone de blusa"/></div></a>
                        <span className="text-center legenda">Tênis</span>
                    </div>
                </div>
               
            </section>
            <section>
            <div className="flex justify-content-between" style={{margin: '123px 0px 20px 0px'}}>
                    <h4 style={{textAlign: 'center'}}>Produtos em alta</h4>
                     <div className="flex">
                        <a id="verTodos" href="#Ver-Todos" className="flex" style={{color: 'var(--primary)', textDecoration: 'none'}}>
                            <p className="flex align-items-center justify-content-center mr-2">Ver todos</p>
                            <span style={{fontSize: '25px'}}>&#129106;</span>
                        </a>
                    </div>
                </div>                
                <div>

                </div>
            </section>
        </MiddleContainer>
     );
}
 
export default MiddleHomePage;