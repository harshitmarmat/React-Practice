import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchData = () => {
    return async(dispatch) => {

        const sendFetchRequest = async() => {
            const response = await fetch('https://redux--cart-app-default-rtdb.firebaseio.com/cart.json');
        
            if(!response.ok){
                throw new Error('Fetching Data failed!')
            }
            
            const data = await response.json();

            return data;
        }

        try{
            const cartData = await sendFetchRequest();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity,
              }))
        } catch(error){
            dispatch(uiActions.notificationHandler({
                title : 'Error',
                status : 'error',
                message : 'Fetching cart data failed!'
              }));
        }

    }
}

export const sendCartData = (cart) => {
    return async(dispatch) => {
      dispatch(uiActions.notificationHandler({
        title : 'sending...',
        status : 'pending',
        message : 'Sending cart data!'
      }));
  
      const sendRequest = async(cart) => {
        const response = await fetch('https://redux--cart-app-default-rtdb.firebaseio.com/cart.json',{
          method : 'PUT',
          body: JSON.stringify({
              items : cart.items,
              totalQuantity : cart.totalQuantity
          })
        });
  
        if(!response.ok){
          throw new Error('Sending cart data failed');
        }
      }
  
      try{
        await sendRequest(cart);
        dispatch(uiActions.notificationHandler({
          title : 'Successful',
          status : 'success',
          message : 'Sent cart data successfully!'
        }));
      }catch(error){
        dispatch(uiActions.notificationHandler({
          title : 'Error',
          status : 'error',
          message : 'Sending cart data failed'
        }));
      }    
    }
  }