import store from '@store/index';

/* API */
export type { History, Mission, Payload } from './api/spacex';

/* Store */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
