import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from './slices/shoppingCart'; // ✅ Corrected import
const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartReducer // ✅ Renamed for clarity
    }
});

export default store;
