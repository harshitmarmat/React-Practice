import {Redirect, Route} from 'react-router-dom'
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
        {/* <Switch> */}
          <Route path="/"  exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome/>
          </Route>
          <Route path="/products" exact>
            <Products/>
          </Route>
          <Route path="/products/:id">
            <ProductDetail/>
          </Route>
        {/* </Switch> */}
      </main>
    </div>
  );
}

export default App;
