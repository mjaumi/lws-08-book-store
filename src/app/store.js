import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import filtersReducer from '../features/Filters/FiltersSlice';

// configuring the redux store here
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddlewares => getDefaultMiddlewares().concat(apiSlice.middleware),
});
