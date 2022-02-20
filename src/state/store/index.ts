import { configureStore } from '@reduxjs/toolkit';
import { shoppingCartSlice } from '../reducers';

const store = configureStore({
 reducer: {
  shoppingCart: shoppingCartSlice.reducer
 }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
