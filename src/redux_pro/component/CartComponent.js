import { setNestedObjectValues } from 'formik';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { item_removed } from '../action/productAction';
import EmptyCartComponent from './EmptyCartComponent';
// import { qty_added } from '../action/productAction';
export default function CartComponent() {
    const { cart_items } = useSelector((state) => state.cart_items);
    console.log(cart_items);
    let dispatch = useDispatch();

    return (
        <>
            {
                cart_items.length == 0 ? (<EmptyCartComponent/>) : (
                    
                        cart_items.map((p) => {
                            return (


                                <div className="container mt-3" key={p.id}>
                                    <div  style={{ display: 'flex', backgroundColor: " #f2f4f6", padding: "30px", marginBottom: "10px",borderRadius:"10px" }}>
                                        <div style={{ flex: 1, textAlign: 'center' }}>
                                            <img src={p.image} height="200px" width="200px"></img>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                           <h4> <span className='d-block'>{p.title}</span></h4>
                                           <h4> <span className='d-block'>{p.qty}x{p.price}={(p.qty*p.price.toFixed(2))}</span></h4>
                                            <span className="d-block"></span>
                                            {/* <select value={p.qty} onChange={(e) => dispatch({ type: "QTY_ADDED", payload:p.id, })}>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select> */}
                                            <button className=' btn-outline-secondary border-secondary me-3'style={{border:"1px solid gray "}}onClick={(e) => dispatch({ type: "REMOVED", payload:p.id, })}>
                                            <i class="bi bi-dash-lg"></i>
                                            </button>
                                            <button className=' btn-outline-secondary border-secondary padding'style={{border:"1px solid gray "}}>
                                            <i class="bi bi-plus-lg"onClick={(e) => dispatch({ type: "QTY_ADDED", payload:p.id, })}></i>

                                            </button>
                                            <button className="btn btn-outline-dark d-block mt-3"onClick={()=>dispatch(item_removed(p))}>Remove</button>
                                            {/* <i class="bi bi-dash"></i> */}
                                            
                                            
                                            

                                        </div>

                                    </div>
                                </div>
                            )



                        })
                    
                )
            }

        </>
    )
}