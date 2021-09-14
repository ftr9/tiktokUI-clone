import './Header.css';
import Filledbuttons from './atomic/Filledbuttons';

import logo from '../images/logo.svg';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo"></img>

            <div className="header__searchBar">
                <div className="searchIcon">
                    <ion-icon name="search"></ion-icon>
                </div>
                <input type="text" placeholder="Search accounts"></input>
            </div>

            <div className="header__buttons">
                <a href="/" className="upload">Upload</a>
                <Filledbuttons />
                <ion-icon name="ellipsis-vertical-outline"></ion-icon>
            </div>

        </div>
    )
}

export default Header;
