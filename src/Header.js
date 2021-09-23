import './Header.css';
import logo from './images/logo.png';

let Header = () => {
    return(
    <header className="header block">
        <div className="header__container wrapper">
            <img className="logo" src={logo} alt="logo"/>
            <span className="label">Chuck Norris</span>
        </div>
    </header>        
    )
}

export default Header;