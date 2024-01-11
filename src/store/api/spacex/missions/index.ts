import { API } from '@core/constants';
import type { FilteredMission,Mission } from '@core/types';

import { spacexApi } from '../index';

const { SPACEX } = API;

const mapMissions = (mission: Mission) => ({
  id: mission.mission_id,
  name: mission.mission_name,
  description: mission.description,
  payload_ids: mission.payload_ids
});

export const missions = spacexApi.injectEndpoints({
  endpoints: (build) => ({
    getAllMissions: build.query<FilteredMission[], void>({
      query: () => SPACEX.MISSIONS,
      transformResponse: (res: Mission[]) => res.map(mapMissions)
    }),
    getOneMission: build.query<FilteredMission, string>({
      query: (id) => `${SPACEX.MISSIONS}/${id}`,
      transformResponse: (res: Mission) => mapMissions(res)
    })
  }),
  overrideExisting: false
});

export const { useGetAllMissionsQuery, useGetOneMissionQuery } = missions;
