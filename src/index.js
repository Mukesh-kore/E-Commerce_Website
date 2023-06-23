import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
// import App from './App';
// import RegisterComponent from './components/RegisterComponents';
// import LoginComponent from './components/LoginComponent';
// import FormComponent from './components/formComponent';
// import FormikComponent from './components/formikDemo';
// import ValidationComponent from './components/FormValidation_component'
// import YupValidation from './components/YupValidation';
// import FetchApiComponent from './components/FetchApi';
// import SyntheticEventHandler from './components/syntheticEvent';
// import AxiosComponent from './components/AxiosComponent';
// import KeyImportance from './components/Keys_importance';
// import RouteComponent from './components/RouteComponent';
// // import IndexComponent from './components/AmazonSite/IndexComponent';
// import Login from './components/UseCookieDemo';
// import ContextDemoComponent from './components/UseContextComponent';
// import UseStateComponent from './components/useStateComponent';
// import UseReducerComponent from './components/UseReducerComponent';

// import DemoState from './components/state';
// // import LifeCycleComponent from './components/AmazonSite/LifeCycleComponent';
// import UseEffectComponent from './components/UseEffectComponent';

// import store from "./store";
// import ReducerComponent from './ReducerComponent';
import './reducer.css'
import { Provider } from "react-redux";


 
import store_redux_pro from "./redux_pro/store_redux_pro"
import ReduxProComponent from './redux-pro_component';
import './redux_pro_style.css'
import reportWebVitals from './reportWebVitals';
// import { Form } from 'formik';
// import UseEffectPrimaryComponent from './components/useEffectPrimaryComponent';
// import UseRefComponent from './components/useRefComponent';
// import UseMemoComponent from './components/useMemoComponent';
// import UseCallBackComponent from './components/UseCallBaackComponent';
// import AxiosPracticeComponent from './components/AxiosPracticeComponent';
// here new component is added

const comp = ReactDOM.createRoot(document.getElementById('root'));
comp.render(
 
  <React.StrictMode>
  <Provider store={store_redux_pro}>
      < ReduxProComponent/>
    </Provider>
  </React.StrictMode>
  // <React.StrictMode>
  //   <AxiosPracticeComponent/>
  // </React.StrictMode>

);
// ReactDOM.render(
//   <React.StrictMode>
//     <LoginComponent/>
//  </React.StrictMode>,
//  document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
