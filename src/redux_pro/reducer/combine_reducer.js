import { combineReducers } from 'redux'
import  { reducer_function_2 ,reducer_function, cart_function} from './reducer_function'

const Reducers = combineReducers(
    {
        all_reducers: reducer_function,
        Product_Details:reducer_function_2,
        cart_items:cart_function
    }
);
export default Reducers;