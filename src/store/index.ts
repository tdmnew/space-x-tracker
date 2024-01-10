import { configureStore } from '@reduxjs/toolkit';

import { spacexApi } from './api/spacex';

const store = configureStore({
  reducer: {
    [spacexApi.reducerPath]: spacexApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spacexApi.middleware)
});

export default store;
