import './NavBar.css';
import { Link } from 'react-router-dom';



const NavBar = () => {
    return (
        <nav className='NavBar'>
            <a href='/'>

            <div className='logo'>
                <h3>Libregraff</h3>
            </div>
            </a>
            <div className='categories'>

                <ul>                   
                    <li><Link to="/artistica">ARTÍSTICA</Link></li>
                    <li><Link to="/comercial">COMERCIAL</Link></li>
                    <li><Link to="regaleria">REGALERIA</Link></li>
                    <li><Link to="/tecnologia">TECNOLOGIA</Link></li>       
                </ul>
            </div>
               
            <div className='cart'>
                <box-icon name="cart"></box-icon>
                <span className='item__total'>0</span> 
            </div>
        </nav>
    )
}

export default NavBar