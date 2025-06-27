import type { StateSchema } from 'app/providers/StoreProvider';

const getCounter = (state: StateSchema) => state.counter;

export { getCounter };
