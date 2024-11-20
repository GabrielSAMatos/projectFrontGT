import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />}/>
                    <h1>Path</h1>
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Paths;