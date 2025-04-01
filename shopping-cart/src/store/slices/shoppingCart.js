import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items:[
        
    ],

}
const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState,
    reducers: {}
});

// Export the reducer correctly
export default shoppingCartSlice.reducer;
