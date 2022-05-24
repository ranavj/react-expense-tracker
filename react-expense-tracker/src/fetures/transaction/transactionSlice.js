import { createSlice } from "@reduxjs/toolkit";

const initialTransactions = {}
const transactionSlice = createSlice({
    name: 'transactions',
    initialState: initialTransactions,
    reducers: {
        addTransaction: (state, action) => {
            let { category } = action.payload
            if(state[category]){
                return {...state, [category] : [ ...state[category], action.payload ] }                
            }else{
                return {...state, [category] : [ action.payload ] } 
            }
        },
        deleteTransaction: (state, action) => {
            const { category, id } = action.payload;
            const deleteItems = state[category].filter(item => item.id !== id);
            return {...state,[category]:  deleteItems}
        }
    }
});

export const selectAllTransations = state => state.transactions;
export const selectFlattenedTransations = state => Object.values(state.transactions).reduce((a,b) => [...a, ...b], [])
export const { addTransaction, deleteTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;