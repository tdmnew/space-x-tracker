import { API } from '@core/constants';
import type { FilteredPayload,Payload } from '@core/types';

import { spacexApi } from '../index';

const { SPACEX } = API;

const mapPayload = (payload: Payload) => ({
  id: payload.payload_id,
  type: payload.payload_type,
  manufacturer: payload.manufacturer,
  nationality: payload.nationality,
  orbit: payload.orbit,
})

export const payloads = spacexApi.injectEndpoints({
  endpoints: (build) => ({
    getAllPayloads: build.query<FilteredPayload[], void>({
      query: () => SPACEX.PAYLOADS,
      transformResponse: (res: Payload[]) => res.map(mapPayload)
    }),
    getOnePayload: build.query<FilteredPayload, string | undefined>({
      query: (id) => `${SPACEX.PAYLOADS}/${id}`,
      transformResponse: (res: Payload) => mapPayload(res)
    })
  }),
  overrideExisting: false
});

export const { useGetAllPayloadsQuery, useGetOnePayloadQuery } = payloads;
