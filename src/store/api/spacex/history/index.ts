import API from '@core/constants';
import type { History } from '@core/types';

import { spacexApi } from '../index';

const { SPACEX } = API;

export const history = spacexApi.injectEndpoints({
  endpoints: (build) => ({
    getAllHistory: build.query<History[], void>({
      query: () => SPACEX.HISTORY,
      transformResponse: (res: History[]) =>
        res.sort((a, b) => b.event_date_unix - a.event_date_unix)
    }),
    getOneHistory: build.query<History, string>({
      query: (id) => `${SPACEX.HISTORY}/${id}`
    })
  }),
  overrideExisting: false
});

export const { useGetAllHistoryQuery, useGetOneHistoryQuery } = history;
