import API from '@core/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { SPACEX } = API;

export const spacexApi = createApi({
  reducerPath: 'spacexApi',
  baseQuery: fetchBaseQuery({ baseUrl: SPACEX.BASE_URL }),
  endpoints: () => ({})
});
