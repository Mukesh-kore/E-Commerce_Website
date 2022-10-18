import React from "react";
// import mystyle from '/mystyle.cssz'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { items_added, item_removed } from "../action/productAction";
import './mystyle.css'
const Product_component = () => {
    const products = useSelector((state) => state.all_reducers.product);
    const { cart_items } = useSelector((state) => state.cart_items);
    const dispatch = useDispatch();
    

    
    // console.log(products[0]);
    // const {product}=products[0]
    console.log(products);
    return (
        <> 
           <div className="container">
            <div className="main_div ">
                {
                    products.map(p => {
                        return (
                            <div  key={p.id} >

                                <div className="card ">
                                    <Link to={`/ProductDetails/${p.id}`} style={{ textDecoration: "none", color: "black" }}>
                                        <div className="card-body ">
                                            <img src={p.image} alt="Image not found" className="card-img-top" height="200" style={{ width: "100%" }}></img>
                                        </div>
                                    </Link>
                                    <div className="card-footer h-100 text-center" style={{ height: "145px" }}>
                                        <p>{p.category}</p>
                                        <h4 className="fs-6" >{p.title.substring(0, 12)}...</h4>
                                        <h5 className="mb-2">&#8377;{p.price}</h5>
                                        <span style={{ display: "flex",justifyContent:"center" }}>
                                            <button className="btn btn-outline-secondary me-2" style={{ fontSize: 12 }} >Buy Now</button>
                                            {/* <button className="btn btn-outline-secondary" style={{ fontSize: 12 }}>Add to cart</button> */}
                                            {
                                                cart_items.some((c) => c.id === p.id) ? (
                                                    <button className="btn btn-outline-secondary" style={{ fontSize: 9, }} onClick={() => dispatch(item_removed(p))}>Remove from cart</button>

                                                ) : (
                                                    <button className="btn btn-outline-secondary" style={{ fontSize: 10 }} onClick={() => dispatch(items_added(p))}>Add to Cart</button>

                                                )
                                            }
                                        </span>
                                    </div>

                                </div>

                            </div>
                        )

                    })
                }
            </div>
            </div>
        </>
    )
}
export default Product_component