import React from 'react';
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import {items_added} from "../../action/productAction"
import { item_removed } from '../../action/productAction';

function MensClothsComponent() {
    const All_products = useSelector(state => state.all_reducers.product);
    const products = All_products.filter((e) => e.category == "men's clothing");
    const { cart_items } = useSelector((state) => state.cart_items);
    const dispatch = useDispatch();

    return (
        <>
            {/* <p>I am Electronic Component</p> */}
            <div className="container mt-4">
                <div className="row  ">
                    {
                        products.map((p) => {
                            return (
                                <div className="col-3 mb-4" key={p.id} height="450">

                                    <div className="card">
                                        <Link to={`/ProductDetails/${p.id}`} style={{ textDecoration: "none", color: "black" }}>
                                            <div className="card-body">
                                                <img src={p.image} alt="Image not found" height="200" style={{ width: "100%" }}></img>
                                            </div>
                                        </Link>
                                        <div className="card-footer text-center" style={{ height: "145px" }}>
                                            <p>{p.category}</p>
                                            <h4 className="fs-6" >{p.title.substring(0, 12)}...</h4>
                                            <h5>&#8377;{p.price}</h5>
                                            <span style={{ display: "flex" }}>
                                                <button className="btn btn-outline-secondary me-2" style={{ fontSize: 12 }} >Buy Now</button>
                                                {
                                                    cart_items.some((c) => c.id === p.id) ? (
                                                        <button className="btn btn-outline-secondary" style={{ fontSize: 9 }} onClick={() => dispatch(item_removed(p))}>Remove from cart</button>

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
export default MensClothsComponent;