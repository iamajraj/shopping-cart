import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './slice/cart';

const store = configureStore({
    reducer: CartReducer,
});

export default store;
