import { StateSchema } from 'app/providers/StoreProvider';

const getProfileData = (state: StateSchema) => state.profile?.data;

export { getProfileData };
