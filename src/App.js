import { useState } from 'react';
import './App.css';
import Checkout from './components/Checkout';
import Basket from './components/Basket';
import Header from './components/Header';
import Main from './components/Main';
import data from "./data"
import Footer from './components/Footer/Footer';
import {Routes, Route} from "react-router-dom"


function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([])
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if(exist) {
      setCartItems(
        cartItems.map((x) =>
        x.id === product.id ? {...exist, quantity: exist.quantity + 1 } : x
        )
      )
    }else {
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find(x => x.id === product.id)
    if(exist.quantity === 1) {
      setCartItems(cartItems.filter((x)=>x.id !== product.id))
    }else {
      setCartItems(
        cartItems.map((x) =>
        x.id === product.id ? {...exist, quantity: exist.quantity - 1 } : x
        )
      )
    }
  }
  return (
    <div className="App">

      <Header countCartItems={cartItems.length}/>
          
       <div className='flex'> 
        <Main onAdd={onAdd} products={products}/>
        <Basket onRemove={onRemove} onAdd={onAdd} cartItems={cartItems}/>
       </div>

        <Routes>
        <Route path="/checkout" element={<Checkout />}/>
        </Routes>

        <Footer/>

    
     
    </div>
  );
}

export default App;
