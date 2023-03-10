import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
      <div>
        <a className="brand" href="/">Amazona</a>
      </div>
      <div>
        <a href="/cart">Cart</a>
        <a href="/signin">Sign In</a>
      </div>
    </header>
    <main>
      <Routes>
      <Route path="/product/:id" exact element= {<ProductScreen/>}/>
      <Route path="/"  exact element= {<HomeScreen/>}/>
      </Routes>
  </main>
    <footer className="row center" >All right reserved</footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
