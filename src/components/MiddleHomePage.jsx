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
            <section id="">
                <h4>Coleções em destaque</h4>
                <div id="containerPromocoes" className="flex ">
                    <div className="divPromocoes">
                        <div className="escritaPromocoes">
                            <p className="off">30% OFF</p>
                            <h3>Novo drop Supreme</h3>
                            <button className="btnBuy">Comprar</button>
                        </div>
                    </div>
                    <div className="divPromocoes">
                        <div className="escritaPromocoes">
                            <p className="off">30% OFF</p>
                            <h3>Coleção Adidas</h3>
                            <button className="btnBuy">Comprar</button>
                        </div>
                    </div>
                    <div className="divPromocoes">
                        <div className="escritaPromocoes">
                            <p className="off">30% OFF</p>
                            <h3>Novo <br/> Beats Bass</h3>
                            <button className="btnBuy">Comprar</button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex justify-content-between" style={{margin: '100px 0px 20px 0px'}}>
                    <h4 style={{textAlign: 'center'}}>Coleções em destaque</h4>

                    <div className="flex" style={{color: 'var(--primary)'}}>
                        <p id="verTodos" className="flex align-items-center justify-content-center">Ver todos </p>
                        <span style={{fontSize: '25px'}}>&#129106;</span>
                    </div>
                    

                </div>
                <div id="containerIcones" className="flex justify-content-center">
                    <div className="divIcones"></div>
                    <div className="divIcones"></div>
                    <div className="divIcones"></div>
                    <div className="divIcones"></div>
                    <div className="divIcones"></div>

                </div>
               
            </section>
            <section>
                <h4 style={{margin: '123px 0px 20px 0px'}}>Produtos em alta</h4>
                <div>

                </div>
            </section>
        </MiddleContainer>
     );
}
 
export default MiddleHomePage;