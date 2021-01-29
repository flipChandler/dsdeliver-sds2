import { ReactComponent } from '*.svg';
import './styles.css';
import { ReactComponent as Logo} from './logo.svg'; // cria tag do React
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="main-navbar">
            <Logo />
            <Link to="/" className="logo-text">DS Delivery</Link>
        </nav>
    )
}

export default NavBar;