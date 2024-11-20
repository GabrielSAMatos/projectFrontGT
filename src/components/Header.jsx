import styled from "styled-components";
import Logo from "./Logo";

const HeaderContainer = styled.header`
    background-color: gray;
`;

const Header = () => {
    return ( 
        <HeaderContainer>
            <header>
                <h1>Header</h1>
                <Logo />
            </header>
        </HeaderContainer>
     );
}
 
export default Header;