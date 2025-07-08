import { lazy } from 'react';
const ArticleDetailsPageAsync = lazy(
  () =>
    new Promise((res) => {
      /// @ts-ignore
      setTimeout(() => res(import('./ArticleDetailsPage')), 1500);
    }),
);

export { ArticleDetailsPageAsync };
