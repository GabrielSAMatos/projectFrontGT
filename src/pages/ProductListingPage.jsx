import styled from "styled-components";
import '../index.css';  
//import { generateProductHTML } from './ProductCard';

const ProductListingPage = () => {

    const ProductListingPage = styled.section`
        width: 1440px;
        height: 3276px;
        margin: auto;
        background-color: gray;

        
    `
    return ( 
        <ProductListingPage>
            <div>
                <p>Resultados para “Tênis” - <span>389 produtos</span></p>

            </div>
        </ProductListingPage>
     );
}
 
export default ProductListingPage;