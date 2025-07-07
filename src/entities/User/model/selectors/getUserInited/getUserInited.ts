import { StateSchema } from 'app/providers/StoreProvider';

const getUserInited = (state: StateSchema) => state.user._inited;

export { getUserInited };
