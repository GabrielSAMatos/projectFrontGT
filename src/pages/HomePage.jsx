import FeaturedCollection from "../components/FeaturedCollection";
import MiddleHomePage from "../components/MiddleHomePage";
import Offers from "../components/Offers";
import OfferSpecial from "../components/OfferSpecial";

const HomePage = () => {
    return ( 
        <>
            <Offers />
            <MiddleHomePage />
            <OfferSpecial />
        </>
     );
}
 
export default HomePage;