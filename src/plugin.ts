import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const externalUrlPlugin = createPlugin({
  id: 'external-url',
  routes: {
    root: rootRouteRef,
  },
});

export const ExternalUrlPage = externalUrlPlugin.provide(
  createRoutableExtension({
    name: 'ExternalUrlPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
