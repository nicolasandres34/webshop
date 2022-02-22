import React from "react";
import {Input} from "reactstrap";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react"
import Basket from "./Basket";




function Checkout(){


    const [user, setUser] = useState({
        name:"", email:"", adress:"", cardNumber:"", expiration:"", security:""
    })

    const getInfoUser = (e) =>{
        const {name, value} = e.target;
        setUser({...user,[name]:value})
    } 

    const checkoutSuccesfull = ()=>{

      if (user.name !== "" && user.email !== "" && user.adress !== "" && user.cardNumber !== "" && user.expiration !== "" && user.security){
        window.alert("Checkout succesfully! Thanks for your purchase.");
      } else{
        window.alert("You need to complete all the fields, Please complete and try again.");
      }  
    }



    return(

    <div className="margin checkoutBody">
      <h1 className="title font">CHECKOUT</h1>

      <hr></hr>

      <div className="flex margin">
              
        <div className="checkoutInfo">

          <h2 className="subtitle font">Info User</h2>     

          <h5 className="font">Name:</h5>   
          
          <Input
            className="Inp"
            value={user.name}
            name="name"
            placeholder="Mike Jones"
            type="text"
            onChange={getInfoUser}
          />

          <h5 className="font">Email:</h5>    

          <Input
          className="Inp"
            value={user.email}
            name="email"
            placeholder="exampl@gmail.com"
            type="email"
            onChange={getInfoUser}
          />

          <h5 className="font">Adress:</h5>    

          <Input
          className="Inp"
            value={user.adress}
            name="adress"
            placeholder="Sreet #123"
            type="text"
            onChange={getInfoUser}
          />

        </div>
        <div className="checkoutInfo">

          <h2 className="font subtitle">Card Info</h2>    

          <h5 className="font">Card Number:</h5>      
          
          <Input
            className="InpCard"
            value={user.cardNumber}
            name="cardNumber"
            placeholder="1234-5678-4568"
            type="text"
            onChange={getInfoUser}
          />

          <h5 className="font">Expiration:</h5>  

          <Input
          className="InpCard"
            value={user.expiration}
            name="expiration"
            placeholder="11/26"
            type="text"
            onChange={getInfoUser}
          />

          <h5 className="font">CVV / Security Code</h5>  

          <Input
          className="InpCard"
            value={user.security}
            name="security"
            placeholder="456"
            type="number"
            onChange={getInfoUser}
          />

        </div>
       
     
      </div>
      <Button className="font checkoutButton" onClick={checkoutSuccesfull}>Proceed with Checkout</Button>
      
      </div>

       
)

}

export default Checkout;


