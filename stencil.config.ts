import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'testlib', // valid JS identifier
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'www',
      serviceWorker: null,
      baseUrl: 'https://bernobin.github.io/test-lib/',
    },
  ],
};
