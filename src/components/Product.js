import React from 'react';
import {Button} from "react-bootstrap"

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className='product'>
      <img className='img' src={product.img} alt={product.name}></img>
      <h3>{product.name}</h3>
      <div>{product.price} EUR</div>
      <div>
        <Button className='button' onClick={()=>onAdd(product)}>Add To Cart</Button>
      </div>
    </div>
  );
}