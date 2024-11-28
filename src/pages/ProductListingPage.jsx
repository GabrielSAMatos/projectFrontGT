import styled from "styled-components";
import '../index.css';  
import { generateProductHTML } from '../components/ProductCard.jsx';
import ButtonOrder from "../components/ButtonOrder.jsx";


const ProductListingPage = () => {

    const ProductListingPage = styled.section `
        width: 1440px;
        height: 3276px;
        margin: auto;
        padding: 40px 100px 0px 100px;
        display: flex;
        flex-direction: column;

        & #containerResults{
            height: 60px;
            margin-bottom: 40px;
            align-items: center;
        }

        & p#resultsFor{
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            letter-spacing: 0.75px;
        }

        & p#resultsFor span{
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0.75px;
        }

        & .containerSelect select{
            width: 332px;
            height: 60px;
            border-radius: 4px;
            font-size: 16px;         
            letter-spacing: 0.75px;
            padding: 15px;
        }

        & select option span.order{
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.75px;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;

        }

        & .containerSelect select:focus {
            border-color: #0073e6; /* Cor ao focar no seletor */
        }

        & div#containerFiltrarPor{
            width: 308px;
            height: 720px;
            background-color: white;
            padding: 30px;
            gap: 20px;
            border-radius: 4px;
            margin-right: 28px;
        }

        & .containerAllItems{ 
            gap: 14px;
            margin-top: 0px;

        }

        & .containerImgItems{
            width: 292px;
            height: 321px;
            border-radius: 4px;
            background-color: white;
        }
    `

    return ( 
        <ProductListingPage>
            <div id="containerResults" className="flex justify-content-between relative">
                <p id="resultsFor">Resultados para “Tênis” - <span>389 produtos</span></p>
                <ButtonOrder/>
            </div>

            <section className="flex">
                <div id="containerFiltrarPor">
                    <p>Filtrar por</p>
                    <div className="linha" style={{width: '248px', backgroundColor: '#CCCCCC'}}></div>
                    <div>
                        <h5>Marca</h5>
                    </div>
                    <div>
                        <h5>Categoria</h5>
                    </div>
                    <div>
                        <h5>Gênero</h5>
                    </div>
                    <div>
                        <h5>Estado</h5>
                    </div>
                </div>
                <div className="containerAllItems">
                        <div className="containerAllItems grid justify-content-center">
                            {generateProductHTML(15)}
                        </div>
                    </div>
            </section>

        </ProductListingPage>
     );
}
 
export default ProductListingPage;