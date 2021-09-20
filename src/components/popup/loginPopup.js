import reactDom from 'react-dom';

import React from 'react'

import './loginPopup.css';
import { closePopUp } from '../redux/actions';
import { connect } from 'react-redux';

const LoginPopup = (props) => {
    return (
        reactDom.createPortal(
            <div className="loginPopUp">
                <div className="cardLogin">
                    <button onClick={props.closePopUp}><ion-icon name="close-outline"></ion-icon></button>
                    <h2>login to tiktok</h2>
                    <div className="buttonsForms">
                        <div className="login_with_button">
                            <a href='/'><ion-icon name="qr-code-outline"></ion-icon></a>
                            <a href='/'>QR code</a>
                        </div>

                        <div className="login_with_button">
                            <a href='/'><ion-icon name="person-outline"></ion-icon></a>
                            <a href='/'>User phone/email/username</a>
                        </div>

                        <div className="login_with_button">
                            <a href='/'><ion-icon name="logo-facebook"></ion-icon></a>
                            <a href='/'>Continue with facebook</a>
                        </div>

                        <div className="login_with_button">
                            <a href='/'><ion-icon name="logo-google"></ion-icon></a>
                            <a href='/'>Continue with google</a>
                        </div>

                        <div className="login_with_button">
                            <a href='/'><ion-icon name="logo-apple"></ion-icon></a>
                            <a href='/'>Continue with AppleID</a>
                        </div>

                        <div className="login_with_button">
                            <a href='/'><ion-icon name="logo-snapchat"></ion-icon></a>
                            <a href='/'>Continue with snapchat</a>
                        </div>

                        <div className="noAccount">
                            Don't have an account ?  <a href="/"> Sign up</a>
                        </div>

                    </div>
                </div>
            </div>,
            document.querySelector("#pop")
        )
    )
}

export default connect(null, {
    closePopUp
})(LoginPopup);

