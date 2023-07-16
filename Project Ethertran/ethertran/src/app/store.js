import { configureStore } from '@reduxjs/toolkit'
import { cryptoNewsApi } from '../utils/cryptoNewsApi';

export default configureStore({
    reducer: {
    
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoNewsApi.middleware),
    
})