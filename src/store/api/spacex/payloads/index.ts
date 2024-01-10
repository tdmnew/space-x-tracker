import API from '@core/constants';
import type { Payload } from '@core/types';

import { spacexApi } from '../index';

const { SPACEX } = API;

export const payloads = spacexApi.injectEndpoints({
  endpoints: (build) => ({
    getAllPayloads: build.query<Payload[], void>({
      query: () => SPACEX.PAYLOADS
    }),
    getOnePayload: build.query<Payload, string | undefined>({
      query: (id) => `${SPACEX.PAYLOADS}/${id}`
    })
  }),
  overrideExisting: false
});

export const { useGetAllPayloadsQuery, useGetOnePayloadQuery } = payloads;
