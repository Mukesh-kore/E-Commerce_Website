import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HeaderComponent from './redux_pro/component/Header_component'
import ProductListing from './redux_pro/component/Product_listing';
import ProductDetails from './redux_pro/component/ProductsDetails'
import ElectronicComponent from './redux_pro/component/Sections_component/ElectronicsComponent';
import WomenClothsComponent from './redux_pro/component/Sections_component/WomenClothsComponent';
import JewelryComponent from './redux_pro/component/Sections_component/JewelryComponent';
import MensClothsComponent from './redux_pro/component/Sections_component/MensClothingComponent';
import CartComponent from './redux_pro/component/CartComponent';
// import banner from '../public/assets/banner.jpg'
const ReduxProComponent = () => {
    const styles = {
        display: "grid",
        justifyContent: "center",
        marginTop: "10px",
        gridAutoFlow: "column"
       
    }
    return (

        <>
            <Router>
                <HeaderComponent />
                
                <div >
                <div>
                    <img src="./assets/image.jpg"style={{height:'320px',width:"100%", paddingTop: 70}}/>
                </div>
                    <div style={styles}>
                        <Link to="/" className='btn btn-outline-secondary me-2'>All</Link>
                        <Link to="/WomenClothsComponent" className='btn btn-outline-secondary me-2'>Women Clothing</Link>
                        <Link to="/MensClothsComponent" className='btn btn-outline-secondary me-2'>MensClothing</Link>
                        <Link to="/JewelryComponent" className='btn btn-outline-secondary me-2'>Jewelry</Link>
                        <Link to="/ElectronicsComponent" className='btn btn-outline-secondary '>Electronics</Link>
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<ProductListing />} />
                    <Route path="/ProductDetails/:productId" element={<ProductDetails />} />
                    <Route path='/ElectronicsComponent' element={<ElectronicComponent />} />
                    <Route path="/WomenClothsComponent" element={<WomenClothsComponent />} />
                    <Route path="/JewelryComponent" element={<JewelryComponent />} />
                    <Route path="/MensClothsComponent" element={<MensClothsComponent />} />
                    <Route path="/CartComponent" element={<CartComponent />} />
                </Routes>
            </Router>
        </>
    )
}
export default ReduxProComponent;