import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
//import ProductViewPage from "../layout/ProductViewPage";
//import NotFound from "../pages/NotFound";
//import Product from "../pages/Product";

const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />}/> 
                        <Route path="/products" element={<ProductListingPage />} />
                    
                    </Route>

                </Routes>
            </BrowserRouter>

        </>
     );
}
 
export default Paths;