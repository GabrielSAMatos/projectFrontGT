import styled from "styled-components"; 
import { Link } from "react-router-dom";

const StyledImage = styled.img`

`;

const Logo = () => {
    return ( 
        <>
            <StyledImage src="src\Images\logo-header.svg" alt="Icone Digital Store"/> 
        </>
     );
}
 
export default Logo;
