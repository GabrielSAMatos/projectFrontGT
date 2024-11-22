import styled from "styled-components";

const OffersContainer = styled.section`
    width: 1440px;
    height: 875px;
    background-color: red;
`

const Offers = () => {
    return ( 
        <OffersContainer className="flex justify-content-center m-auto">
            <h1>Offer</h1>
        </OffersContainer>
     );
}
 
export default Offers;