import './App.css';

import Header from './Header';
import Leftcomponent from './Leftcomponent';
import Rightcomponent from './Rightcomponent';

const App = () => {
  return (
    <div className="main">
      <Header />
      <section className="main__content">
        <Leftcomponent />
        <Rightcomponent />
      </section>
    </div>
  )
}

export default App

