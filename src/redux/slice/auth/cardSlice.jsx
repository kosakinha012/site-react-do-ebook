import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [], // Lista de itens no carrinho
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find(i => i.id === item.id);

            if (existingItem) {
                existingItem.quantity += 1;
                // NÃO alterar price aqui, só a quantidade
            } else {
                state.cartItems.push({ ...item, quantity: 1, });
            }

            console.log("Itens no carrinho:", JSON.parse(JSON.stringify(state.cartItems)));
        },
        removeFromCart: (state, action) => {
            const item = state.cartItems.find(i => i.id === action.payload);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
                }
            }

            console.log("Carrinho atualizado:", JSON.parse(JSON.stringify(state.cartItems)));
        },
        clearCart: (state) => {
            state.cartItems = [];
            console.log("Carrinho esvaziado.");
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
