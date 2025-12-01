import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@/service/httpClient/baseApi';

export const store = configureStore({
  reducer: {
    baseApi: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
})

// Remove persistor completely

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch