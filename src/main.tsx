import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from '@routes/ErrorPage.tsx';
import History from '@routes/History';
import Missions from '@routes/Missions';
import Payload from '@routes/Payload';
import Root from '@routes/Root.tsx';
import store from '@store/index.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'history',
        element: <History />
      },
      {
        path: 'missions',
        element: <Missions />
      },
      {
        path: 'payload/:payloadId',
        element: <Payload />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  </React.StrictMode>
);
