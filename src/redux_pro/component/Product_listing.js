import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Product_component from './Product_component';
import { set_Products } from '../action/productAction';
import { useSelector } from 'react-redux';

const ProductListing = () => {
    const select =useSelector(state=>state.all_reducers.product)
    const dispatch = useDispatch()
   
    const fetch_data=async()=>{
        const response=await axios
        .get("https://fakestoreapi.com/products")
        .catch(err=>console.log("we got an error",err));
        // console.log(response.data);
        dispatch(set_Products(response.data));
        
    }
    useEffect(() => {
        fetch_data();
    }, []);
    console.log("state_products",select)


    return (
        <>
            < Product_component />
        </>
    )
};
export default ProductListing;