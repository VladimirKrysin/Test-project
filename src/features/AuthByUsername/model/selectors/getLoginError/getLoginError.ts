import { StateSchema } from 'app/providers/StoreProvider';

const getLoginError = (state: StateSchema) => state?.loginForm?.error;
export { getLoginError };
