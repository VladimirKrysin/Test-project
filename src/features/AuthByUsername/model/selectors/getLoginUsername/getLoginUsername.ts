import { StateSchema } from 'app/providers/StoreProvider';

const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || '';
export { getLoginUsername };
