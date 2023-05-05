import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Cart from './components/Cart';
import Navigation from './components/Navigation';

function App() {
  return (   
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route index path='/' element={<Home />}/>
          <Route path='/category' element={<Product />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>    
      </BrowserRouter>
  )
}

export default App
