import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'svicon',
  devServer: {
    port: 12333,
    openBrowser: false,
  },
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
