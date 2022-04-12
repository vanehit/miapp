import './NavBar.css';



const NavBar = () => {
    return (
        <nav className='NavBar'>
            <a href='#'>

            <div className='logo'>
                <h3>Libregraff</h3>
            </div>
            </a>
            <div className='categories'>

                <ul>                   
                    <li><a href='#'>ARTÍSTICA</a></li>
                    <li><a href='#'>COMERCIAL</a></li>
                    <li><a href='#'>REGALERIA</a></li>
                    <li><a href='#'>TECNOLOGIA</a></li>       
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