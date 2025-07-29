import Carrito from "./CartWidget";
import Logo from "../assets/F_F.svg";
import "./components.css";

function Header() {
    return (
        <div className="div-header">
            <div className="div-hlogo">
                <img src={Logo} alt="logo" />
                <p>ang & Feather</p>
            </div>
            {/* Barra de busqueda*/}
            {/* Usuario */}
            <Carrito />
        </div>
    );
}

export default Header;
