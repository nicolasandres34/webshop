import React from "react"
import "./Footer.css"

function Footer(){

    return(
        <footer id="contacto" className="bodyFooter">
            <div className="contenedor footerContent">
                <div className="contactUs">
                    <h2 className="brand">WEB SHOP</h2>
                    <p>All that you need!</p>
                    <p>contact: +385 3456 234</p>
                   <p>mail: webshop.@gmail.com </p>
                </div>
               
                <div className="socialMedia">
                    <a href="./" className=" socialMediaIcon">
                        <i className='bx bxl-instagram'></i>
                    </a>
                    <a href="./" className=" socialMediaIcon">
                        <i className='bx bxl-whatsapp'></i>
                    </a>
                    <a href="./" className=" socialMediaIcon">
                        <i className='bx bx-mail-send'></i>
                    </a>
                </div>
            </div>

            <div className="line"></div>
    
    </footer>
    )
}

export default Footer