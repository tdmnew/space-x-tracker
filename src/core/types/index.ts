import store from '@store/index';

/* API */
export type {
  History,
  FilteredHistory,
  Mission,
  FilteredMission,
  Payload,
  FilteredPayload
} from './api/spacex';

/* Store */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
