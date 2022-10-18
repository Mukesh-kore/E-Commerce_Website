import {SET_PRODUCTS,SELECTED_PRODUCTS, ITEM_ADDED, ITEM_REMOVED, CART_ITEM_ADDED, QTY_ADDED} from '../constant/constant'
export const set_Products=(products)=>{
    console.log(products)
    return{
        type:SET_PRODUCTS,
        payload:products,
    }
}
export const selected_Products=(products)=>{
    return{
        type:SELECTED_PRODUCTS,
        payload:products,
    }
}
export const items_added=(item)=>{
    return{
        type:ITEM_ADDED,
        payload:item
    }
}
export const item_removed=(item2)=>{
    return{
        type:ITEM_REMOVED,
        payload:item2
    }
}
export const cart_item_added=(item)=>{
    return{
        type:CART_ITEM_ADDED,
        payload:item
    }
}
export const qty_added=(item1)=>{
    
    return{
        type:QTY_ADDED,
        payload:item1
    }
}
// export const total_clear=(item1)=>{
    
//     return{
//         type:"TOTAL_CLEAR"
//     }
// }