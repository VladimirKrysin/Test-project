import { StateSchema } from 'app/providers/StoreProvider';

const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateErrors;

export { getProfileValidateErrors };
