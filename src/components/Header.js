import React from "react"
import "./Components.css"

const Header = (props)=> {
const {countCartItems} = props
    return(
        <header className="headerBody">
            <div>
                <a  className="font noneTextDecoration" href="#/">
                    <h1> Web Shop</h1>
                </a>
            </div>
            <div>
                <a className="spaceRight noneTextDecoration" href="#/cart">
                     Cart {""}
                     {countCartItems ? (
                         <button className="cartCounter">{countCartItems}</button>
                     ): ""}
                 </a>  
                
                <a className="noneTextDecoration" href="#/signin"> SignIn </a>                
            </div>

        </header>
    )

}


export default Header
