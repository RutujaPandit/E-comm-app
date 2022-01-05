import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <div >
           
            <ul className="navbar">
                 <li id="logo"><i class="fas fa-shopping-cart"></i></li>
                 <li className ="navbar-element"><Link to="/">Home</Link></li>
                <li className ="navbar-element"><Link to="/categories">Categories</Link></li>
                <li className ="navbar-element"><Link to="/login">Login</Link></li>
                <li className ="navbar-element"><Link to="/register">Register</Link></li>
                <li className='navbar-element'><Link to="./checkout">Checkout</Link></li>
             </ul>
        </div>
    )
}

export default Navbar


