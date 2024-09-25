import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../slice/user.slice"
// import productSlice from "../slice/product.slice"

export default configureStore({
    reducer : {
        users : userReducer,
        // products : productReducer,
    }
})