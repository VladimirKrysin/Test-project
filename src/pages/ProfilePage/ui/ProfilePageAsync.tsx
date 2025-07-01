import { lazy } from 'react';
const ProfilePageAsync = lazy(
  () =>
    new Promise((res) => {
      /// @ts-ignore
      setTimeout(() => res(import('./ProfilePage')), 1500);
    }),
);

export { ProfilePageAsync };
