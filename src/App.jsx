
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';

import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import Cart from './Pages/Cart';

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"></ShopCategory>}></Route>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"></ShopCategory>}></Route>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"></ShopCategory>}></Route>
        <Route path='/product' element={<Product></Product>}>
            <Route path=':productId' element={<Product></Product>}></Route>
       
        </Route>
        
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginSignup></LoginSignup>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      
    </div>
  )
}

export default App