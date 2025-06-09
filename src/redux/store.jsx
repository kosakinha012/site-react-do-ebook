import {configureStore} from '@reduxjs/toolkit';
import cartReducer from "../redux/slice/auth/cardSlice"

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default store;
