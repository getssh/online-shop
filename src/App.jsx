import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';
import Cart from './components/Cart';
import Navigation from './components/Navigation';
import Product from './components/Product';

function App() {
  return (   
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route index path='/' element={<Home />}/>
          <Route path='/:id' element={<Product />}/>
          <Route path='/category' element={<Category />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>    
      </BrowserRouter>
  )
}

export default App
