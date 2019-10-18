import React from 'react';
import './App.css';
import Login from './componentes/login.jsx';
import NavBar from './componentes/navBar.jsx';
import Test from './componentes/Test.jsx';
import Ejemplo from './componentes/vacio.jsx';


function App() {
  return (<>
    <NavBar/>
    <Login/>
    <Test/>
    <Ejemplo/>

    </>
  );
}

export default App;