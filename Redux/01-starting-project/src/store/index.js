import { createStore } from "redux";
import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialCounterState = {
    counter : 0,
    showCounter : true
}

const counterSlice = createSlice({
    name : 'counter',
    initialState : initialCounterState,
    reducers : {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter= state.counter+action.payload;
        },
        toggle(state){
            state.showCounter= !state.showCounter;
        }
    }
});


const initialAuthState = {
    isAuth : false
};

const isAuthSlice = createSlice({
    name : 'authentication',
    initialState : initialAuthState,
    reducers : {
        logIn(state){
            state.isAuth = true;
        },
        logOut(state){
            state.isAuth= false;
        }
    }
})

const store = configureStore({
    reducer : { 
        counter :counterSlice.reducer,
        auth : isAuthSlice.reducer
    }
});


export const counterAction = counterSlice.actions;
export const authAction = isAuthSlice.actions;
// const counterReducer = (state = initialState, actions) =>{
//     if(actions.type ==='INCREMENT'){
//         return {
//             counter : state.counter + 1,
//             showCounter : state.showCounter
//         }
//     }
//     if(actions.type==='DECREMENT'){
//         return {
//             counter : state.counter - 1,
//             showCounter : state.showCounter
//         }
//     }
//     if( actions.type ==='INCREASE'){
//         return {
//             counter : state.counter + actions.amount,
//             showCounter : state.showCounter
//         }
//     }
//     if(actions.type ==='TOGGLE'){
//         return{
//             showCounter : !state.showCounter,
//             counter : state.counter
//         }
//     }
//     return state;
// }

// const store = createStore(counterReducer);

export default store;

