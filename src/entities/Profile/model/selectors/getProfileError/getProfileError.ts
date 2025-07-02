import { StateSchema } from 'app/providers/StoreProvider';

const getProfileError = (state: StateSchema) => state.profile?.error;

export { getProfileError };
