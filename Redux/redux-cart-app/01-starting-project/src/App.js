import { Fragment, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Notification from './components/Notification/Notification';
import Products from './components/Shop/Products';
import { fetchData, sendCartData } from './store/cart-action';

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.showNotification)
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();


  useEffect(()=> {
    dispatch(fetchData());
  },[dispatch])

  useEffect(()=>{
      
    if(!cart.changed){
      return;
    }
    dispatch(sendCartData(cart));

  },[cart,dispatch]);
  

  return (
    <Fragment>
    {notification && <Notification 
      title={notification.title}
      message={notification.message}
      status = {notification.status}
      />}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;