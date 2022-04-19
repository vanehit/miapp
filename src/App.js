
import './App.css';
import React, { useState, createContext } from 'react';
import  NavBar  from './components/NavBar/NavBar';
import 'boxicons';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import ItemCount from './components/ItemCount/ItemCount';




export const Context = createContext ()

function App() {
  const [cart, setCart] = useState([])

  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos`)
  }

  return (
    <div className="App">
        {/*<Context.Provider value={{cart, setCart}}>*/}
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <ItemCount stock={5}/>
            <Routes path="/" element={<ItemListContainer />}>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
            </Routes>
          </BrowserRouter>
          </CartContextProvider>
        {/*</Context.Provider>*/}
      </div>
  );
}


export default App;
