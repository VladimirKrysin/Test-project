import { StateSchema } from 'app/providers/StoreProvider';

const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || '';
export { getLoginPassword };
