import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [], // Lista de itens no carrinho
};

const cartSlice = createSlice({
    name: "cart", // Nome do slice
    initialState, // Estado inicial do slice
    reducers: {
        addToCart: (state, action) => {// Adiciona um item ao carrinho
            
            const item = action.payload; // O item a ser adicionado
            const existingItem = state.cartItems.find((i) => i.id === item.id); // Verifica se o item já está no carrinho
            if (existingItem) { // Se o item já está no carrinho, incrementa a quantidade
                existingItem.quantity += 1;
                existingItem.price += item.price; // Atualiza o preço total do item
            } else {
                state.cartItems.push({ ...item, quantity: 1, unit: item.price}); // Se o item não está no carrinho, adiciona o item com quantidade 1
            }
            console.log("Itens no carrinho:", JSON.parse(JSON.stringify(state.cartItems))); // Para evitar problemas de referência no Redux
        },
        removeFromCart: (state, action) => {
            const item = state.cartItems.find((i) => i.id === action.payload); // Encontra o item a ser removido
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                item.price -= item.unit;
            } else {
                state.cartItems = state.cartItems.filter((i) => i.id !== action.payload); // Remove o item do carrinho pelo ID do item a ser removido (action.payload)
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
