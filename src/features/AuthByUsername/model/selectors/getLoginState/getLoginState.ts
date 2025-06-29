import { StateSchema } from 'app/providers/StoreProvider';

const getLoginState = (state: StateSchema) => state?.loginForm;
export { getLoginState };
