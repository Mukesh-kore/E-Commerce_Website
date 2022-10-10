import React from 'react'
import "./App.css";
// import {incNumber} from "./actions";
// import {decNumber} from "./actions";
import * as action from './actions'

import { useSelector, useDispatch } from "react-redux";

const ReducerComponent = () => {

//   it alternative to the useContext hooks in react / consumer from context API
  const changeTheNumber = useSelector(state => state.changeTheNumber);
  
  const dispatch = useDispatch();
  
  return (
    <>
      <div className="main-div">
      

      <div className="container">
  
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
      <div className="quantity">
        <a className="quantity__minus" title="Decrement" onClick={() => dispatch(action.decNumber())}><span>-</span></a>
        <input name="quantity" type="text" className="quantity__input" value={changeTheNumber} />
        <a className="quantity__plus" title="Increment" onClick={() => dispatch(action.incNumber(5))}><span>+</span></a>
      </div>
  
          </div>
        </div>
    </>
  )
}

export default ReducerComponent;