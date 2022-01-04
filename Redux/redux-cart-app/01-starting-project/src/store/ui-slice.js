import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartIsVisible: false , showNotification : null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    notificationHandler(state,action){
        state.showNotification = {
            title : action.payload.title,
            status : action.payload.status,
            message : action.payload.message
        }
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice;