import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
const HeaderComponent = () => {
    const { cart_items } = useSelector((state) => state.cart_items)
    return (
        <>
            <div className="" style={{ position: "fixed", zIndex: 10, left: 0, right: 0, top: 0 }}>
                <div className="nav text-dark bg-secondary navbar-expand-lg p-3" style={{ display: "flex", justifyContent: "space-between" }}>
                    <a className="navbar-brand" href='#'><h3 className="nav-heading">Apna bazar</h3></a>
                    <Link to="/CartComponent">
                        <button className="btn btn-success" >
                            <i className="bi bi-cart4"></i>
                            cart_items ({cart_items.length})</button>
                    </Link>
                </div>
            </div>

        </>
    )
}
export default HeaderComponent;