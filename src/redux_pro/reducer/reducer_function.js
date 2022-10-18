import * as constants from '../constant/constant';
const initialState = {
   product: []
};
export const reducer_function = (state = initialState, action) => {
   console.log(action.payload);
   switch (action.type) {
      case constants.SET_PRODUCTS:
         return {
            ...state, product: action.payload
         };
      // case constants.SELECTED_PRODUCTS:
      //    return{
      //       ...state,object:action.payload
      //    }
      default: return state;
   }
}
// const initialState_2={
//    object:{}
// }
export const reducer_function_2 = (state = {}, action) => {
   switch (action.type) {
      case constants.SELECTED_PRODUCTS:
         return {
            ...state, ...action.payload
         }
      default: return state;
   }

}
// export default reducer_function;
export const initial_value = {
   cart_items: []
}
export const cart_function = (state = initial_value, action) => {
   
   switch (action.type) {
      case constants.ITEM_ADDED:
         return {
            ...state, cart_items: [...state.cart_items, { ...action.payload, qty: 1 }]
         }
      case constants.ITEM_REMOVED:
         // console.log(action.payload)
         return {
            ...state,
            cart_items: state.cart_items.filter((p) => p.id !== action.payload.id)
         }
      case constants.CART_ITEM_ADDED:
         // console.log(action.payload)
         return {

            ...state, cart_items: [...state.cart_items, { ...action.payload }]
         }
      case "QTY_ADDED":
         // return {
         //    ...state, cart_items:state.cart_items.map((c) =>
         //    c.id === action.payload ? ({...c,qty:c.qty+1}):c
         //    ),
         // }
          let quantity = state.cart_items.map((p)=>{
            if(p.id===action.payload){
               return{...p,qty:p.qty+1}
            }
            return p;
          });
         return{
           // ...state,cart_items:[...state.cart_items,state.cart_items[index].qty +=1] not working..
            ...state,cart_items:quantity
         }
      case "REMOVED":
         // return {
         //    ...state, cart_items:state.cart_items.map((c) =>
         //    c.id === action.payload ? ({...c,qty:c.qty+1}):c
         //    ),
         // }
       
      
          let quantity2 = state.cart_items.map((p)=>{
            if(p.id===action.payload){
               return{...p,qty:p.qty-1}
            }
            return p;
          }).filter(data=>data.qty!=0)
          console.log(quantity2);
         return{
           // ...state,cart_items:[...state.cart_items,state.cart_items[index].qty +=1] not working..
            ...state,cart_items:quantity2
         }
         case "TOTAL_CLEAR":
            return{
               ...state,cart_items:[]
            }
      default: return state;
   }
};

// {cart_items:[null]}