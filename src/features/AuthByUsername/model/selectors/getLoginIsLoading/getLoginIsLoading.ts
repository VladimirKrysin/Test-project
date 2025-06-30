import { StateSchema } from 'app/providers/StoreProvider';

const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
export { getLoginIsLoading };
