import { configureStore } from '@reduxjs/toolkit'
import coinCounterReducer from './slices/moneySlice'
export const store = configureStore({
  reducer: {
    coinCounter: coinCounterReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch