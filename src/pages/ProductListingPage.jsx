import styled from "styled-components";
import '../index.css';  
import { generateProductHTML } from '../components/ProductCard.jsx';
import ButtonOrder from "../components/ButtonOrder.jsx";


const ProductListingPage = () => {

    const ProductListingPage = styled.section `
        width: 1440px;
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

        & li{
            display: flex;
            gap: 10px;
            font-size: 14px;
            font-weight: 500;
            line-height: 22px;
            letter-spacing: 0.25px;
        }

        & input{
            width: 22px;
            height: 22px;
            border-radius: 2px;
            border: 1px;
            margin-bottom: 10px;
        }


        & input{
            appearance: none;
            border: 1px solid black;
            position: relative;
        }

        & input[type="checkbox"]:checked{
            background-color: var(--primary);
        }

        & input[type="checkbox"]:checked::before{
            position: absolute;
            content: url('src/Images/icons/verify.svg');
            top: 2px;
            left: 2px;
        }

        & input[type="radio"]{
            border-radius: 50%;
        }

        & input[type="radio"]:checked{
            border-radius: 50%;
            border: 1px solid var(--primary);
            background-image: radial-gradient(var(--primary) 40%, white 50%);

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
            margin-bottom: 140px;
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
                        <ul>
                            <li><input type="checkbox" name="Adidas" id="Adidas" /><label htmlFor="Adidas">Adidas</label></li>
                            <li><input type="checkbox" name="Balenciaga" id="Balenciaga" /><label htmlFor="Balenciaga">Balenciaga</label></li>
                            <li><input type="checkbox" name="K-Swiss" id="K-Swiss" /><label htmlFor="K-Swiss">K-Swiss</label></li>
                            <li><input type="checkbox" name="Nike" id="Nike" /><label htmlFor="Nike">Nike</label></li>
                            <li><input type="checkbox" name="Puma" id="Puma" /><label htmlFor="Puma">Puma</label></li>
                        </ul>
                    </div>
                    <div>
                        <h5>Categoria</h5>
                        <ul>
                            <li><input type="checkbox" name="Esporte-e-lazer" id="Esporte-e-lazer" /><label htmlFor="Esporte-e-lazer">Esporte e lazer</label></li>
                            <li><input type="checkbox" name="Casual" id="Casual" /><label htmlFor="Casual">Casual</label></li>
                            <li><input type="checkbox" name="Utilitario" id="Utilitario" /><label htmlFor="Utilitario">Utilitário</label></li>
                            <li><input type="checkbox" name="Corrida" id="Corrida" /><label htmlFor="Corrida">Corrida</label></li>
                        </ul>
                    </div>
                    <div>
                        <h5>Gênero</h5>
                        <ul>
                            <li><input type="checkbox" name="Masculino" id="Masculino" /><label htmlFor="Masculino">Masculino</label></li>
                            <li><input type="checkbox" name="Feminino" id="Feminino" /><label htmlFor="Feminino">Feminino</label></li>
                            <li><input type="checkbox" name="Unisex" id="Unisex" /><label htmlFor="Unisex">Unisex</label></li>
                        </ul>
                    </div>
                    <div>
                        <h5>Estado</h5>
                        <ul>
                            <li><input type="radio" name="NovoUsado" id="Novo" /><label htmlFor="Novo">Novo</label></li>
                            <li><input type="radio" name="NovoUsado" id="Usado" /><label htmlFor="Usado">Usado</label></li>
                        </ul>
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