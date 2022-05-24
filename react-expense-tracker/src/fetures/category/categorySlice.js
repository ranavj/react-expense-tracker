import { createSlice } from "@reduxjs/toolkit";
import { CATEGORIES } from "../../data";
const initialCategory = CATEGORIES.map(item => ({category: item, ammount: 0.00}));
const categorySlice = createSlice({
    name: 'category',
    initialState : initialCategory,
    reducers: {
        loadCategory: (state, action) => {
           return state
        },
        updateCategory: (state, action) => {
            return state.map(item => {
                if(item.category === action.payload.category) return action.payload;
                else return item;
            })
        }
    }
})

export const selectCategory = state => state.category;

export const selectTotalAmmount = state => {
    
};

export const { loadCategory, updateCategory }  = categorySlice.actions;
export default categorySlice.reducer;