import API from '@core/constants';
import type { Mission } from '@core/types';

import { spacexApi } from '../index';

const { SPACEX } = API;

export const missions = spacexApi.injectEndpoints({
  endpoints: (build) => ({
    getAllMissions: build.query<Mission[], void>({
      query: () => SPACEX.MISSIONS
    }),
    getOneMission: build.query<Mission, string>({
      query: (id) => `${SPACEX.MISSIONS}/${id}`
    })
  }),
  overrideExisting: false
});

export const { useGetAllMissionsQuery, useGetOneMissionQuery } = missions;
