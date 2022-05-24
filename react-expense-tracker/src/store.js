import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./fetures/category/categorySlice";
import transactionReducer from "./fetures/transaction/transactionSlice";

export default configureStore({
    reducer: {
        category: categoryReducer,
        transactions: transactionReducer,
    }
    
})