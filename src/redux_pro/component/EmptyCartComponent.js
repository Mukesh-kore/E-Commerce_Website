import React from 'react';
import { Link } from 'react-router-dom';

export default function EmptyCartComponent(){
    
    return(
        <>
      
        <div style={{height:"100vh",display:"flex",flexDirection:"column",
        marginTop:"10px",alignItems:'center'}}>
        <img src="/assets/flipkart.webp" alt="ghjk"style={{height:250,width:250,}}></img>
        <h3>your cart is empty</h3>
       
        <Link to='/'>
        <button className='btn btn-secondary'>shop Now</button>
        </Link>
        </div>
        </>
    )
}