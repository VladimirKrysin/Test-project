import { lazy, FC } from 'react';
import { LoginFormProps } from './LoginForm';

const LoginFormAsync = lazy<FC<LoginFormProps>>(
  () =>
    new Promise((res) => {
      /// @ts-ignore
      setTimeout(() => res(import('./LoginForm')), 1500);
    }),
);

export { LoginFormAsync };
