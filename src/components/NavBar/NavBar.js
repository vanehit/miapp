import './NavBar.css';


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
        </nav>
    )
}

export default NavBar