import React, { useState } from "react"
import axios from "axios";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { items_added, item_removed, selected_Products } from "../action/productAction";
import { cartState } from "../context";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
const ProductDetails = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.Product_Details);
    const {cart_items} = useSelector((state)=>state.cart_items);
    console.log(cart_items);
    const { productId } = useParams();
    console.log(useParams);
    console.log(productId);
    const[value,setValue]=useState(null)
//    var value;
    const FetchProductDetails = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
        console.log(response.data);
        dispatch(selected_Products(response.data));
        setValue(Math.floor(response.data.rating.rate))
       
    }
    useEffect(() => {
        FetchProductDetails();
    }, [productId])
    
   
    return (
        <>
         {
            console.log(items)
        
         }
        
            <div className="container mt-4 border border-secondary p-3">
                <div className="row">
                    <div className="col-4 "style={{borderRight:'1px solid gray' }}>
                        <img src={items.image} style={{ width: "100%" }} />
                    </div>
                    <div className="col-8 container">
                      <h3>{items.title}</h3>
                      <span className="mb-3 fw-bolder me-1">Rating</span>
                     
                       {
                        [...Array(5)].map((_,i)=>(
                            <span key={i}>
                              {  
                               value >= i ? (
                                    <AiFillStar fontSize="15px"></AiFillStar>
                                  ):(
                                    <AiOutlineStar fontSize="15px"></AiOutlineStar>
                                  )
                              }
                            </span>
                        )
                        )
                       }
                  
                      <div className="mt-3">
                      <span className="bg-dark text-light rounded p-2 fs-4 ">${items.price}</span>

                      </div>
                      <div className="p-2 bg-secondary border border-primary rounded  mt-3 mb-1">{items.category}</div>
                      <p className='text-secondary'>{items.description}</p>
                      {
                           cart_items.some((c)=>c.id===items.id)?(
                            <button className="btn btn-outline-danger"onClick={()=>dispatch(item_removed(items))}>Remove from cart</button>
                           ):(
                            <button className='btn btn-outline-primary ps-3 pe-3'onClick={()=>dispatch(items_added(items))}>Add to Cart</button>
                           )
                      }
                     
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductDetails;