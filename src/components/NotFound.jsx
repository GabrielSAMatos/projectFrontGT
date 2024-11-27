import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="flex flex-column align-items-center justify-content-center" style={{height: '346px'}}>
            <h1>Página não encontrada ou em manutenção.</h1>
            <Link to={"/"} style={{marginTop: '20px'}}><button className="cursor-pointer">Voltar</button></Link>
            
        </div>
     );
}
 
export default NotFound;