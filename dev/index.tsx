import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { externalUrlPlugin, ExternalUrlPage } from '../src/plugin';

createDevApp()
  .registerPlugin(externalUrlPlugin)
  .addPage({
    element: <ExternalUrlPage />,
    title: 'Root Page',
    path: '/external-url',
  })
  .render();
