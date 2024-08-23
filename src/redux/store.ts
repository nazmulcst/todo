import { configureStore } from '@reduxjs/toolkit'

import todoReducer from "./todoSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const reducerConfig = {
  key: "root",
  version: 1,
  storage
}

 const persistedReducer = persistReducer(reducerConfig, todoReducer)

export const store = configureStore({

  reducer: {
    todo: persistedReducer,
  },
})
// LocalStorage
export const persistStor = persistStore(store)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch