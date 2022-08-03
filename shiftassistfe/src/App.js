import React from 'react';
import './App.css';

import axios from 'axios';

import Home from './components/Home';
import Flow from './components/Flow';
import Guide from './components/Guide';
import AGT from './components/stations/AGT';
import BOK from './components/stations/BOK';
import SPIN from './components/stations/SPIN';
import PKT from './components/stations/PKT';
import Admin from './components/Admin';
import Afdeling from './components/stations/Afdeling';

axios.defaults.baseURL = "http://localhost:8000/";

function App() {
  let component
  switch (window.location.pathname) {
    default:
      component = <Home />
      break
    case "/flow":
      component = <Flow />
      break
    case "/guide":
      component = <Guide />
      break
    case "/agt":
      component = <AGT />
      break
    case "/bok":
      component = <BOK />
      break
    case "/spin":
      component = <SPIN />
      break
    case "/pkt":
      component = <PKT />
      break
    case "/afdeling":
      component = <Afdeling />
      break
      case "/admin":
        component = <Admin />
        break
  }
  return (
    <div className="App">
      {component}
    </div>
  );
}

export default App;
