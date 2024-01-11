import { API } from '@core/constants';
import type { FilteredHistory,History } from '@core/types';

import { spacexApi } from '../index';

const { SPACEX } = API;

const mapHistory = (history: History) => ({
  id: history.id,
  title: history.title,
  details: history.details,
  date: history.event_date_utc.slice(0, 10),
  article: history.links.article
});

export const history = spacexApi.injectEndpoints({
  endpoints: (build) => ({
    getAllHistory: build.query<FilteredHistory[], void>({
      query: () => SPACEX.HISTORY,
      transformResponse: (res: History[]) => {
        const sortedHistory = res.sort((a, b) => b.event_date_unix - a.event_date_unix);
        return sortedHistory.map(mapHistory);
      }
    }),
    getOneHistory: build.query<FilteredHistory, string>({
      query: (id) => `${SPACEX.HISTORY}/${id}`,
      transformResponse: (res: History) => mapHistory(res)
    })
  }),
  overrideExisting: false
});

export const { useGetAllHistoryQuery, useGetOneHistoryQuery } = history;
