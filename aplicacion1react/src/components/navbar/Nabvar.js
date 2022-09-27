import "./Navbar.css";
import logoh from "./Hoteliahzblanco.svg";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <header>
            <div className="logo">
                <img src={logoh} alt="Logo Hotelia blanco"></img>
            </div>
            <nav>
                <Link to="/" className="menu-item">Inicio</Link>
                <Link to="/habitaciones" className="menu-item">Habitaciones</Link>
                <Link to="/habitaciones/1" className="menu-item">Habitacion x</Link>
                
                <Link to="/Login" className="btn-azul">
                    <i className="fa-solid fa-user"></i>
                    Iniciar Sesión
                </Link>
            </nav>
        </header>
    );
}

export default Navbar;