import app from './firebase'
import SignUp from './SignUp';
import SignIn from './SignIn'

import Details from './Details';
import Categories from './Categories';
import CategoryList from './CategoryList';

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import ProductList from './ProductList';
import Product from './Product';
import Checkout from './Checkout';

const App = () => {
    const [user, setUser] = useState(null)
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json =>setProducts(json))
            .catch((err) => alert(err))
    }, [])
    
    return (
        <div>
            <>
               
                <Navbar></Navbar>   
                 <Routes>
                     <Route path="/" element={<ProductList user={user} setCart={setCart} products={products}></ProductList>}></Route> 
                    <Route path="/login" element={<SignIn setUser={setUser}></SignIn>}></Route>
                    <Route path="/register" element={<SignUp setUser={setUser}></SignUp>}></Route>
                    <Route path="/product/:id" element={<Details></Details>}></Route>
                    <Route path="/categories" element={<Categories></Categories>}></Route>
                    <Route path="/categories/:categoryName" element={<CategoryList user={user} setCart={setCart}></CategoryList>}></Route>
                    <Route path="/checkout" element={<Checkout cart={cart}></Checkout>}>Checkout</Route>
                </Routes> 

            </>

        </div>
    )
}

export default App;
