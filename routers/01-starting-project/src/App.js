import {Route} from 'react-router-dom'
import Header from './Components/Header';
import ProductDetail from './Pages/ProductDetail';
import Products from './Pages/Products';
import Welcome from './Pages/Welcome';
function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <Route path="/welcome">
          <Welcome/>
        </Route>
        <Route path="/products">
          <Products/>
        </Route>
        <Route path="/product-detail/:productId">
          <ProductDetail/>
        </Route>
      </main>
    </div>
  );
}

export default App;
