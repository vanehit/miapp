import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return (
        <nav className="NavBar">
            <div class="title">
                <h3>Libregraff</h3>
                
            </div>
            
            <div class="categories">

                <button>OFERTAS</button>
                <button>ARTÍSTICA</button>
                <button>TÉCNICA</button>
                <button>PRODUCTOS</button>
                
            </div>

            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar