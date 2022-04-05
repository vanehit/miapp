import { useState } from 'react';
import './App.css';
import React from 'react';
import  NavBar  from './components/NavBar/NavBar';
import 'boxicons';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';



function App() {
  const [show, setShow] = useState (true)
  const handleOnAdd =(quantity) =>{
    console.log('se agrega ${quantity}');
  }

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='COMPRÁ DESDE CASA - ENVIOS GRATIS DE LIBREGRAFF'/>
      <ItemCount initial={1} stock={10} onAdd={handleOnAdd}></ItemCount>
    </div>
  );

  
}

export default App;
