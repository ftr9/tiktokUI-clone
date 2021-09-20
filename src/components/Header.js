import './Header.css';
import Filledbuttons from './atomic/Filledbuttons';

import logo from '../images/logo.svg';
import { showpopUp } from './redux/actions';

import { connect } from 'react-redux';

const Header = (props) => {
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
                <Filledbuttons onclick={props.showpopUp} />
                <ion-icon name="ellipsis-vertical-outline"></ion-icon>
            </div>
        </div>
    )
}

export default connect(null, {
    showpopUp
})(Header);
