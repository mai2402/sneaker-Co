import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    cartItems: [],
    loading: false,
    
}


const cartSlice= createSlice({
    name: "cart",
    initialState,
    reducers:{
        loading(state){
          state.loading = true
        },
        addToCart(state, action) {
            
              state.cartItems.push(action.payload);
            
        },
        removeFromCart(state,action){
            // payload == item id
         state.cartItems = state.cartItems.filter((item)=>item.id !== action.payload )
        },
        emptyCart(state){
            state.cartItems=[];
        },
        increaseQuantity(state,action){
            // payload == item id
            const item = state.cartItems.find((item)=>item.id === action.payload)
            item.quantity++
            item.totalPrice = item.price * item.quantity;

        },
        decreaseQuantity(state,action){
             const item = state.cartItems.find((item)=>item.id===action.payload)
              item.quantity--
              item.totalPrice = item.price * item.quantity;

              if (item.quantity === 0) {
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
              }
        }

    }
})

export const {loading,addToCart,removeFromCart,emptyCart,increaseQuantity,decreaseQuantity}= cartSlice.actions
export default cartSlice.reducer;

export const getCart = (state)=> state.cart.cartItems;

