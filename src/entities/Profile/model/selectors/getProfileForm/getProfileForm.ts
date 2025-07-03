import { StateSchema } from 'app/providers/StoreProvider';

const getProfileForm = (state: StateSchema) => state.profile?.form;

export { getProfileForm };
