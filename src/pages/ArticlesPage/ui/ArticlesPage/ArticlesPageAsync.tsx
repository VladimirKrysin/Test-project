import { lazy } from 'react';
const ArticlesPageAsync = lazy(
  () =>
    new Promise((res) => {
      /// @ts-ignore
      setTimeout(() => res(import('./ArticlesPage')), 1500);
    }),
);

export { ArticlesPageAsync };
