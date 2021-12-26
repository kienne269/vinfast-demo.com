// import { configureStore } from '@reduxjs/toolkit'

// import productModalReducer from './product-modal/productModalSlice'

// import cartItemsReducer from './shopping-cart/cartItemsSlide'

// export const store = configureStore({
//     reducer: {
//         productModal: productModalReducer,
//         cartItems: cartItemsReducer
//     },
// })

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
export default configureStore({
  reducer: {
    user: userReducer,
  }
});