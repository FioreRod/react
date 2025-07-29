import Carro from "../assets/Carrito.svg"
import './components.css'

function Carrito(){
    return(
        <div className='div-carrito'>
        <img src={Carro} alt="" />
        </div>
    )
}

export default Carrito