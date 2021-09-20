import './App.css';

import Header from './Header';
import Leftcomponent from './Leftcomponent';
import Rightcomponent from './Rightcomponent';
import LoginPopup from './popup/loginPopup';

import { connect } from 'react-redux';

const App = (props) => {
  return (

    <div className="main">
      <Header />
      {
        props.isshowpopup ? <LoginPopup /> : ""
      }

      <section className="main__content">
        <Leftcomponent />
        <Rightcomponent />
      </section>
    </div>
  )
}

const mapStateToProp = (store) => {
  return {
    isshowpopup: store.isShowPopup
  }
}

export default connect(mapStateToProp)(App);

