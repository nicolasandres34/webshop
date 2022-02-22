import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const Basket = (props)=>{
const {cartItems, onAdd, onRemove} = props;
const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
const itemDiscount20 = (itemsPrice * 0.80).toFixed(2)  
const itemDiscount5 = (itemsPrice * 0.80).toFixed(2)
const itemDiscount20eur = (itemsPrice - 20).toFixed(2)
const eur65 = (itemsPrice - 20).toFixed(2)


const [code, setCode] = useState({})
const [disc, setDisc] = useState([])


const getInputCode = (e) =>{
  const {name, value} = e.target;
  setCode({...code,[name]:value})
  console.log(code)
} 

const removeCode = ()=>{
  setDisc("")
}

const discounts = () => {
  if (code.name === "20%OFF"){
    setDisc(itemDiscount20)
  }else if(code.name === "5%OFF"){
    setDisc(itemDiscount5)
  }else if (code.name === "20EUROFF"){
    setDisc(itemDiscount20eur)
  }
}

if(itemsPrice === 74.97){
  console.log("working")
}

  return(
    <aside className="cartBody">

    <h1 className="font">CART</h1>

    <hr></hr>
    <input
    className=" font cartInput"
     placeholder="Discount code?"
     value={code.name}
     name="name"    
     type="code"
      onChange={getInputCode}/>

      <button className="cartButton font" onClick={discounts}>apply</button>

      <hr></hr>

    <div>{cartItems.length === 0 && <div className="font">Cart Empty</div>}</div>
    {cartItems.map((item) => (
      <div className="font cartProd" key={item.id}>
        <div>{item.name}</div>
        <div>
          <button className="quantityButton" onClick={()=>onAdd(item)}>+</button>
          <button className="quantityButton" onClick={()=>onRemove(item)}>-</button>
        </div>
        <div>
          {item.quantity} x ${item.price.toFixed(2)}
        </div>
      </div>
    ))}
    {cartItems.length !== 0 &&(
      <>
      <hr></hr>
      <div className="font cartPrice">
      <div>Price</div>
       <div>{itemsPrice.toFixed(2)} EUR</div>
       </div>
       <div className="font cartPrice">
      <div>Final Price</div>
      <div>{disc} EUR</div>
      </div>
  
      <hr></hr>
      <div>
        <Link to="/checkout"><Button className="font margin5">Checkout</Button></Link>
        <Button className="font" onClick={removeCode}>remove discounts</Button>
        
        
      </div>
      </>
    )}
    
    </aside>
  )

}

export default Basket